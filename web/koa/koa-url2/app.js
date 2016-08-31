// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

//创建一个Loa对象，表示web app本身
const app = new Koa();

//导入koa-bodyparser
const bodyparser = require('koa-bodyparser');

//导入koa-router
const router = require('koa-router')();

//导入fs模块
const fs = require('fs');

//记录请求的url
app.use(async(ctx, next) => {
    console.log("Say: Receieve request at url:" + ctx.request.url)
    await next();
});

//注册bosyparser
app.use(bodyparser());

//将controller中的url路由映射添加到router中

function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL:${url}`);
        }
    }
}

//扫描controllers文件夹下面的js文件，并注册在router中
function addControllers(router) {
    var files = fs.readdirSync(__dirname + '/controllers');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    }, files)

    for (var jf of js_files) {
        console.log(`process controllers: ${jf}`);
        let mapping = require(__dirname + "/controllers/" + jf);
        addMapping(router, mapping);
    }
}

//调用controllers文件夹下面的js文件的扫描函数
addControllers(router);


//注册router中的路由信息
app.use(router.routes());

//设置监听
app.listen(3000);
console.log("the web app is listen at port 3000, open http://localhost:30000 in browser....");