'use strict';

var koa = require('koa');

var app = koa();

var fs = require('fs');


app.use('/test', function*() {
    yield

    function doReadFile1() {
        fs.readFile('file1.txt', function(err, data) {
            if (err) {
                return 'read file1 error';
            }
        });
    }
    var data = yield
    function doReadFile2() {
        fs.readFile('file2.txt', function(err, data) {
            if (err) {
                res.status(500).send('read file2 error');
            }
            return data;
        });
    }
    this.body = data;
});

//启动端口监听
app.listen(3000);