'use strict';

//1. 加载fs模块
var fs = require('fs');

//2. 指定文件路径
var streamPath = "sample.txt";

//3. 调用createReadStream函数，创建流
var stream = fs.createReadStream(streamPath, 'utf-8'); //指定以utf-8编码打开流

//4. 注册流的读取处理函数
stream.on('data', function(chunk) {
    console.log("DATA:");
    console.log(chunk);
});

//5. 注册流的结束处理函数
stream.on('end', function() {
    console.log("文件读取完毕，准备关闭stream...");
});

//6. 注册流的错误处理函数
stream.on('error', function(err) {
    console.log('流读取发生错误：');
    console.log(err);
})