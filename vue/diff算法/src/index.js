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

var container = document.getElementById("container");
patch(container, modelVNode);
console.log("modelVNode: ", modelVNode);
