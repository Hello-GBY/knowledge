// 将对象的数据拷贝出来
// 识别是不是对象 不是则返回
// 创建一个新的对象
// 遍历传递过来的对象、
// 从key中取值 1. 如果是对象则继续深度拷贝
//  2. 如果是值 直接赋值给创建的对象
//     如果是数组 直接 slice
//     如果是函数 则 存放 null
//     如果循环引用 则 存放空  obj == obj 即可

function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.slice();
  }
  if (obj == {}) {
    return {};
  }
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    if (typeof value == "object") {
      if (value == obj) {
        value = null;
      } else {
        value = deepClone(value);
      }
    }
    newObj[key] = value;
  });
  return newObj;
}
