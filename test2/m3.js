//也就是说，默认情况下，Node准备的exports变量和module.exports变量实际上是同一个变量，
//并且初始化为空对象{}，于是，我们可以写：
exports.foo = function() {
    return 'foo';
};
exports.bar = function() {
    return 'bar';
};
//也可以使用module.exports来直接返回
module.exports.name = function() {
    return "node";
}
module.exports.ext = function() {
    return ".js"
}