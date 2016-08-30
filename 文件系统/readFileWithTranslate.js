'use strict';

var fs = require('fs');

fs.readFile('sample.txt', function(err, data) {
    if (err) {
        console.log("文件读取失败，失败原因：" + err);
    } else {
        console.log(data.toString('utf-8'));
    }
});