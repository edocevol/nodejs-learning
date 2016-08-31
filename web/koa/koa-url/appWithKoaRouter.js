//加载Koa类
const Koa = require('koa');

//注意require('koa-router')返回的是函数()
const router = require('koa-router')();

//创建web app
const app = new Koa();

//记录请求的url

app.use(async(ctx, next) => {
    console.log("当前请求的url:" + ctx.url);
    await next();
});

//添加url路由
router.get('/hello/:name', async(ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello,${name}, I receieved your request.</h1>`;
});

router.get('/', async(ctx, next) => {
    ctx.response.body = "<h1>This page is my website's home page</h1>";
});

//添加koa-router至中间件链,注意是router.routes()
app.use(router.routes());
app.listen(3000);
console.log("the web app is listen at port 3000, open http://localhost:30000 in browser....");