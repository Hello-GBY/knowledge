// 使用
/**
 * 有这个函数库 snabbdom
 *
 * git 上面有库 是ts的源码
 *
 * 直接 npm i -S snabbdom 可以进行安装
 *
 * 安装 webpack 5
 * npm i -D webpack@5 webpack-cli@3 webpack-dev-server@3
 *
 * diff 算法 是新的虚拟dom 与老的虚拟dom 进行对比最小化对比 进行精细更新，最后反应到真实的dom上
 *
 * diff 步骤：
 * h 函数用来产生虚拟节点 vnode (虚拟节点)
 *
 * 一个虚拟节点 有哪些属性
 *{
    children: [],   // 子元素
    data: {},       // 属性值，样式等
    elm: undefined,  // 对应的真实dom节点，如果是 undefined 代表着歌元素还没有上树
    key: undefined,  // 唯一标识
    text: '你好'     // 表示文字
    sel: 'div'      // 标签类型
     
  }

 *
 *
 */
