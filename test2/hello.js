// 将hello.js改成一个模块，可以让其他模块可以调用
var s = 'hello';

function greet(name) {
    console.log(s + "," + name + "!");
}
//将本模块暴露出去，这样的话，其他地方可以调用
module.exports = greet;
//这里可以导出多个变量呢