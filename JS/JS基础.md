- JavaScript有⼏种类型的值
``` 

栈：原始数据类型（ Undefined ， Null ， Boolean ， Number 、 String  ）
堆：引⽤数据类型（对象、数组和函数,Data,RegExp）
两种类型的区别是：存储位置不同

原始数据类型直接存储在栈( stack )中的简单数据段，占据空间⼩、⼤⼩固定，属于被频 繁使⽤数据，所以放⼊栈中存储；
引⽤数据类型存储在堆( heap )中的对象,占据空间⼤、⼤⼩不固定,如果存储在栈中，将会 影响程序运⾏的性能；引⽤数据类型在栈中存储了指针，该指针指向堆中该实体的起始地 址。当解释器寻找引⽤值时，会⾸先检索其 在栈中的地址，取得地址后从堆中获得实体

原始数据类型（是真正的复制一份出来）：
var a = 10;
var b = a;
b = 30;
console.log(a); // 10值
console.log(b); // 30值

引用数据类型（复制的只是引用地址，所以其中一个修改，相当于修改最终他们共同指向的对象）：
var obj1 = new Object();
var obj2 = obj1;
obj2.name = "小鹿";
console.log(obj1.name); // 小鹿


```
- 定义函数的方式
```
1.函数声明
function demo (){}
function (){} // 匿名函数

()=>{} // ES6

2.函数表达式

var demo = function(){}
let demo = ()=>{} // es6

3.构造函数
const demo = new Function("a", "b")


```

- js类型判断方式有哪些
``` 
1.typeof
2.instanceof
3.constructor
4.Object.prototype.toString.call()  （这种方式最精准）

```
- js的变量提升
```  
JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量(函数也是变量)，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。

例如：
console.log(a);
var a =1;

实际是：
var a;
console.log(a);
a =1;

js里的function也可看做变量，也存在变量提升情况，比如：
a();

var a = function(){
    console.log(1);
};

// TypeError: a is not a function

实际是：
var a;
a();
a = function(){
   console.log(1);
};


示例：
function hah(number){

        var a="show";

        alert(a);//show

        var a=4;

        alert(a);//4

        number--;

    }

 hah(1);
 
实际是：
function hah(number){

    var a;

    var a;

    a = "show";

    alert(a);//show

    a=4;

    alert(a);//4

    number--;

}

hah(1);

```
- js的赋值底层逻辑，js传值和传址的区别
``` 

传值：
var a = 5,b = a;  // 这里赋值基本数据类型（数字、字符串、布尔值）的值
b = 8;
alert( a);  // 5


传址：
var obj1 = {
      name: '张三',
      age: 18,
      sex: '男'
    }
    var obj2 = obj1; // 这里是赋值引用类型(对象、数组、函数)的值
 
    console.log('obj2：', obj2) // {name:张三，age:18,sex:男}
    obj2.age = 22
    console.log('obj2：', obj2) // {name:张三，age:22,sex:男}
    console.log('obj1：', obj1) // {name:张三，age:22,sex:男}

赋值是进行了传址操作，赋值的实际上是obj1的数据地址，所以当obj2数据修改的时候，是通过地址进行的修改，所以相同数据地址的obj1也发生了改变


重点：根据数据的操作方式不同，可以将数据分为两大类型：基础类型和引用类型

基础类型：number类型、boolean类型和string类型，其操作方式为传值

引用类型：array类型、object类型、function类型，其操作方式为传址

```
- console.log(typeof null, typeof [])等等类型判断

```  
基本类型有6种: number, string, null, undefined, bool, symbol
typeof可以返回7种: number, string, object, undefined, function, boolean, symbol
一些面试题：
typeof null => object, 
typeof undefined => undefined,
typeof NaN => number
NaN == undefined => false
NaN == NaN => false

symbol是什么
```

- js空值判断
``` 
判断undefined
if (typeof(exp) == undefined)

判断null
var exp = null; 
if (!exp && typeof(exp)!=”undefined” && exp!=0) 
{ 
alert(“is null”); 
}　

```
- 如何清除不使用的变量
``` 
布局变量再函数执行完后就销毁了。
全局变量，你可以设置为null，
对象属性的删除用delete obj.name;
```
- 全局的函数声明是否占内存
``` 
函数声明未被调用说明未被编译是不占内存的。
```

- js阻止冒泡事件
```  
ev.stopPropagation()

```
- js写一个事件委托
```  




```
- 手写一个基于hash路由函数

- 怎么判断 script 或 img 是否加载完成
``` 
$('img').onload事件
readystatechange事件，然后用document.readyState == “complete”
img的complete属性
```
- require 和 import 区别
``` 
import 是 ES6 的模块化语法，require() 在好几种模块规范中都有使用

–require是运行时调用，所以require理论上可以运用在代码的任何地方
–import是编译时调用，所以必须放在文件开头

–require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
–import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require
```



- $nextTrick原理   
- settimeout promise requestAnimationFrame 三个任务的时机 以及区别


- 如何在不使用`%`模运算符的情况下检查一个数字是否是偶数？

``` 
function isEven(num) {
  if (num & 1) {
    return false
  } else {
    return true
  }
}

```

- router分为hash和history，它们有什么区别？
- 多个子站点部署，如何同步cooike信息，如何优化性能？
- 什么是NaN？以及如何检查值是否为 NaN？
- 如何检查对象中是否存在某个属性

- call、apply、bind的区别
- call、apply、bind 实现

```  
call
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this
  let arg = [...arguments].slice(1)
  let result = context.fn(...arg)
  delete context.fn
  return result
} 


apply

// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}


bind

// 思路：类似call，但返回的是函数
Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this
  let arg = [...arguments].slice(1)
  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) {
      return new _this(...arg, ...arguments)
    } else {
      return _this.apply(context, arg.concat(...arguments))
    }
  }
}




```
- 说一下对bind，call，apply三个函数的认识，自己实现一下bind方法。

- 对象的几种创建方式
- instanceof 实现
```  
// 思路：右边变量的原型存在于左边变量的原型链上
function instanceOf(left, right) {
  let leftValue = left.__proto__
  let rightValue = right.prototype
  while (true) {
    if (leftValue === null) {
      return false
    }
    if (leftValue === rightValue) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}

```

- Object.create 的基本实现
``` 

// 思路：将传入的对象作为原型
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
```

- new 实现和new 的过程
``` 

function myNew (fun) {
  return function () {
    // 创建一个新对象且将其隐式原型指向构造函数原型
    let obj = {
      __proto__ : fun.prototype
    }
    // 执行构造函数
    fun.call(obj, ...arguments)
    // 返回该对象
    return obj
  }
}

function person(name, age) {
  this.name = name
  this.age = age
}
let obj = myNew(person)('chen', 18) // {name: "chen", age: 18}


```
- promise 实现

- 深拷贝和浅拷贝的实现方式分别有哪些？
```
浅拷贝：(1) Object.assign的方式 (2) 通过对象扩展运算符 (3) 通过数组的slice方法 (4) 通过数组的concat方法。

// 1. ...实现
let copy1 = {...{x:1}}

// 2. Object.assign实现

let copy2 = Object.assign({}, {x:1})




深拷贝：(1) 通过JSON.stringify来序列化对象 (2) 手动实现递归的方式。

// 1. JOSN.stringify()/JSON.parse()
let obj = {a: 1, b: {x: 3}}
JSON.parse(JSON.stringify(obj))

// 2. 递归拷贝
function deepClone(obj) {
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}


```


- 使用setTimeout模拟setInterval

``` 
// 可避免setInterval因执行时间导致的间隔执行时间不一致
setTimeout (function () {
  // do something
  setTimeout (arguments.callee, 500)
}, 500)


```
- 实现一个基本的Event Bus
- 手写一个JSONP的实现
- 实现一个双向数据绑定

```

let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')
// 数据劫持，这个是关键
Object.defineProperty(obj, 'text', {
  configurable: true,
  enumerable: true,
  get() {
    console.log('获取数据了')
  },
  set(newVal) {
    console.log('数据更新了')
    input.value = newVal
    span.innerHTML = newVal
  }
})
// 输入监听
input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})


```
- 实现一个简单路由

``` 
todo

```

- 手写AJAX
  
```
var xhr = new XMLHttpRequest()
// 初始化
xhr.open("GET","/api",false)

// 发送请求
xhr.send(data)

xhr.onreadystatechange = function(){
    //这里的函数异步执行，可参考之前JS基础中的异步模块
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            alert(xhr.responseText)
        }
    }
}

xhr.send(null)
```
- 实现拖拽

``` 
todo

```
- 手写一个防抖/节流函数

``` 
// 防抖函数 生存环境请用lodash.debounce， 防止连续频发操作，触发多次。只触发最后一次。
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 节流函数  间隔一段时间内触发一次。
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

```



- Array.isArray实现
- getOwnPropertyNames 实现
- 手写jsonp实现
``` 
function handleResponse(response){
    alert(“You’re at IP address ” + response.ip + ”, which is in ” + response.city + ”, ” + response.region_name);
}
var script = document.createElement(“script”);
script.src = “http://freegeoip.net/json/?callback=handleResponse”;
document.body.insertBefore(script, document.body.firstChild);


```
- js实现css的:hover效果

``` 
$("el").onmouseover = function() {
  //
}
$("el").onmouseout = function() {
  //
}

```
- 实现一个JSON.stringify
``` 
todo

```
- 实现一个JSON.parse
```  
var jsonStr = '{"name":"cxk", "age":25}';
var obj = eval("(" + json + ")");
```
- js实现继承的几种方式

``` 

连接：https://www.jianshu.com/p/9cfe30d1a967

```
- es5的继承 实现一下
- 实现extend函数
- class 实现继承
``` 
class Son entends Father {
  constructor(name){
    super(name);
    this.name = name;
  
  }
}
var s = new Son('son');
console.log(s.name); // son
console.log(s instanceof Father); // true
console.log(s instanceof Son); // true
```

- 实现一个JS函数柯里化


- async/await 实现
- async await原理
- reduce 实现


- 手写代码实现事件委托
``` 
 <ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
 </ul>

let ul = document.querySelector('#list');

ul.addEventListener('click', function(e){
    let target = e.target;

    while( target.tagName !== 'LI' ){
           if ( target.tagName === 'UL' ){
                target = null;
                break;
           }

           target = target.parentNode;
    }

    if ( target ){
        console.log('你点击了ui里的li')
    }
})

```

- 手写一个闭包
``` 
function fn1(){
 var count = 0;
 
 return (){
   return count++;
 }
}

var a = fn1();
a()  // 1
a()  // 2

```
- 说一下对闭包的理解，以及你在什么场景下会用到闭包？JS 没有闭包的话会怎么样？
``` 
匿名自执行函数的时候用到
闭包就是能够读取其他函数内部变量的函数
闭包是指有权访问另⼀个函数作⽤域中变量的函数，创建闭包的最常⻅的⽅式就是在⼀个
函数内创建另⼀个函数，通过另⼀个函数访问这个函数的局部变量,利⽤闭包可以突破作⽤链域
闭包的特性：

函数内再嵌套函数
内部函数可以引⽤外层的参数和变量
参数和变量不会被垃圾回收机制回收

```
- 说说你对闭包的理解,闭包为什么会造成内存泄漏？

- 实现一个repeat函数，主要是闭包的应用



- js的单线程、EventLoop机制、宏队列、微队列
``` 
JS的本质是单线：

1. 一般来说，非阻塞性的任务采取同步的方式，直接在主线程的执行栈完成。

2. 一般来说，阻塞性的任务都会采用异步来执行，异步的工作一般会交给其他线程完成，然后回调函数会放到事件队列中。


- 异步任务里又分为：宏任务与微任务
宏任务：
主代码块（包含new Promise）注意：new Promise() 是同步任务，resolve才是异步方法。
setTimeout
setInterval
setImmediate (Node独有)
requestAnimationFrame (浏览器独有)
I/O
UI rendering (浏览器独有)


微任务：
process.nextTick (Node独有)
Promise
Object.observe
MutationObserver

看链接；https://juejin.im/post/5e22b391f265da3e204d8c14
![!流程图](https://user-gold-cdn.xitu.io/2020/1/18/16fb7ae3b678f1ea?imageView2/0/w/1280/h/960/format/webp/ignore-error/1）


```

- 面向对象理解

- 函数式编程理解

- rem基本设置

``` 
// 原始配置
function setRem () {
  let doc = document.documentElement
  let width = doc.getBoundingClientRect().width
  let rem = width / 75
  doc.style.fontSize = rem + 'px'
}
// 监听窗口变化
addEventListener("resize", setRem)



```
- 手写代码实现一下Array.prototype.trim这个函数，并写个测试用例跑给我看下


- 获取URL上的值

- 转换驼峰命名
```  
var s1 = "get-element-by-id" // 转化为 getElementById

var f = function(s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}

```


- js原型链

``` 
文章：https://www.jianshu.com/p/be7c95714586

```
- 怎么判断对象类型？
- generator 原理
- async、await 的优缺点


- typeof 于 instanceof 区别
- 怎么判断页面是否加载完成？
- 说说你对Service worker的理解
- defer和async区别
- 说说重绘（Repaint）和回流（Reflow）

- 前端的requestAnimationFrame了解吗？有使用过吗？说一下使用场景。 
- 数组中的forEach和map的区别
- for in和for of,forEach的区别

```
for in 一般常用来遍历对象或json

for of数组对象都可以遍历，遍历对象需要通过和Object.keys()

for in循环出的是key，for of循环出的是value
```
- Set、Map和weakset、WeakMap的区别

```
应用场景Set用于数据重组，Map用于数据储存

Set：
1，成员不能重复
2，只有键值没有键名，类似数组
3，可以遍历，方法有add, delete,has

Map:
1，本质上是健值对的集合，类似集合
2，可以遍历，可以跟各种数据格式转换
WeakMap 结构与 Map 结构基本类似，唯一的区别是它只接受对象作为键名（ null 除外），不接受其他类型的值作为键名，而且键名所指向的对象，不计入垃圾回收机制。
WeakMap 最大的好处是可以避免内存泄漏。一个仅被 WeakMap 作为 key 而引用的对象，会被垃圾回收器回收掉。
WeakMap 拥有和 Map 类似的 set(key, value) 、get(key)、has(key)、delete(key) 和 clear() 方法, 没有任何与迭代有关的属性和方法。



```



 
- 可以手写一些Promise么？不是写Promise怎么用哦，让你实现一下Promise。  

```
var promise = new Promise((resolve,reject) => {
    if (操作成功) {
        resolve(value)
    } else {
        reject(error)
    }
})
promise.then(function (value) {
    // success
},function (value) {
    // failure
})

```


- JS宏任务和微任务的理解

- new 操作符具体做了什么？

``` 

创建一个新的对象， 将该构造函数内的this指向自身，返回该对象。
```
- 1.document.ready和onload的区别？
```
页面加载完成有两种事件，一是ready，表示文档结构已经加载完成（不包含图片等非文字媒体文件），二是onload，指示页 面包含图片等文件在内的所有元素都加载完成。(可以说：ready 在onload 前加载！！！)我的理解： 一般样式控制的，比如图片大小控制放在onload 里面加载;              而：jS事件触发的方法，可以在ready 里面加载;


 onload
 必须等待网页全部加载完毕（包括图片等），然后再执行JS代码
 只能执行一次，如果第二次，那么第一次的执行会被覆盖
 
 ready
 只需要等待网页中的DOM结构加载完毕
 可以执行多次，N次都不会被覆盖

```

- 组件化和模块化
```
 为什么要组件化开发

有时候页面代码量太大，逻辑太多或者同一个功能组件在许多页面均有使用，维护起来相当复杂，这个时候，就需要组件化开发来进行功能拆分、组件封装，已达到组件通用性，增强代码可读性，维护成本也能大大降低

为什么要模块化
早期的javascript版本没有块级作用域、没有类、没有包、也没有模块，这样会带来一些问题，如复用、依赖、冲突、代码组织混乱等，随着前端的膨胀，模块化显得非常迫切
模块化的好处

避免变量污染，命名冲突
提高代码复用率
提高了可维护性
方便依赖关系管理

```

- mouseover和mouseenter的区别
  
```
mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout

mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave
```

- 如何准确判断一个变量是否是数组类型

``` 
1.instanceof

var a = []
a instanceof Array

2.数组方法 isArray()
Array.isArray(a)


3.利用构造函数constructor
var arr = [1,2,3];
arr.constructor === Array


```
- 写一个能遍历对象和数组的通用forEach函数

```
function forEach(obj,fn){
	var key
	if(obj instanceof Array){
    	//准备判断是不是数组
    	obj.forEach(function(item,index){
    		fn(index,item)
    	})
	}else{
    	//不是数组就是对象
    	for(key in obj){
    		fn(key,obj[k])
    	}
	}
}

```


- 阻止事件冒泡

```
e.stopPropatation() 
```

- setTimeout、setInterval和requestAnimationFrame；
- Map和Set；

- 写一个方法遍历所有文档树所有节点(考察递归)；
- 手写 Proxy / Object.defineProperty
- 写一个函数，可以控制最大并发数
- 实现instanceof
- 实现lazyMan

```
function _LazyMan(name) {
    this.tasks = [];   
    var self = this;
    var fn =(function(n){
        var name = n;
        return function(){
            console.log("Hi! This is " + name + "!");
            self.next();
        }
    })(name);
    this.tasks.push(fn);
    setTimeout(function(){
        self.next();
    }, 0); // 在下一个事件循环启动任务
}
/* 事件调度函数 */
_LazyMan.prototype.next = function() { 
    var fn = this.tasks.shift();
    fn && fn();
}
_LazyMan.prototype.eat = function(name) {
    var self = this;
    var fn =(function(name){
        return function(){
            console.log("Eat " + name + "~");
            self.next()
        }
    })(name);
    this.tasks.push(fn);
    return this; // 实现链式调用
}
_LazyMan.prototype.sleep = function(time) {
    var self = this;
    var fn = (function(time){
        return function() {
            setTimeout(function(){
                console.log("Wake up after " + time + "s!");
                self.next();
            }, time * 1000);
        }
    })(time);
    this.tasks.push(fn);
   return this;
}
_LazyMan.prototype.sleepFirst = function(time) {
    var self = this;
    var fn = (function(time) {
        return function() {
            setTimeout(function() {
                console.log("Wake up after " + time + "s!");
                self.next();
            }, time * 1000);
        }
    })(time);
    this.tasks.unshift(fn);
    return this;
}
/* 封装 */
function LazyMan(name){
    return new _LazyMan(name);
}

```
- 说说js的垃圾回收(GC)
- Async/Await 如何通过同步的方式实现异步

- 实现懒加载
```
方案一：直接计算
let imgs =  document.querySelectorAll('img')
// 可视区高度
let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
function lazyLoad () {
  // 滚动卷去的高度
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  for (let i = 0; i < imgs.length; i ++) {
    // 图片在可视区冒出的高度
    let x = clientHeight + scrollTop - imgs[i].offsetTop
    // 图片在可视区内
    if (x > 0 && x < clientHeight+imgs[i].height) {
      imgs[i].src = imgs[i].getAttribute('data')
    } 
  }      
}
// addEventListener('scroll', lazyLoad) or setInterval(lazyLoad, 1000)

方案二：getBoundingClientRect
方案三：IntersectionObserver // 浏览器api，能直接判断是否在视口中。

```
- div中两个button，div上事件代理，如何判断点击的是哪个button

``` 
$(docuement).on('click',function(e){
      e.target// 就能看出点击的是哪个
})
```
- 实现拖拽的功能，自己的思路，pc的思路和移动端思路

- 你能实现一下双向绑定吗

```
<body>
    <div id="app">
        <input type="text" id="txt">
        <p id="show-txt"></p>
    </div>
    <script>
        var obj = {}
        Object.defineProperty(obj, 'txt', {
            get: function () {
                return obj
            },
            set: function (newValue) {
                document.getElementById('txt').value = newValue
                document.getElementById('show-txt').innerHTML = newValue
            }
        })
        document.addEventListener('keyup', function (e) {
            obj.txt = e.target.value
        })
    </script>
</body>

```






- offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别
- javascript有哪些方法定义对象
- 怎么从十万个节点中找到想要的节点，怎么快速在某个节点前插入一个节点？
- 怎么用原生js实现一个轮播图，以及滚动滑动
- 怎么实现上传下载的功能
- 如何让事件先冒泡后捕获
``` 

若要实现先冒泡后捕获，给一个元素绑定两个addEventListener，其中一个第三个参数设置为false（即冒泡），另一个第三个参数设置为true（即捕获），调整它们的代码顺序，将设置为false的监听事件放在设置为true的监听事件前面即可。

```
- 介绍下浏览器事件循环
- 浏览器事件循环和 node事件循环有什么差别

- 哪些是宏任务，哪些是微任务
- setTimetout 到期时间是怎么计算的，比如有1000个定时器

- 请分别用深度优先思想和广度优先思想实现一个拷贝函数？
- 表单可以跨域吗
``` 
原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容，所以浏览器认为这是安全的。

因为浏览器安全策略限制的是脚本，而并不限制src，form提交之类的请求。form表单提交不存在跨域
另外ajax是提交了的（调试工具中很容易看到请求已经发出），只是脚本无法获得结果。

```


- 最常见是在Array、String prototype 上写一个函数。比如 'abcd'.f() => 'd-c-b-a'

- 实现 promise.all 并发限制，每次只能并发5个请求

- 写一个函数，每隔1000ms发送一次请求，如果promise未正确返回则继续发送，最多5次。

- 介绍defineProperty方法，什么时候需要用到

- 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)
``` 


```
- Object.getPrototypeOf()这个方法
- Object.assign()
- 文件上传如何做断点续传

```  
思路很简单，拿到文件，保存文件唯一性标识，切割文件，分段上传，每次上传一段，根据唯一性标识判断文件上传进度，直到文件的全部片段上传完毕。

原理就是查询服务器上同文件已经上传了多少字节，然后设置从这个字节大小开始再次上传。

```


- 手写原生 DOM 拖拽和大数相加
- canvas 的一个问题， 一个球从一个角飞到另一个角。 现在用鼠标画一条线。 只要是穿过这个球，球就停止。  说一下实现，不会实现就说思路。
- Canvas绘制波浪线。
- 比如 'abcd'.f() => 'd-c-b-a'

- fragment 缓存DOM操作片段，解决性能问题：在网页之前插入1000个li标签
``` 
// 普通性能较差版本
const ui = document.createElement('ul');
New Array(1000).fill(0).forEach(items => {
	const li = document.createElement('li');
	ul.appendChild(li);
});
document.body.insertBefore(ul, document.body.children[0]);

// 使用fragment缓存版
var fragment = document.createDocumentFragment();
New Array(1000).fill(0).forEach(items => {
	const li = document.createElement('li');
	ul.appendChild(li);
	fragment.appendChild(ul);
});
document.body.insertBefore(fragment, document.body.children[0]);

```

- event.preventDefault() 和 event.stopPropagation()方法之间有什么区别？
``` 
event.preventDefault() 方法可防止元素的默认行为。 如果在表单元素中使用，它将阻止其提交。 如果在锚元素中使用，它将阻止其导航。 如果在上下文菜单中使用，它将阻止其显示或显示。 event.stopPropagation()方法用于阻止捕获和冒泡阶段中当前事件的进一步传播。

```
- setTimout promise等异步方案的加载顺序

``` 

Promise和setTimeout，process.nextTick, setImmediate的调用优先级：

script(主程序代码) > process.nextTick() > promise.then() > setTimeout() > setImmediate

```

- 异步编程的实现⽅式

``` 
回调函数

优点：简单、容易理解
缺点：不利于维护，代码耦合⾼


事件监听(采⽤时间驱动模式，取决于某个事件是否发⽣)：

优点：容易理解，可以绑定多个事件，每个事件可以指定多个回调函数
缺点：事件驱动型，流程不够清晰


发布/订阅(观察者模式)

类似于事件监听，但是可以通过‘消息中⼼ʼ，了解现在有多少发布者，多少订阅者


Promise对象

优点：可以利⽤then⽅法，进⾏链式写法；可以书写错误时的回调函数；
缺点：编写和理解，相对⽐较难


Generator函数

优点：函数体内外的数据交换、错误处理机制
缺点：流程管理不⽅便


async函数

优点：内置执⾏器、更好的语义、更⼴的适⽤性、返回的是Promise、结构清晰。
缺点：错误处理机制


```

- 内存泄露和内存溢出
``` 
内存泄漏是资源未释放，内存溢出是满出来了。
1、内存泄漏memory leak :是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄漏似乎不会有大的影响，但内存泄漏堆积后的后果就是内存溢出。 
2、内存溢出 out of memory :指程序申请内存时，没有足够的内存供申请者使用

```

- 数组操作
```
// 检测数值ES5方法
Array.isArray(value)  // 检测值是否为数组
// 转换方法
toString() 将数组转化为以逗号分隔的字符串
valueOf() 返回的还是数组
// 栈方法
push() 可以接收任意数量的参数，把他们逐个添加到数组的末尾，返回修改后数组的长度
pop() 从数组末尾移除最后一项，返回移除的项
// 队列方法
shift() 移除数组的第一项并返回该项
unshift() 向数组前端添加任意个项并返回新数组的长度
// 排序
sort(compare)
compare函数接收两个参数,如果返回负数，则第一个参数位于第二个参数前面；如果返回零，则两个参数相等；如果返回正数，第一个参数位于第二个参数后面
// 降序，升序相反
(a,b) => (b-a)
// 操作方法
concat(数组 | 一个或多个元素) // 合并数组，返回新数组
slice(起始位置 ，[结束位置]) // 切分数组，返回新数组，新数组不包含结束位置的项
splice(起始位置，删除的个数，[插入的元素]) // 删除|插入|替换数组，返回删除的元素组成的数组，会修改原数组
// 位置方法
indexOf(查找的项，[查找起点位置]) // 使用全等操作符，严格相等
lastIndexOf()
// 迭代方法，都接收两个参数，一个是要在每一项上运行的函数，一个是作用域（可选）
1.every 对数组中每一项运行给定函数，如果函数对每一项都返回true,则返回true
        every(fn(value,index,array){return ...},[this])
2.some 对数组中每一项运行给定函数，如果函数对任一项都返回true,则返回true
3.filter 对数组中每一项运行给定函数，返回该函数会返回true的项组成的数组
4.forEach 对数组每一项运行给定函数，无返回值
5.map 对数组每一项运行给定函数，返回每次函数调用返回结果组成的数组
// 归并方法 reduce和reduceRight(和前者遍历的方向相反),构建一个最终返回的值
reduce(fn(prev,cur,index,array){ return ... },initValue)
1.fn返回的值会作为第一个参数传递给下一项
2.initValue做为归并基础的初始值
```
- 你认为js和其他语言的不同点在哪里
- try catch只能捕获同步的异常，无法捕获异步
```  
try {
  setTimeout(function(){
    undefined();  //undefined不是一个方法，会抛出异常
  }, 500)
} catch(err){
  //这里并不能捕获异常
  console.log(err);
}
```

- 说一下类数组，数据结构是怎么样的，怎么转换为数组
- 实现一个类，可以on,emit,off,once，注册、调用、取消、注册仅能使用一次的事件
- 文件上传如何实现？，除了input还有什么别的方法？
- 浏览器如何预览图片，假设我要上传图片，未上传前我想在浏览器看到我待上传的图片
- base64 前端如何转化
- js垃圾回收
``` 
标记清除（最常用）

垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记（可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾收集器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。

引用计数

引用计数（reference counting）的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾收集器下次再运行时，它就会释放那些引用次数为零的值所占用的内存。
导致问题：会导致循环引用的变量和函数无法回收。
解决：将用完的函数或者变量置为null。

```

- this指向题目
``` 
obj = {
    name: 'a',
    getName : function () {
        console.log(this.name);
    }
}

var fn = obj.getName
obj.getName()
var fn2 = obj.getName()
fn()
fn2()

```
- 怎么判断两个对象相等
```
```
- 0.1+0.2===0.3吗，为什么？
- Number()的存储空间是多大，如果后台发送了一个超过最大字节的数字怎们办
- 怎么会产生内存泄漏

JSON.stringify(obj)==JSON.stringify(obj2);//true
```


