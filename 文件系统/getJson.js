//这里暂时不能执行
jQuery.getJSON('http://example.com/ajax', function(data) {
    console.log('IO结果返回后执行...');
});
console.log('不等待IO结果直接执行后续代码...');