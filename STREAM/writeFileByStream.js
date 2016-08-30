'use strict';

//1. 加载fs模块
var fs = require('fs');

//2. 指定stream的路径
var streamPath = "sampleOutput.txt";

//3. 创建输入流
var ws = fs.createWriteStream(streamPath, 'utf-8');

//4. 利用write()函数写入数据
ws.write("hello,it is me");
ws.write("你好，是我，我是xxx");

//5. 利用end()函数关闭输入流
ws.end();