function hello() {
    console.log("hello,world");
}

function greet(name) {
    console.log("hello, " + name);
}

//使用module.exports将hello和greet函数暴露出来
module.exports = {
    hello: hello,
    greet: greet
}