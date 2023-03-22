import h from "./mysnabbdom/h.js";
import patch from "./mysnabbdom/patch.js";

const modelVNode = h("ul", {}, [
  h("li", {}, "A"),
  h("li", {}, "B"),
  h("li", {}, [
    h("li", {}, [
      h("ol", {}, [
        h("li", {}, "嘻嘻"),
        h("li", {}, "哈哈"),
        h("li", {}, "嘿嘿"),
      ]),
    ]),
  ]),
]);
const modelVNode2 = h("ul", { class: "ulClass" }, [
  h("li", {}, [h("li", {}, "嘻嘻")]),
  h("li", {}, "B"),
  h("li", {}, "D"),
]);

var container = document.getElementById("container");
patch(container, modelVNode2);

const butt = document.getElementById("butt");
butt.onclick = function() {
  patch(modelVNode2, modelVNode);
};
