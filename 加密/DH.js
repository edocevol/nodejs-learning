'use strict';

const crypto = require('crypto');

//小明的key
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime(); //获取一个素数 
var generator = ming.getGenerator(); //获取一个底数

//打印小明的素数和底数
console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

//小红的key：利用小明的素数和底数
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

//交换秘钥
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

//打印
// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));