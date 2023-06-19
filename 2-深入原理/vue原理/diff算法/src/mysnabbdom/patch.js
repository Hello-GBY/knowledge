import VNode from "./vnode";
import createElement from "./createElement.js";

export default function(oldVNode, newVNode) {
  // 判断第一个参数是不是dom节点 还是虚拟节点
  if (!isVNode(oldVNode)) {
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
    // 判断新旧节点是不是同一个对象
    if (
      (newVNode.text != undefined && newVNode.children == undefined) ||
      newVNode.children.length == 0
    ) {
      console.log("信节点有text属性");
      // 判断新的text和老的text是否相同
      if (oldVNode.text != newVNode.text) {
        oldVNode.elm.innerText = newVNode.text;
      }

      // if(){}
    } else {
      // 新的有children
      // 判断老的有没有 children
      if (oldVNode.children != undefined && oldVNode.children.length > 0) {
        console.log("老的也是含有children！！");
      } else {
        console.log("老的没有children");
        // ffor
        // for (let index = 0; index < newVNode.children.length; index++) {
        //   const element = newVNode.children[index];
        //   let newVNodeDom = createElement(element);
        //   oldVNode.elm.parentNode.insertBefore(newVNodeDom, oldVNode.elm);
        // }
        let newVNodeDom = createElement(newVNode);
        console.log("newVNodeDom: ", oldVNode.elm);
        oldVNode.elm.parentNode.insertBefore(newVNodeDom, oldVNode.elm);
        oldVNode.elm.parentNode.removeChild(oldVNode.elm);
      }
    }
  } else {
    // 暴力删除

    let newVNodeDom = createElement(newVNode);
    // 将生成的新的元素，加入到老节点之前
    if (oldVNode.elm.parentNode && newVNodeDom) {
      oldVNode.elm.parentNode.insertBefore(newVNodeDom, oldVNode.elm);
    }

    // 删除老节点
    oldVNode.elm.parentNode.removeChild(oldVNode.elm);
  }
}

function isVNode(node) {
  if (node.sel == "" || node.sel == undefined) {
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
