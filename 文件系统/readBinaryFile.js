//此示例为node读取二进制文件的示例，本示例读取的文件是一个gif图片
'use strict';

//1. 加载fs模块
var fs = require('fs'); //注意：括号里面的引号
fs.readFile('sample.gif', function(err, data) {
    //注意：这里的readFile的参数:文件路径和处理函数
    if (err != null) {
        console.log("文件读取失败，原因： " + err);
    } else {
        console.log("文件内容：" + data);
        console.log("文件长度：" + data.length + "bytes");
    }
})