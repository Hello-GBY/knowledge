## 1.文字溢出

1. 单行文本溢出

```CSS
{
    width: ...px; /* 宽度固定*/ 
    overflow: hidden; /* 超出隐藏*/ 
    text-overflow: ellipsis; /* 省略号*/ 
    white-space: no-warp;/* 文字不换行*/ 
}
```
2. 多行文本溢出
```CSS
// 第一种: -webkit-box + line-clamp
{
    width: ...px; /* 宽度固定 */ 
    overflow: hidden; /* 超出隐藏 */ 
    display: -webkit-box; /* 作为弹性伸缩盒子模型显示 */ 
    -webkit-box-orient: vertical; /* 垂直排列 */ 
    -webkit-line-clamp: 2; /* 展示行数 */ 
}

// 第二种: 伪类 + 定位
XXX {
    width: ...px;  /* 宽度固定 */ 
    overflow: hidden;  /* 超出隐藏 */ 
}
XXX::after{
    content: "...";
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #fff;  /* 背景是白色的 */ 
}
```
## 2.div居中
### 1. 相对定位 + transform
```css
 /* 不需要知道宽高 */
.to-center {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); 
}
```
### 2. 绝对定位 + margin 负一半
```css
 /* 需要知道宽高 */
.to-center {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px; /* div 自身高 100px */ 
  margin-left: -50px; /* div 自身宽 100px */ 
}

注意：父元素也需要有定位
```

### 3. 绝对定位 0 + margin auto 
```css
/* 不需要知道宽高 */
.to-center {
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  margin: auto;
}
```
### 4. 父元素 flex布局
```css
// 注意这个是加载父元素上的
.to-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```
### 5. 父元素display: grid + 子元素 margin auto
```css
// 父元素
.to-center {
  display: grid;
}
// 子元素
XXX {
 ...
 margin: auto
}
```

### 6. 父元素display: table-cell + vertical-align: middle + 子元素 margin auto
```css
// 父元素
.to-center {
  display: table-cell;
  vertical-align: middle;
}
// 子元素
XXX {
 ...
 margin: auto
}
```
## 3.Flex 布局

/**flex 布局默认存在两条轴*/
display: flex
### 在父元素的属性
```css
定义主轴的排序方式：
flex-direction: row | row-reverse | column | cloumn-reverse;
定义主轴子元素的排列方式：
justify-content: flex-end | flex-start | space-between | space-around;
定义侧轴的排列方式：
(元素不换行的情况下)
align-items: flex-end | flex-end | center | stretch
(元素会换行的情况下)
align-content: flex-end | flex-end | center | stretch | space-between | space-around
// 是否换行
flex-warp: no-warp | warp
// 复合写法
flex-flow: flex-direction  justify-content
```
### 定义在内部的子元素的身上
```css
order: number 越小越靠前
align-self: 单个子元素的排列方式

flex: 1 // 是一种复合写法（1，1，0%）（grow, shrink, basis）
定义在分配多余空间之前，项目占据的主轴空间，根据这个属性计算剩余的空间
就是按照他的占用情况来计算有多少剩余空间，剩余空间会被flex-shrink、flex-grow所作用
flex-basis: 
剩余空间不够时，定义项目缩小比例，必须是空间不够的情况下才会生效，默认是一
flex-shrink: number
剩余空间存在时，定义项目上放大比例（在宽度上）必须是有剩余空间的时候才会生效，默认是0
flex-grow: number 
```

## 4.BFC模型
BFC是一块独立的渲染区域，内部的元素不会影响外部，外部也不会影响到内部

触发BFC的条件是：
1. html根标签
2. overflow: 不是 visiable
3. position: absolution fixed
4. float: 不为none
5. display: flow-root 、flex、inline-block



## 5.实现三角形

## 6. Postion几种用法对应的特性

## 7.盒模型

## 8.响应式布局方案

## 9.transition、transform、translate

## 10.提高动画的渲染性能
