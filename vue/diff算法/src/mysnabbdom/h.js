//
// 三个函数的时候 使用
// 形态1: h('div', {}, [])
// 形态2: h('div', {}, h())
// 形态3: h('div', {}, "文本")
import VNode from "./vnode.js";
// vnode(sel, data, children, text, undefined);
// 手写 h函数
export default function(sel, data, c) {
  if (arguments.length != 3) {
    throw "对不起，h函数必须传入三个参数！";
  }
  // c是文本的时候
  if (typeof c == "string" || typeof c == "number") {
    // 说明调用的h函数是形态1
    return VNode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    console.log("c: ", c);
    // c是数组的时候的时候
    // 遍历这个对象 看看 是不是 h函数
    for (const key of c) {
      if (!(typeof key == "object" && key.hasOwnProperty("sel"))) {
        throw new Error("数组中传入的数据类型不对");
      }
    }
    return VNode(sel, data, c, undefined, undefined);
  } else if (typeof c == "object" && c.hasOwnProperty("sel")) {
    // 传入的c是唯一的h函数
    let children = [];
    children.push(c);
    VNode(sel, data, children, undefined, undefined);
  } else {
    throw new Error("传入的第三个参数的类型不对");
  }
}
