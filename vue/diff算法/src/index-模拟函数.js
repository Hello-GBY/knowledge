import h from "./mysnabbdom/h.js";
let res = h("ul", {}, [h("li", {}, "123"), h("li", {}, "123"), 123]);
console.log("res: ", res);
