//使用fs模块的readFileSync函数来同步读取文件
'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt', 'utf-8');

console.log(`文件内容 :${data}`);