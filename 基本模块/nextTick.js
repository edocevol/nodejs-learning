//如果我们想要在下一次事件响应中执行代码，可以调用process.nextTick()：
process.nextTick(
    function() {
        console.log("nextTick callback");
    }
);
console.log("nextTick was set");