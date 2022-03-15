class Vue {
  constructor(options) {
    this.$data = options.data();
    console.log("this.$data: ", this.$data);

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

function Compile(el, vm) {
  // 获取对应的文档结构
  vm.$el = document.querySelector(el);
  // 创建文档碎片（创建一块内存，放到内存中，页面上没有，防止重排重绘）
  const fragment = document.createDocumentFragment();
  while ((children = vm.$el.firstChild)) {
    fragment.appendChild(children);
  }

  // 文档编译

  vm.$el.appendChild(fragment);
}

function Observe(obj) {
  if (!obj || typeof obj !== "object") return;

  Object.keys(obj).forEach((key) => {
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
        console.log("obj: " + key + "  被赋值了", newValue);
        value = newValue;
      },
      get() {
        console.log("obj: " + key + "  被获取值", value);
        return value;
      },
    });
  });
}
// 订阅者
class Dep {
  constructor() {
    this.sup = [];
  }

  addSub(event) {
    this.sup.push(event);
  }
  // 通告
  notify() {
    this.sup.forEach((event) => {
      event();
    });
  }
}

// 发布者

class Watcher {
  constructor(cb) {
    this.cb = cb;
  }

  // 修改dom
  upaDate() {
    this.cb();
  }
}
