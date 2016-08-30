'use strict';

const crypto = require('crypto');

var scret_key = 'tianwanggaidihu';
const hmac = crypto.createHmac('sha256', scret_key);
//可以调用多次
hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

//将会输出：220d46ce7101be5a9d5814fc64a5a445dfcafcb362027ac39476b850c5d06fc7
console.log(hmac.digest('hex'));