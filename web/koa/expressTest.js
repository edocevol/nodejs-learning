'use strict';

//加载express模块
var express = require('express');

var app = express();

//映射路径
app.get('/', function(req, res) {
    res.send("Hello, world");
});

//监听端口
app.listen(3000, function() {
    console.log("the server is listening at port 3000....");
});