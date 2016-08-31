var fn_index = async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
    <p>name:<input name="username" value="frank"></p>
    <p>pass:<input name="pass" type="password" ></p>
    <p><input type="submit" value="登录"></p>
    <form>`;
};

var fn_signin = async(ctx, next) => {
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
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};