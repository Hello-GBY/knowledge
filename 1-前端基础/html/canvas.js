let ctx = document.querySelector("#canvas").getContext("2d");

function drawVSCodeIcon() {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#c3c3c3";
  ctx.moveTo(10, 20);
  ctx.lineTo(10, 80);
  ctx.lineTo(100, 10);
  ctx.lineTo(100, 100);
  ctx.closePath();
  ctx.stroke();
}
drawVSCodeIcon();

function drawRect() {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#c3c3c3";
  ctx.arc(150, 150, 20, 0, 2 * Math.PI);
  ctx.stroke();
  // 创建一个圆、
}
drawRect();
