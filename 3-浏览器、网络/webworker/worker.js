// 接收数据
onmessage = function (e) {
  console.log("worker接收到的数据: ", e.data);
  // 发送数据
  // postMessage("worker已经收到数据 -> " + e.data);
  console.log("正在处理中。。。。");
  this.setTimeout(() => {
    console.log("数据处理完毕，发送给主线程");
    postMessage("数据处理完毕" + 10086);
  }, 4000);
};
