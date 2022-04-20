import h from "./mysnabbdom/h.js";
import patch from "./mysnabbdom/patch.js";

const modelVNode = h("ul", {}, [
    h('li', {} ,'A'),
    h('li', {} ,'B'),
    h('li', {} ,[
        h('li', {}, [
            h('ol', {} ,[
                h('li', {} ,'嘻嘻'),
                h('li', {} ,'哈哈'),
                h('li', {} ,'嘿嘿'),
            ])
        ])
    ])
]);
// const modelVNode2 = h("ul", { class: "ulClass" }, [
//   h("li", "你好"),
//   h("li", "你好"),
// ]);

var container = document.getElementById("container");
// patch(container, modelVNode);
patch(container, modelVNode);
