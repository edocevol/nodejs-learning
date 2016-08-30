//main.js将调用hello.js里面暴露出来的greet方法
'use strict';
// 不要忘了写相对目录!
var greet = require("./hello"); //引入hello模块用Node提供的require函数
var s = 'Frank'
greet(s);

//测试m1.js
console.log("正在使用m1模块");
var m1 = require("./m1.js");
m1.hello();
m1.greet("frank");

//测试m2.js
console.log("正在测试m2模块");
var m2 = require("./m2.js");
m2.greet("牛中超");
m2.hello();

//测试m3.js
console.log("正在测试m3模块");
var m3 = require("./m3.js");
console.log(m3.bar());
console.log(m3.foo());
console.log(m3.name());
console.log(m3.ext());

//获取暴露出来的key->value键值对
var m4 = require("./keyvalue.js");
console.log("姓名:" + m4.name + ", 性别：" + m4.sex);

//获取暴露出来的数组
var arr = require("./array.js");
console.log(arr.arr.toString());

//综上，我们在程序中最好全部都是用module.exports来暴露函数和数组