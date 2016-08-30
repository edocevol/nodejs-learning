'use strict';
//1. 加载fs模块
var fs = require('fs');

//2.指定读路径
var readPath = "pipeRead.txt";

//3. 指定写路径
var writePath = "pipeWrite.txt";

//4. 创建pipe读对象
var pr = fs.createReadStream(readPath);

//5.创建pipe写对象
var pw = fs.createWriteStream(writePath);

//6. 合并流
pr.pipe(pw);