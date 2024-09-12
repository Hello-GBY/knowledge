# 官方资料

## 渲染机制

https://cn.vuejs.org/guide/extras/rendering-mechanism.html

## 渲染函数 & JSX

https://cn.vuejs.org/guide/extras/render-function.html

# 组件如何渲染的？

import { createApp } from 'vue'
import App from './app'
const app = createApp(App) 
// {mount (rootCantiner) => {// 有渲染方法} , _component: rootComponent // APP)}
app.mount('#app')

// 如何实现 createApp
function createApp (...args) {
  // 创建 app 对象
  const app = ensureRenderer().createApp(...args) //  {render, createApp}
  const { mount } = app
  // 重写 mount 方法
  // 目的： 标准的跨平台渲染流程是先创建 vnode，再渲染 vnode。
  //      此外参数 rootContainer 也可以是不同类型的值，
  //      比如，在 Web 平台它是一个 DOM 对象，而在其他平台（比如 Weex 和小程序）中可以是其他类型的值。所以这里面的代码不应该包含任何特定平台相关的逻辑，也就是说这些代码的执行逻辑都是与平台无关的。因此我们需要在外部重写这个方法，来完善 Web 平台下的渲染逻辑。
  app.mount = (containerOrSelector) => {
    // 标准化容器（获取容器）
    const container = normalizeContainer(containerOrSelector)
    if (!container) return
      
    const component = app._component
    // 如组件对象没有定义 render 函数和 template 模板，则取容器的 innerHTML 作为组件模板内容
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML
    }
    // 挂载前清空容器内容
    container.innerHTML = ''
    // 真正的挂载
    return mount(container)
  }
  return app
}
// 创建 app 对象和重写 app.mount 方法

// 如何实现 ensureRenderer

// 渲染相关的一些配置，比如更新属性的方法，操作 DOM 的方法
const rendererOptions = {
  patchProp,
  ...nodeOps 
}
let renderer
function ensureRenderer () {
  return renderer || (renderer = createRenderer(rendererOptions))
}

function createRenderer (options) {
  return baseCreateRenderer(options)
}
function baseCreateRenderer (options, createHydrationFns) {
  // 创建渲染器
  function render(vnode, container) {
    // 组件渲染的核心逻辑
  }
  return {
    render,
    createApp: createAppAPI(render)
  }
}

function createAppAPI (render) {
  return function createApp (rootComponent, rootProps = null) {
    // 创建 app 对象
    const app = {
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      mount(rootContainer) {
        // 创建根组件的 vnode
        vnode = createVNode(rootComponent, rootProps)
        render(vnode, rootContainer)
        app._container = rootContainer
        return vnode.component.proxy
      },
      _render: render
    }
    return app
  }
}
// 以上就是 createApp 的实现，它的核心逻辑就是创建 app 对象，然后返回 app 对象。

// ** const app = createApp(App)
1. 返回了 一个对象 它的结构如下：
2. 将APP组件挂载到 _component 上
{
  _component: rootComponent,
  _props: rootProps,
  _container: null,
}

// ** app.mount('#app')
1. 重写mount方法  重写的目的是为了标准化容器 简单来说就是获取DOM对象
2. 然后调用mount方法，传递的是DOM对象
3. 其中核心
    // todo: 为什么要创建vnode? 为什么要传递vnode和DOM对象?
    vnode = createVNode(rootComponent, rootProps) // 传递的是APP组件
    render(vnode, rootContainer) // 将vnode和DOM对象
    // todo: vnode.component.proxy 是啥？
4. 返回的是  vnode.component.proxy

// ** 下面的核心是 createVNode, render
// vnode = createVNode(rootComponent, rootProps)
function createVNode(type, props = null ,children = null) {
  if (props) {
    // 处理 props 相关逻辑，标准化 class 和 style
  }

  // 对 vnode 类型信息编码
  const shapeFlag = isString(type)
    ? 1 /* ELEMENT */
    : isSuspense(type)
      ? 128 /* SUSPENSE */
      : isTeleport(type)
        ? 64 /* TELEPORT */
        : isObject(type)
          ? 4 /* STATEFUL_COMPONENT */
          : isFunction(type)
            ? 2 /* FUNCTIONAL_COMPONENT */
            : 0

  
  const vnode = {
    type,
    props,
    shapeFlag,
    // 一些其他属性
  }

  // 标准化子节点，把不同数据类型的 children 转成数组或者文本类型
  normalizeChildren(vnode, children)

  return vnode
}
// vnode
{ type : xx, props: xx, shapeFlag: xx, children: xx }
// render(vnode, rootContainer)
function render  (vnode, container) =>  {
  if (vnode == null) {
    // 销毁组件
    if (container._vnode) {
      unmount(container._vnode, null, null, true)
    }
  } else {
    // 创建或者更新组件
    patch(container._vnode || null, vnode, container)
  }

  // 缓存 vnode 节点，表示已经渲染
  container._vnode = vnode
}

function patch (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, optimized = false) => {
  // 如果存在新旧节点, 且新旧节点类型不同，则销毁旧节点
  if (n1 && !isSameVNodeType(n1, n2)) {
    anchor = getNextHostNode(n1)
    unmount(n1, parentComponent, parentSuspense, true)
    n1 = null
  }

  const { type, shapeFlag } = n2

  switch (type) {
    case Text:
      // 处理文本节点
      break
    case Comment:
      // 处理注释节点
      break
    case Static:
      // 处理静态节点
      break
    case Fragment:
      // 处理 Fragment 元素
      break
    default:
      if (shapeFlag & 1 /* ELEMENT */) {
        // 处理普通 DOM 元素
        processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized)
      }
      else if (shapeFlag & 6 /* COMPONENT */) {
        // 处理组件
        processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized)
      }
      else if (shapeFlag & 64 /* TELEPORT */) {
        // 处理 TELEPORT
      }
      else if (shapeFlag & 128 /* SUSPENSE */) {
        // 处理 SUSPENSE
      }
  }
}

const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
  if (n1 == null) {
   // 挂载组件
   mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized)
  }
  else {
    // 更新组件
    updateComponent(n1, n2, parentComponent, optimized)
  }
}
// 核心
const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
  // 创建组件实例
  const instance = (initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense))
  // 设置组件实例
  setupComponent(instance)
  // 设置并运行带副作用的渲染函数
  setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized)
}

