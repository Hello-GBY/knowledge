import VNode from "./vnode";
import createElement from "./createElement.js";

export default function(oldVNode, newVNode) {
  // 判断第一个参数是不是dom节点 还是虚拟节点
  if (isVNode(oldVNode)) {
    // 如果不是vNode对象 需要包装成vNode对象
    oldVNode = VNode(
      oldVNode.tagName.toLowerCase(),
      {},
      [],
      undefined,
      oldVNode
    );
  }
  // 判断VNode 和 oldVNode是不是同一个节点
  // 精细化比较
  if (isEquallyNode(oldVNode, newVNode)) {
    // 精准覆盖
    console.log("使用一个节点");
  } else {
    // 暴力删除
    createElement(newVNode, oldVNode.elm);
    console.log("插入新的，删除旧的");
  }
}

function isVNode(node) {
  if (node.sel == "" || node.sel == "undefined") {
    return false;
  } else {
    return true;
  }
}

// 是不是同一个节点
function isEquallyNode(oldVNode, newVNode) {
  if (oldVNode.sel == newVNode.sel && oldVNode.data.key == newVNode.data.key) {
    // 项目
    return true;
  } else {
    return false;
  }
}
