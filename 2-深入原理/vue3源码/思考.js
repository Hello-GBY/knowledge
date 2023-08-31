# 官方资料

## 渲染机制

https://cn.vuejs.org/guide/extras/rendering-mechanism.html

## 渲染函数 & JSX

https://cn.vuejs.org/guide/extras/render-function.html

# 组件如何渲染的？

import { createApp } from 'vue'
import App from './app'
const app = createApp(App)
app.mount('#app')

// 如何实现 createApp
function createApp (...args) {
  // 创建 app 对象
  const app = ensureRenderer().createApp(...args) //  {render, createApp}
  const { mount } = app
  // 重写 mount 方法
  // 目的： 标准的跨平台渲染流程是先创建 vnode，再渲染 vnode。此外参数 rootContainer 也可以是不同类型的值，比如，在 Web 平台它是一个 DOM 对象，而在其他平台（比如 Weex 和小程序）中可以是其他类型的值。所以这里面的代码不应该包含任何特定平台相关的逻辑，也就是说这些代码的执行逻辑都是与平台无关的。因此我们需要在外部重写这个方法，来完善 Web 平台下的渲染逻辑。
  app.mount = (containerOrSelector) => {
    // 
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
