//这段示例代码测试的是检查当前的js程序的运行环境是浏览器还是node环境
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}