'use strict';

//导入url模块
var url = require('url');

//解析url
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

//解析相对路径
console.log(url.parse("/static/js/jquery.js?name=Hello%20World"));

//构造一个url
console.log(
    url.format({
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/static/js',
        query: {
            name: 'Nodejs',
            version: 'v 1.0'
        }
    })
);