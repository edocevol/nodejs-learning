'use strict'; //使用严格的js标准
var fs = require('fs'); //加载fs

//第一种路径方式:'./sample.txt'
fs.readFile('./sample.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log("文件读取失败");
    } else {
        console.log(data);
    }
});

//第一种路径方式:'sample.txt'
fs.readFile('sample.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log("文件读取失败");
    } else {
        console.log(data);
    }
});