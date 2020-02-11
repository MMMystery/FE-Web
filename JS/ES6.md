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
const定义常量，数组元素可以push添加
let有局部作用域

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

- promise

``` 
Promise 的三种状态：

pending：等待任务完成；
resolved：任务完成并且没有任何问题；
rejected：任务完成，但是出现问题。

```

- ES6的异步编程：promise generator async/await

``` 
generator的例子， 然后问我怎么用promise 实现

```

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

