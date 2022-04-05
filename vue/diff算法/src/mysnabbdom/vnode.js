// vnode(sel, data, children, text, undefined);
function VNode(sel, data, children, text, elm) {
  const key = data === undefined ? undefined : data.key;

  return { sel, data, children, text, elm, key };
}
export default VNode;
