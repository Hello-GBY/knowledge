// let ctx = document.querySelector("#canvas").getContext("2d");

function drawRect(id) {
  let canvas = document.querySelector(id).getContext("2d");

  canvas.fillStyle = "red";
  canvas.fillRect(0, 0, 100, 100);

  canvas.moveTo(0, 0);

  // canvas.lineTo(200, 0);
  // canvas.lineTo(200, 200);
  // canvas.lineTo(0, 200);
  // canvas.closePath();
  canvas.fill();
}
drawRect("#canvas");

// function drawVSCodeIcon() {
//   ctx.beginPath();
//   ctx.lineWidth = 10;
//   ctx.strokeStyle = "#c3c3c3";
//   ctx.moveTo(10, 20);
//   ctx.lineTo(10, 80);
//   ctx.lineTo(100, 10);
//   ctx.lineTo(100, 100);
//   ctx.closePath();
//   ctx.stroke();
// }
// drawVSCodeIcon();

// function drawRect() {
//   ctx.beginPath();
//   ctx.lineWidth = 10;
//   ctx.strokeStyle = "#c3c3c3";
//   ctx.arc(150, 150, 20, 0, 2 * Math.PI);
//   ctx.stroke();
//   // 创建一个圆、
// }
// drawRect();

// function drawText() {
//   // ctx.beginPath();

//   ctx.font = "12px";
//   ctx.strokeStyle = "#000";
//   ctx.fillStyle = "#000";

//   ctx.fillText("Hello World", 0, 50);
//   ctx.strokeText("Big smile!", 10, 90);

//   // ctx.closePath();
// }
// drawText();
