class Vue {
  constructor(options) {
    this.$data = options.data();
    console.log("this.$data: ", this.$data);
    // console.log("dep: ", dep);

    // 数据劫持
    Observe(this.$data);

    // 属性代理 将vue上定义的属性之间设置到data上
    Object.keys(this.$data).forEach((key) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        set(newValue) {
          this.$data[key] = newValue;
        },
        get() {
          return this.$data[key];
        },
      });
    });

    // 对html进行模板编译
    Compile(options.el, this);
  }
}

// 处理指令操作
function Compile(el, vm) {
  // 获取对应的文档结构
  vm.$el = document.querySelector(el);
  // 创建文档碎片（创建一块内存，放到内存中，页面上没有，防止重排重绘）
  const fragment = document.createDocumentFragment();

  while ((children = vm.$el.firstChild)) {
    fragment.appendChild(children);
  }

  replace(fragment);
  vm.$el.appendChild(fragment);

  // 文档编译
  function replace(node) {
    // 匹配{{}}
    const regMustaChe = /\{\{\s*(\S+)\s*\}\}/;

    // 是文本节点
    if (node.nodeType == 3) {
      const text = node.textContent;
      let execResult = regMustaChe.exec(text);
      // console.log("text: ", text);
      // console.log("execResult: ", execResult);
      if (execResult) {
        let value = execResult[1]
          .split(".")
          .reduce((newObj, k) => newObj[k], vm);
        node.textContent = text.replace(regMustaChe, value);

        // 创建watcher实例
        new Watcher(vm, execResult[1], (newValue) => {
          node.textContent = text.replace(regMustaChe, newValue);
        });
      }
      return;
    }
    // input v-model 属性
    if (node.nodeType == 1 && node.tagName.toUpperCase() == "INPUT") {
      // 得到当前元素所有属性节点
      const attr = Array.from(node.attributes);
      let isHasVModel = attr.find((k) => k.name == "v-model");
      if (isHasVModel) {
        let newValue = isHasVModel.nodeValue
          .split(".")
          .reduce((newObj, k) => newObj[k], vm);
        node.value = newValue;

        new Watcher(vm, isHasVModel.nodeValue, (newValue) => {
          node.value = newValue;
        });

        // 监听数据改变
        node.addEventListener("input", (e) => {
          let newValue = e.target.value;
          let arr = isHasVModel.nodeValue.split(".");
          let obj = arr
            .slice(0, arr.length - 1)
            .reduce((newObj, k) => newObj[k], vm);
          obj[arr[arr.length - 1]] = newValue;
        });
      }
    }
    node.childNodes.forEach((e) => replace(e));
  }
}

function Observe(obj) {
  if (!obj || typeof obj !== "object") return;

  Object.keys(obj).forEach((key) => {
    const dep = new Dep();

    let value = obj[key];
    // 递归掉用（深层调用）
    Observe(value);

    // 数据劫持
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set(newValue) {
        // 递归掉用 (当重新赋值时新对象的时候)
        Observe(newValue);
        console.log("数据劫持 set: " + key, newValue);
        value = newValue;
        dep.notify();
      },
      get() {
        console.log("数据劫持 get:" + key, value);
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
    });
  });
}
// 订阅者
class Dep {
  constructor() {
    this.sub = [];
  }

  addSub(watcher) {
    this.sub.push(watcher);
  }
  // 通告
  notify() {
    console.log("Dep notify 发布订阅");
    this.sub.forEach((watcher) => {
      watcher.upData();
    });
  }
}

// 发布者

class Watcher {
  /**
   *
   * @param {*} vm vue实例
   * @param {*} key 属性
   * @param {*} cb 更新自己
   */
  constructor(vm, key, cb) {
    this.vm = vm;
    this.key = key;
    this.cb = cb;

    // 存入
    Dep.target = this;
    key.split(".").reduce((newObj, k) => newObj[k], vm);
    Dep.target = null;
  }

  // 修改dom
  upData() {
    let newValue = this.key
      .split(".")
      .reduce((newObj, k) => newObj[k], this.vm);
    console.log("newValue: ", newValue);
    this.cb(newValue);
  }
}
