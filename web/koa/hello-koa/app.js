// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

//创建一个Loa对象，表示web app本身
const app = new Koa();

//对于任何请求，app将调用该异步函数处理请求
app.use(async(ctx, next) => {
    await next();
    //设置响应的Content-type
    ctx.type = "text/html";
    //设置响应的内容
    ctx.response.body = "<h1>Hello, this page showed by koa2...";
});

//设置监听
app.listen(3000);
console.log("the web app is listen at port 3000, open http://localhost:30000 in browser....");