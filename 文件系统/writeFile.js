//使用fs模块的writeFile写文件
'use strict';

//1. 加载fs模块
var fs = require('fs');

//2. 准备要写入文件的数据
var str = "hello, it is me, there is long time we never see each..";

//3. 调用writeFile函数
fs.writeFile('sampleOutput.txt', str, function(err) {
    if (err) {
        console.log("写入文件时遇到问题: " + err);
    } else {
        console.log("写入成功");
    }
});