// vnode(sel, data, children, text, undefined);
function VNode(sel, data, children, text, elm) {
  return { sel, data, children, text, elm };
}
export default VNode;
