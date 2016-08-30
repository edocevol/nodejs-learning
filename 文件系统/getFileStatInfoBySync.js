'use strict';

//1. 加载fs模块
var fs = require('fs');

//2. 指定要访问的文件路径
var filePath = "sample.txt";
var dicPath = "testDir";

var fileInfo;

fileInfo = fs.statSync(filePath);
if (fileInfo.isFile()) {
    console.log(fileInfo.isFile() + "是一个文件路径");
    console.log("文件大小：" + fileInfo.size);
    console.log("文件创建时间：" + fileInfo.birthtime);
    console.log("文件最后修改时间: " + fileInfo.mtime);
} else if (fileInfo.isDirectory()) {
    // 是否是目录:
    console.log(fileInfo.isFile() + "是一个文件夹路径");
    console.log("文件夹大小：" + fileInfo.size);
    console.log("文件夹创建时间：" + fileInfo.birthtime);
    console.log("文件夹最后修改时间: " + fileInfo.mtime);
} else {
    console.log("输入的路径不是文件也不是文件夹");
}

fileInfo = fs.statSync(dicPath);
if (fileInfo.isFile()) {
    console.log(fileInfo.isFile() + "是一个文件路径");
    console.log("文件大小：" + fileInfo.size);
    console.log("文件创建时间：" + fileInfo.birthtime);
    console.log("文件最后修改时间: " + fileInfo.mtime);
} else if (fileInfo.isDirectory()) {
    // 是否是目录:
    console.log(fileInfo.isFile() + "是一个文件夹路径");
    console.log("文件夹大小：" + fileInfo.size);
    console.log("文件夹创建时间：" + fileInfo.birthtime);
    console.log("文件夹最后修改时间: " + fileInfo.mtime);
} else {
    console.log("输入的路径不是文件也不是文件夹");
}