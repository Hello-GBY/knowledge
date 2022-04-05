import h from "./mysnabbdom/h.js";
import patch from "./mysnabbdom/patch.js";

const modelVNode = h("a", { props: { href: "https: //" } }, "xixixi");
// const modelVNode2 = h("ul", { class: "ulClass" }, [
//   h("li", "你好"),
//   h("li", "你好"),
// ]);

var container = document.getElementById("container");
// patch(container, modelVNode);
patch(container, modelVNode);
