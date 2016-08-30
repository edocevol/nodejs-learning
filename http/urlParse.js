'use strict';

//1. 加载url模块
var url = require('url');

//2. 构造一个待解析的url地址
var uri = "http://localhost.com:8082/path/to/file?query=string#hash";

//3. 解析
var data = url.parse(uri);
console.log(data);

//4. 运行:node urlParse.js