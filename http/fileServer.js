'use strict';
//导入fs,url,path,http模块
var
    fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

//获取root路径
var root = path.resolve(process.argv[2] || '');

console.log('Static root dir: ' + root);

//创建server
var server = http.createServer(function(request, response) {
    //'static/bootstrap.css'
    var pathname = url.parse(request.url).pathname,
        //'/srv/www/static/bootstrap.css'
        filepath = path.join(root, pathname);
    fs.stat(filepath, function(err, stats) {
        if (!err && stats.isFile()) {
            console.log('200 ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');