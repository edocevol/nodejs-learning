//获取文件的信息
/**
 * 1. 是文件夹还是文件
 * 2. 如果是文件夹，则可以继续一下判断
 * 3. 判断文件的大小
 * 4. 判断文件的创建时间
 * 5. 判断文件的最后的修改时间
 */

'use strict';

//1. 加载fs模块
var fs = require('fs');

//2. 指定要访问的文件路径
var filePath = "sample.txt";
var dicPath = "testDir";

//创建检查函数
var check = function(file) {
    fs.stat(file, function(err, stat) {
        if (err) {
            console.log("程序运行出错，出错原因：" + err);
        } else {
            // 是否是文件:
            console.log('isDirectory: ' + stat.isDirectory());
            if (stat.isFile()) {
                console.log(stat.isFile() + "是一个文件路径");
                console.log("文件大小：" + stat.size);
                console.log("文件创建时间：" + stat.birthtime);
                console.log("文件最后修改时间: " + stat.mtime);
            } else if (stat.isDirectory()) {
                // 是否是目录:
                console.log(stat.isFile() + "是一个文件夹路径");
                console.log("文件夹大小：" + stat.size);
                console.log("文件夹创建时间：" + stat.birthtime);
                console.log("文件夹最后修改时间: " + stat.mtime);
            } else {
                console.log("输入的路径不是文件也不是文件夹");
            }
        }
    });
}
console.log("=================================");
check(filePath);
console.log("=================================");
console.log("=================================");
check(dicPath);