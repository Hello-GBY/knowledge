var http = require('http');
var server = http.createServer();
var qs = require('querystring');

server.on('request', function(req, res) {
    var params = qs.parse(req.url.split('?')[1]);
    console.log('params: ', params);
    var fn = params.callback;
    var mockData = {
        value: 123,
        data: []
    }
    // jsonp返回设置
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(fn + '(' + JSON.stringify(mockData) + ')');

    res.end();
});
server.listen('9009');
console.log('Server is running at port 9009...');   