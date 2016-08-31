//babel启动文件

var register = require('babel-core/register');
register({
    presets: ['stage-3']
});


//后面的require都会被babel的require替换
require('./appWithMiddleware.js');

//修改package.json中的start为start.js