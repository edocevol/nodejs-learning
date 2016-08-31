const Koa = require('koa');
const app = new Koa();

//打印url中间件
app.use(async(ctx, next) => {
    console.log("收到请求，请求的地址是: " + ctx.url);
    await next();
});

//记录处理时间
app.use(async(ctx, next) => {
    const startTime = new Date().getTime();
    await next();
    const endTime = new Date().getTime();
    console.log("总共花费时间: " + (endTime - startTime));
});

//业务逻辑处理
app.use(async(ctx, next) => {
    await next();
    ctx.response.type = "text/html";
    ctx.response.body = "<h2>Hello, it is showed by koa2 with middleware....</h2>";
});

//设置监听
app.listen(3000);
console.log("the web app is listen at port 3000, open http://localhost:30000 in browser....");