// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

//创建一个Loa对象，表示web app本身
const app = new Koa();

//映射root路径
app.use(async(ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = 'index page';
    } else {
        await next();
    }
});
//映射/test
app.use(async(ctx, next) => {
    if (ctx.request.path === '/test') {
        ctx.response.body = 'TEST page';
    } else {
        await next();
    }
});
//映射/error
app.use(async(ctx, next) => {
    if (ctx.request.path === '/error') {
        ctx.response.body = 'ERROR page';
    } else {
        await next();
    }
});

//设置监听
app.listen(3000);
console.log("the web app is listen at port 3000, open http://localhost:30000 in browser....");