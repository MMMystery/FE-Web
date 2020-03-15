 - ES6更新的内容主要分为以下几点
```
表达式：声明、解构赋值
内置对象：字符串扩展、数值扩展、对象扩展、数组扩展、函数扩展、正则扩展、Symbol、Set、Map、Proxy、Reflect
语句与运算：Class、Module、Iterator
异步编程：Promise、Generator、Async
```



1. let/const
```    

var存在变量提升 
const定义常量，数组元素可以push添加，对象里的属性也可以修改（因为对象是引用类型的，P中保存的仅是对象的指针，这就意味着，const仅保证指针不发生改变，修改对象的属性不会改变对象的指针，所以是被允许的。）。
let块级作用域，let 有暂时死区，不会被提升

const arr = []
arr.push(1)
arr.push("2")


ES6规定，var 命令和 function 命令声明的全局变量，依旧是顶层对象的属性，但 let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。
let aa = 1;
const bb = 2;

console.log(window.aa); // undefined
console.log(window.bb); // undefined

只是一个块级作用域（Script）中，应该直接
console.log(aa); // 1
console.log(bb); // 2
```

2.模板字符串
``` 
console.log(`string${a+b}`)
```

3.箭头函数

``` 
简化代码，改变this指向

var team = {
    members: ["bingo", "alex"],
    teamName: "ES6",
    teamSummary: function() {
        let self = this;
        console.log(this) // 这里的this指向team对象
        return this.members.map(function (e) {
            console.log(this) // 这里的this指向window
            return `${e}隶属于${self.teamName}小组`;
        })
    }
    // 或者使用bind绑定的方式
}
console.log(team.teamSummary())


const team = {
    members: ["bingo", "alex"],
    teamName: "ES6",
    teamSummary: function() {
        return this.members.map(e => `${e}隶属于${this.teamName}小组`);
    }
}
console.log(team.teamSummary())


键头函数的this指向和普通函数的区别？箭头函数有作用域吗？可以new吗？可以放argument吗？

箭头函数没有自己的this，箭头函数中的this是在定义函数的时候绑定，它会捕获其所在的上下文的this作为自己的this，而不像普通函数那样是在执行函数的时候绑定。

1、函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

2、无 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

3、不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

4、不可以使用 new 命令，因为：

没有自己的 this，无法调用 call，apply。
没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的 prototype 赋值给新的对象的 __proto__

5、call和apply方法只有参数，没有作用域


```
4.增强对象字面量

``` 
this.setState{
   name,   //以前name: name
}
```

5.函数参数默认值
``` 
function info(name="yang", age){
console.log(name)
}
```
6.展开运算符

``` 
let colors1 = ["red", "orange"];
let colors2 = ["blue", "white", "green"];

let totalColors = ["black", ...colors1, ...colors2];
console.log(totalColors);  // ["black", "red", "orange", "blue", "white", "green"]


展开运算符和Rest运算符有什么区别？
```

7.解构

``` 
const names = ["Bingo", "Iris", "Alex"];

const [name1, name2, name3] = names;
console.log(name1, name2, name3);  // Bingo Iris Alex

// 返回数组个数(这个特殊)
const { length } = names;
console.log(length);  // 3

// 结合展开运算符
const [name, ...rest] = names;
console.log(name);  // Bingo
console.log(rest);  // ["Iris", "Alex"]
```


- 对象新增的方法
``` 
Object.is()
Object.assign()
Object.getOwnPropertyDescriptors() 
__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf() 
Object.keys()，Object.values()，Object.entries()

```

- promise（promise A+规范）

``` 
Promise 的三种状态：

pending：等待任务完成；
resolved（或fulfilled）：任务完成并且没有任何问题；
rejected：任务完成，但是出现问题。

Promise的静态方法：

Promise.resolve 返回一个fulfilled状态的promise对象
Promise.reject 返回一个rejected状态的promise对象
Promise.all 接收一个promise对象数组为参数，只有全部为resolve才会调用 通常会用来处理 多个并行异步操作
Promise.race 接收一个promise对象数组为参数，只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。
```
- promise原理
- Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
```   
promise构造函数是同步执行的，then方法是异步执行的

```

- 用promise 实现genetator

- promise中第二个参数的reject中执行的方法和promise.catch()都是失败执行的，分别这么写有什么区别，什么情况下会两个都同时用到？

``` 
reject 是用来抛出异常的，catch 才是用来处理异常的

```

- 模块化Commonjs,AMD,CMD规范的了解，以及ES6的模块化跟其他几种的区别，以及出现的意义

``` 
https://www.processon.com/view/link/5c8409bbe4b02b2ce492286a#map

IIFE： 使用自执行函数来编写模块化，特点：在一个单独的函数作用域中执行代码，避免变量冲突。

(function(){
  return {
	data:[]
  }
})()
AMD： 使用requireJS 来编写模块化，特点：依赖必须提前声明好。

define('./index.js',function(code){
	// code 就是index.js 返回的内容
})
CMD： 使用seaJS 来编写模块化，特点：支持动态引入依赖文件。

define(function(require, exports, module) {  
  var indexCode = require('./index.js');
});

CommonJS： nodejs 中自带的模块化。

var fs = require('fs');

ES Modules： ES6 引入的模块化，支持import 来引入另一个 js 。

import a from 'a';


Commonjs

暴露模块：module.exports = value或exports.xxx = value；

引入模块：require(xxx), 如果是第三方模块，xxx 为模块名；如果是自定义模块，xxx 为模块文件路径

AMD--非同步加载模块

// 定义没有依赖的模块
define(function(){
   return 模块
})
 
// 定义有依赖的模块
define(['module1', 'module2'], function(m1, m2){
   return 模块
})
 
//引入使用模块：
 
require(['module1', 'module2'], function(m1, m2){
   使用 m1/m2
})

CMD--专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。整合了 CommonJS 和 AMD 规范的特点
/ 定义没有依赖的模块
define(function(require, exports, module){
  exports.xxx = value
  module.exports = value
})
 
 
// 定义有依赖的模块
define(function(require, exports, module){
  // 引入依赖模块 (同步)
  var module2 = require('./module2')
  // 引入依赖模块 (异步)
    require.async('./module3', function (m3) {
    })
  // 暴露模块
  exports.xxx = value
})
 
 
//引入模块	
define(function (require) {
  var m1 = require('./module1')
  var m4 = require('./module4')
  m1.show()
  m4.show()
})


ES6 模块化
1，设计思想：静态化
2，在编译时就能确定模块的依赖关系，以及输入和输出的变量
```
- promise是怎么实现的原理
- Promise.then里抛出的错误能否被try...catch捕获，为什么
- Proxy对象能拦截什么
``` 


```
- promise相关。resolve，reject，then，all，race了解过吗？
- 现在有100个请求，怎么实现 Promise 串行化 。就是形如 [fn1, fn2, fn3] 这样， 然后 fn1 返回的是一个 promise ，resolve 之后再去执行 fn2
- 一个promise有多个then，如果第一个then出错，后面的还会执行吗，如何捕获异常。 如果第一个then出错了，我还想要后面的继续执行，应该怎么做。
- Promise和Async处理失败的时候有什么区别
- Async/await promise 和 generator区别。
``` 
Async/await是一个语法糖，内部实现还是generator + yield
async function 代替了 function*，await 代替了 yield

```
- 写一个封装函数控制1000s访问一次，然后最多5次，直至拿到结果。
- 写一个函数，每个promise依赖于上一个promise返回的结果去请求，直到某个失败为止。
- 三个异步函数怎么知道彼此已经结束。不用promise.all





- Symbol
``` 
创建symbol类型数据
let s1 = Symbol()
let s2 = Symbol('another symbol')

每个Symbol实例都是唯一的。因此，当你比较两个Symbol实例的时候，将总会返回false

1.利用Symbol来实现属性的私有化：
let obj = {
   [Symbol('name')]: '一斤代码',
   age: 18,
   title: 'Engineer'
}
Symbol类型的key是不能通过Object.keys()或者for...in来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用Symbol来定义。

2. 使用Symbol来替代常量
const TYPE_AUDIO = Symbol()
const TYPE_VIDEO = Symbol()
const TYPE_IMAGE = Symbol()

3.使用Symbol定义类的私有属性/方法
const PASSWORD = Symbol()

class Login {
  constructor(username, password) {
    this.username = username
    this[PASSWORD] = password
  }

  checkPassword(pwd) {
      return this[PASSWORD] === pwd
  }
}

export default Login
只能在这个a.js里使用，外面是调用不到PASSWORD的


4.定义多个window窗口共用的全局Symbol
let gs1 = Symbol.for('global_symbol_1')  //注册一个全局Symbol
let gs2 = Symbol.for('global_symbol_1')  //获取全局Symbol

gs1 === gs2  // true

```
- Iterator（迭代器，遍历器）、Generator（生成器）的用法？
``` 
一、Iterator（迭代器），yield表达式在generator中是作为一个暂停标志，当碰到yield时，函数暂停执行，等到下一次next()执行时
let obj = {
    name:'zhangsan',
    age:18,
    sex:'man'
}
obj[Symbol.iterator]=function* (){
    for(var key in obj){
        yield obj[key];
    }
}
for(let value of obj){
    console.log(value);//zhangsan 18 man
}
console.log([...obj]);//["zhangsan", 18, "man"]


二、Generator（生成器）
使用function关键字后加*的方式声明一个函数，该函数即为Generator函数
let tell = function* (){
    yield 1;
    yield 2;
    yield 3;
}
let k = tell();
console.log(k.next());//{value: 1, done: false}
console.log(k.next());//{value: 2, done: false}
console.log(k.next());//{value: 3, done: false}
console.log(k.next());//{value: undefined, done: true}

```

- Set 和 Map 数据结构
- Proxy
- Reflect
``` 
Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。
与大多数全局对象不同，Reflect不是一个构造函数。你不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用。Reflect的所有属性和方法都是静态的（就像Math对象）。
```
- Iterator 和 for...of 循环

- ArrayBuffer
```
ArrayBuffer是一(大)块内存，但不能直接访问ArrayBuffer里面的字节。要访问ArrayBuffer，需要用到 Typed Array。

（1）ArrayBuffer对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。

（2）TypedArray视图：共包括9种类型的视图，比如Uint8Array（无符号8位整数）数组视图, Int16Array（16位整数）数组视图, Float32Array（32位浮点数）数组视图等等。

（3）DataView视图：可以自定义复合格式的视图，比如第一个字节是Uint8（无符号8位整数）、第二、三个字节是Int16（16位整数）、第四个字节开始是Float32（32位浮点数）等等，此外还可以自定义字节序。

简单说，ArrayBuffer对象代表原始的二进制数据，TypedArray视图用来读写简单类型的二进制数据，DataView视图用来读写复杂类型的二进制数据。

```
- Decorator(装饰器), 实现原理
``` 
装饰器——Decorator函数，当初刚开始学习ES6的时候其实并没有怎么关注它，但是随着很多的框架开始使用它，并且开始流行用它去写高阶函数
就是简单的将一个函数包装成另一个函数

如何使用JavaScript装饰器
JavaScript中装饰器使用特殊的语法，使用@作为标识符，且放置在被装饰代码之前。
@log()
@immutable()
class Example {
  @time('demo')
  doSomething() {

  }
}
通常，是这么使用的：

class MyReactComponent extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);
然而，可以使用装饰器代替：

@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}



Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

Object.defineProperty(obj, prop, descriptor)
obj：要在其上定义属性的对象。
prop：要定义或修改的属性的名称。
descriptor：将被定义或修改的属性描述符。

装饰器有哪些属性

configurable
当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。

enumerable
enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。

当且仅当该属性的 enumerable 为 true 时，该属性才能够出现在对象的枚举属性中。默认为 false。
数据描述符同时具有以下可选键值：

value
该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。

writable
当且仅当该属性的 writable 为 true 时，value 才能被赋值运算符改变。默认为 false。

存取描述符同时具有以下可选键值：

get
一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。该方法返回值被用作属性值。默认为 undefined。

set
一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。默认为 undefined。

如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常

执行顺序？
```



- ES6的generator函数来进行异步的调用，手写
``` 
yield怎么控制顺序

```
- 问我那个场景要用generator，而不适合用async，不断提示我，我还是没有答出来，他说是数据交换

- 用es5写promise
- Promise 中抛出异常能否被 catch 捕获？
```  
let promise = new Promise((resolve, reject) => {
  throw new Error()
  reject()
})
promise.catch(err => {
  console.log(err)
})

```


- CommonJS和ES Module的区别

- Promise.resolve(1)返回是一个什么
- Promise.any()
- Promise.reject()
- Promise.allSettled()
- 模拟实现一个 Promise.finally
```  
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

```
- 设计并实现 Promise.race()
```  
Promise._race = promises => new Promise((resolve, reject) => {
	promises.forEach(promise => {
		promise.then(resolve, reject)
	})
})
```

- new Promise(() => {throw new Error()})能否抛出异常？  
- 如何捕获new Promise((reject) => {reject()})的异常呢？除了catch和try，catch
