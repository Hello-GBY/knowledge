var express = require("express");
var app = express();

// 访问白名单
let witeList = ["http://127.0.0.1:8080"];

// 手动设置允许跨域
app.use(function (req, res, next) {
  let origin = req.headers.origin;
  if (witeList.includes(origin)) {
    // 设置哪个源可以访问我
    res.header("Access-Control-Allow-Origin", origin);
  }
  next();
});

app.get("/getData", function (req, res) {
  console.log("res", req.headers.origin);
  res.send({ code: 200, data: 1234 });
});
app.post("/getData", function (req, res) {
  console.log("res", req.headers.origin);
  res.send({ code: 200, data: 1234 });
});

const server = app.listen(9000, function () {
  console.log("Server is running at port 9000...");
});
