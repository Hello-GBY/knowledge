// 真正创建节点
var createElement_ = (function f(VNode) {
  // 把虚拟节点插入到基础树上
  let domNode = document.createElement(VNode.sel);
  // 判断是否含有子节点
  if (VNode.children != undefined && VNode.children.length) {
    // 内部是数组 子节点就需要递归了
    for (let index = 0; index < VNode.children.length; index++) {
      const h_ = VNode.children[index]; // 新的h函数
      let chDom = f(h_);
      domNode.appendChild(chDom);
    }
  } else if (VNode.text != "") {
    domNode.innerText = VNode.text;
    // pivot.parentNode.insertBefore(domNode, pivot);
  }
  VNode.elm = domNode;

  return VNode.elm;
})
export default createElement_
