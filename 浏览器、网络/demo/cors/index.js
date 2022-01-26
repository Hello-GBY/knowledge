//
var xml = new XMLHttpRequest();
xml.open("GET", "http://127.0.0.1:9000/getData", true);
// xml.setRequestHeader("name", "gby");

xml.onreadystatechange = function (status) {
  // 数据接收成功
  console.log("xml.readyState: ", xml.readyState);
  if (xml.readyState == 4) {
    console.log("xml.status: ", xml.status);
    if (xml.status >= 200 && xml.status <= 300) {
      console.log("xml.readyState: ", xml.readyState);
      console.log("xml.response: ", xml.response);
    }
  }
};

xml.send();
