- html5新特性
- 语义化标签
- video Audio
- cavans
- 地理定位webgl
- svg

#### src 和 href 区别
src 是来替换这个标签
href 是用来建立联系

src 会将引用的地方下载下来 填充在当前的标签中
在下载和处理的时候 会暂停处理其他资源

href 更多的是资源的指向 来标明资源的引用地址
文档和资源能并行执行

比如果 a标签的链接 就是对其他资源的一个链接
像是img 和script 这种都会将资源填充到当前位置上

#### script标签中defer和async的区别
默认是什么呢？
都是标签进行异步的情况设置、在下载得时候都不会耽误文档得解析执行
defer 标签的先后顺序进行顺序执行（在页面解析完成之后）
DOMContentLoaded 完成之后执行

async 是异步下载 下载完成之后 就立马执行 如果页面没有解析完成会耽误页面的解析

过程中

### meta标签  

分为 name / http-equiv / charset


name  可选参数 keyword[s] , description, author, renderer, robots, viewpoint
