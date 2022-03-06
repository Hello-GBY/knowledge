class Vue {
  constructor(options) {
    this.$data = options.data;
  }
  // 数据劫持
  Observe(data) {}
}

function Observe(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];

    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      set(newValue) {
        console.log("newValue: ", newValue);
        value = newValue;
      },
      get() {
        return value;
      },
    });
  });
}
let obj = {
  name: 123,
};
Observe(obj);

obj.name = "qw";
