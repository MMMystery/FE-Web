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

键头函数的this指向和普通函数的区别？
箭头函数特点，除了this

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

- 用promise 实现genetator

- promise中第二个参数的reject中执行的方法和promise.catch()都是失败执行的，分别这么写有什么区别，什么情况下会两个都同时用到？

``` 
reject 是用来抛出异常的，catch 才是用来处理异常的

```

- 模块化Commonjs,AMD,CMD规范的了解，以及ES6的模块化跟其他几种的区别，以及出现的意义

``` 
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
- promise相关。resolve，reject，then，all，race了解过吗？
- 现在有100个请求，怎么实现 Promise 串行化 。就是形如 [fn1, fn2, fn3] 这样， 然后 fn1 返回的是一个 promise ，resolve 之后再去执行 fn2
- 一个promise有多个then，如果第一个then出错，后面的还会执行吗，如何捕获异常。 如果第一个then出错了，我还想要后面的继续执行，应该怎么做。
- Promise和Async处理失败的时候有什么区别
- Async/await promise 和 generator区别。
``` 
Async/await是一个语法糖，内部实现还是generator + yield
async function 代替了 function*，await 代替了 yield


```
-写一个封装函数控制1000s访问一次，然后最多5次，直至拿到结果。
- 写一个函数，每个promise依赖于上一个promise返回的结果去请求，直到某个失败为止。
- 三个异步函数怎么知道彼此已经结束。不用promise.all
- Promise.then里抛出的错误能否被try...catch捕获，为什么。




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
- Decorator(装饰器)
``` 
装饰器——Decorator函数，当初刚开始学习ES6的时候其实并没有怎么关注它，但是随着很多的框架开始使用它，并且开始流行用它去写高阶函数

装饰器有哪些属性
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

- new Promise(() => {throw new Error()})能否抛出异常？  
- 如何捕获new Promise((reject) => {reject()})的异常呢？除了catch和try，catch
