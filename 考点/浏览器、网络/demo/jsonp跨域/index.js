// 1. 原生实现
var script = document.createElement('script');
script.type = 'text/javascript'
script.src = 'http://127.0.0.1:9009/testJsonp?username=admin&callback=handleCallback'

document.head.appendChild(script);
// 回调执行函数
function handleCallback(res) {
    console.log('res: ', res);
    // alert(JSON.stringify(res));
}