// alert(123);
import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
// 创建patch函数
// ** patch 函数用于 将虚拟节点上树
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);

// 创建虚拟节点
const modelVNode = h("a", { props: { href: "https: //" } }, "xixixi");
const modelVNode2 = h("ul", { class: "ulClass" }, [
  h("li", "你好"),
  h("li", "你好"),
]);

var container = document.getElementById("container");
// patch(container, modelVNode);
patch(container, modelVNode2);
console.log("modelVNode: ", modelVNode);

/**
 * h 函数：
 *  1.转换输入的数据，转换成虚拟dom树结构
 *  2.对输入的数据进行一个验证
 *  3.将数据按格式进行编辑
 * 调用 vnode函数
 * vnode就是虚拟的dom树结构
 */
