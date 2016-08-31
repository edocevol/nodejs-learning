'use strict';

//加载express模块
var express = require('express');

var app = express();

var fs = require('fs');


//映射路径
app.get('/test', function(req, res) {
    fs.readFile('file1.txt', function(err, data) {
        if (err) {
            res.status(500).send('read file1 error');
        }
        fs.readFile('file2.txt', function(err, data) {
            if (err) {
                res.status(500).send('read file2 error');
            }
            res.type('text/plain');
            res.send(data);
        });
    });
});

//监听端口
app.listen(3000, function() {
    console.log("the server is listening at port 3000....");
});