'use strict';

//1. 导入http模块
var http = require('http');

//2. 创建http server，并传入回调函数
var server = http.createServer(function(request, response) {
    //3. 回调函数接收request和response对象
    //4. 获得http请求的method和url
    console.log(request.method + '' + request.url);
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.end("<h1>Hello, it is me.</h1>");
});

//5. 监听端口
server.listen(8082);
console.log("server is running at http://127.0.0.1:8082");