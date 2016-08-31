// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

//创建一个Loa对象，表示web app本身
const app = new Koa();

//引入BodyParser
const bodyParser = require('koa-bodyparser');

//引入koa-router函数
const router = require('koa-router')();

//在引入注册route之前先注册bodyParser
app.use(bodyParser());

//注册一个登录
router.get('/login', async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
    <p>name:<input name="username" value="frank"></p>
    <p>pass:<input name="pass" type="password" ></p>
    <p><input type="submit" value="登录"></p>
    <form>`;
});

//映射一个登录验证
router.post('/signin', async(ctx, next) => {
    //注册中间件koa-bodyparser之后，直接使用ctx.request.body.paramName获取即可
    var
        name = ctx.request.body.username || '',
        password = ctx.request.body.pass || '';
    console.log(`sign in with name:${name},password:${password}`);
    if (name === 'frank' && password === 'sa123') {
        ctx.response.body = `<h1>Welcome,${name}..........</h1>`;
    } else {
        ctx.response.body = `<h1>Sorry, login failed
                <p><a href="/login">Please tyr again</a></p>`;
    }
});


app.use(router.routes());
//设置监听
app.listen(3000);
console.log("the web app is listen at port 3000, open http://localhost:30000 in browser....");