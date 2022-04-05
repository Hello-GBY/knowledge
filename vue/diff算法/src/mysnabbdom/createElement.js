// 真正创建节点
export default function(VNode, pivot) {
  // 把虚拟节点插入到基础树上
  let domNode = document.createElement(VNode.sel);
  console.log("domNode: ", domNode);
  // 判断是否含有子节点
  if (VNode.children != undefined && VNode.children.length) {
    // VNode.children.insertBefore
  } else if (VNode.text != "") {
    domNode.innerText = VNode.text;
    console.log("pivot: ", pivot);
    console.log("pivot.parent: ", pivot.parentNode);
    pivot.parentNode.insertBefore(domNode, pivot);
  }
}
