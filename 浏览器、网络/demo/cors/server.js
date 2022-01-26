var express = require("express");
var app = express();

// 访问白名单
let witeList = ["http:127.0.0.1"];

// 手动设置允许跨域
app.use(function (req, res, next) {
  let origin = req.header.origin;
  if (witeList.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    // res.setHeader;
  }
  next();
});

app.get("/getData", function (req, res) {
  console.log(req.header.origin);
  res.send({ code: 200, data: 1234 });
});
