# crypto
`crypto`模块的目的是为了提供通用的加密和哈希算法。用纯`JavaScript`代码实现这些功能不是不可能，但速度会非常慢。`Nodejs`用`C/C++`实现这些算法后，通过`cypto`这个模块暴露为`JavaScript`接口，这样用起来方便，运行速度也快。

## MD5和SHA1

`MD5`是一种常用的哈希算法，用于给任意数据一个`签名`。这个签名通常用一个`十六进制`的字符串表示：
```JavaScript
//对应的代码文件：firstShot.js
const crypto = require('crypto');

const hash = crypto.createHash('md5');

// 可任意多次调用update():
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex')); // 7e1977739c748beac0c0fd14fd26a544
update()方法默认字符串编码为UTF-8，也可以传入Buffer。
```
如果要计算`SHA1`，只需要把`'md5'`改成`'sha1'`，就可以得到`SHA1`的结果`1f32b9c9932c02227819a4151feed43e131aca40`。

还可以使用更安全的`sha256`和`sha512`。

## Hmac

`Hmac`算法也是一种哈希算法，它可以利用`MD`5或`SHA1`等哈希算法。不同的是，`Hmac`还需要一个密钥：
```JavaScript
//实际对应的代码文件：Hmac.js
const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex')); // 80f7e22570...
```
只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，因此，可以把`Hmac`理解为用随机数`增强`的哈希算法。

## AES

`AES`是一种常用的对称加密算法，加解密都用同一个密钥。`crypto`模块提供了`AES`支持，但是需要自己封装好函数，便于使用：
```JavaScript
//对应的代码文件：AES.js


const crypto = require('crypto');

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(data, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

var data = 'Hello, this is a secret message!';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);
```
运行结果如下：
```JavaScript
Administrator@XB-201606171743 MINGW64 /d/nodejs/nodejs-learning/加密 (master)
$ ls
AES.js  firstShot.js  Hmac.js  README.md

Administrator@XB-201606171743 MINGW64 /d/nodejs/nodejs-learning/加密 (master)
$ node AES.js
Plain text: Hello, this is a secret message!
Encrypted text: 8a944d97bdabc157a5b7a40cb180e713f901d2eb454220d6aaa1984831e17231
f87799ef334e3825123658c80e0e5d0c
Decrypted text: Hello, this is a secret message!

```
可以看出，加密后的字符串通过解密又得到了原始内容。

注意到`AES`有很多不同的算法，如`aes192`，`aes-128-ecb`，`aes-256-cbc`等，`AES`除了密钥外还可以指定`IV（Initial Vector）`，不同的系统只要`IV`不同，用相同的密钥加密相同的数据得到的加密结果也是不同的。加密结果通常有两种表示方法：`hex`和`base64`，这些功能`Nodejs`全部都支持，但是在应用中要注意，如果加解密双方一方用`Nodejs`，另一方用`Java`、`PHP`等其它语言，需要仔细测试。如果无法正确解密，要确认双方是否遵循同样的`AES算法`，`字符串密钥`和`IV`是否相同，加密后的数据是否统一为`hex`或`base64`格式。

## Diffie-Hellman

`DH`算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。`DH`算法基于数学原理，比如小明和小红想要协商一个密钥，可以这么做：

小明先选一个素数和一个底数，例如，素数`p=23`，底数`g=5`（底数可以任选），再选择一个秘密整数`a=6`，计算`A=g^a mod p=8`，然后大声告诉小红：`p=23`，`g=5`，`A=8`；

小红收到小明发来的`p，g，A`后，也选一个秘密整数`b=15`，然后计算`B=g^b mod p=19`，并大声告诉小明：`B=19`；

小明自己计算出`s=B^a mod p=2`，小红也自己计算出`s=A^b mod p=2`，因此，最终协商的密钥`s`为`2`。

在这个过程中，密钥2并不是小明告诉小红的，也不是小红告诉小明的，而是双方协商计算出来的。第三方只能知道`p=23`，`g=5`，`A=8`，`B=19`，由于不知道双方选的秘密整数`a=6`和`b=15`，因此无法计算出密钥`2`。

用crypto模块实现DH算法如下：
```JavaScript
//对应的代码文件：DH.js


const crypto = require('crypto');

// xiaoming's keys:
var ming = crypto.createDiffieHellman(512);
var ming_keys = ming.generateKeys();

var prime = ming.getPrime();
var generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
var hong = crypto.createDiffieHellman(prime, generator);
var hong_keys = hong.generateKeys();

// exchange and generate secret:
var ming_secret = ming.computeSecret(hong_keys);
var hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));
```
运行后，可以得到如下输出：
```JavaScript
$ node DH.js
Prime: a55ef65d8f3f0dcdc37b858e6db115376d849918f8ee0ce93502d8f7c100c70e854e986e4
f0e4b48294d68b24665f4e66e64e1c238515ee88b2d8f5070b4531b
Generator: 02
Secret of Xiao Ming: 2aa6ce2944fbb4e7eb921795d3304e4523cce1628b95da1f87d7cf038a5
d698808d900f47bcae8e2307f7ad9803d63ea104cd7bd7d137fcbe8d76d0d55e4d7fa
Secret of Xiao Hong: 2aa6ce2944fbb4e7eb921795d3304e4523cce1628b95da1f87d7cf038a5
d698808d900f47bcae8e2307f7ad9803d63ea104cd7bd7d137fcbe8d76d0d55e4d7fa
```
注意每次输出都不一样，因为素数的选择是随机的。


## 证书
`crypto`模块也可以处理数字证书。数字证书通常用在`SSL连接`，也就是`Web`的`https`连接。一般情况下，`https`连接只需要处理服务器端的单向认证，如无特殊需求（例如自己作为`Root`给客户发认证证书），建议用反向代理服务器如`Nginx`等`Web`服务器去处理证书。