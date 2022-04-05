import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
} from "snabbdom";
const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
]);
const container = document.getElementById("container");
const butt = document.getElementById("butt");
const vModel = h("ul", [
  h("li", { key: "1" }, "A"),
  h("li", { key: "2" }, "B"),
  h("li", { key: "3" }, "C"),
  h("li", { key: "4" }, "D"),
]);
const vModel2 = h("ul", [
  h("li", { key: "0" }, "E"),
  h("li", { key: "1" }, "A"),
  h("li", { key: "2" }, "B"),
  h("li", { key: "3" }, "C"),
  h("li", { key: "4" }, "D"),
]);

patch(container, vModel);

butt.addEventListener("click", (e) => {
  // 加入key会进行最小的更新
  patch(vModel, vModel2);
});

// 更改了父元素标签
const vModel3 = h("ol", [
  h("li", { key: "0" }, "E"),
  h("li", { key: "1" }, "A"),
  h("li", { key: "2" }, "B"),
  h("li", { key: "3" }, "C"),
  h("li", { key: "4" }, "D"),
]);
// butt.addEventListener("click", (e) => {
//   patch(vModel, vModel3);
// });

// patch 函数 key 是服务于最小更新的
// 之比较同层比较
// 只有同一个虚拟节点才进行比较

/**
 * *最小量更新，key 这个节点的唯一标识，在更改前后他们是同一个dom节点
 * *合理的优化机制：
 * * 当父元素机制变化的时候， 对于子元素直接暴力删除 不进行对比
 *
 * * 头插入
 * * 更改父元素
 * * 多加一层的情况
 */
