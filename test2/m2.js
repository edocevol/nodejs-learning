//本模块直接使用exports将函数暴露出来
function hello() {
    console.log("hello, world");
}

function greet(name) {
    console.log("你好, " + name);
}
//直接使用exports将hello和greet函数暴露出来
exports.hello = hello;
exports.greet = greet;