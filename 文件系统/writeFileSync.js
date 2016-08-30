'use strict';

//1. 加载fs模块
var fs = require('fs');

//2. 准备要写入的数据
var str = "hello, 这是通过同步的方式写文件的";

//3. 调用同步的方法将str写入文件
try {
    var data = fs.writeFileSync('sampleOutputBySync.txt', str);
    console.log("文件写入成功");
} catch (err) {
    console.log("文件写入失败，失败原因：" + err);
}