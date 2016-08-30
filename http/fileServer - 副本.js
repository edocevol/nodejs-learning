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
        } else if (!err && stats.isDirectory()) {
            //处理directory
            var filepath2 = path.join(root, "index.html");
            console.log(filepath2);
            fs.stat(filepath2, function(err2, stats2) {
                if (err2 || !stats.isFile()) {
                    //如果文件index.html不存在,继续检查default.html
                    var filepath3 = path.join(root, "default.html");
                    fs.stat(filepath3, function(err3, stats3) {
                        if (err3 || !stats3.isFile()) {
                            //如果default.html也没找到
                            console.log('404 ' + request.url);
                            response.writeHead(404);
                            response.end('404 Not Found');
                        } else {
                            console.log('200 ' + request.url);
                            response.writeHead(200);
                            console.log(filepath3);
                            fs.createReadStream(filepath3).pipe(response);
                        }
                    });
                } else {
                    console.log('200 ' + request.url);
                    response.writeHead(200);
                    fs.createReadStream(filepath2).pipe(response);
                }
            });
        } else {
            //处理err
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');