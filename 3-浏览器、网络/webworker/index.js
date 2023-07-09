// 进行数据的发送 线程的 接收
// 1.接收主线程的数据
// 2.发送数据给主线程

function testWebWork() {
  let worker = new Worker("./worker.js");

  worker.onmessage = function (e) {
    // 接收worker 的数据
    let data = e.data;
    console.log("收到已经处理的数据: ", e.data);
    // worker.postMessage("已经收到数据 -> " + data);
  };

  // 给worker 发送数据
  setTimeout(() => {
    console.log("发送数据，帮我排序一下，谢谢：");
    worker.postMessage([1, 2, 3]);
  }, 2000);
}
testWebWork();
