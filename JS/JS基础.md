
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
- 如何准确判断一个变量是否是数组类型

``` 
1.instanceof

var a = []
a instanceof Array //a是否Array的实例？true or false

2.数组方法 isArray()
Array.isArray(a)


3.利用构造函数constructor
var arr = [1,2,3];
arr.constructor === Array // a实例所对应的构造函数是否为Array

4.Object.prototype.toString.call()  （这种方式最精准）

```
- javascript的执行上下文
- 如何判断对象的属性是原型的还是实例的
``` 
function isPrototypeAttr(obj,pro) // 检查给定的属性是否存在于当前实例对象中(不包括原型链)
{
    return obj.hasOwnProperty(pro) && (pro in obj)
}

// pro in obj的作用是为了判断该属性是否存在，是必要条件
```


- attribute 和 property 的区别
``` 
<input id="the-input" type="typo" value="Name:" /> // 在页面加载后,我们在这个input中输入 "Jack"

attribute 是我们在 html 代码中经常看到的键值对

// attribute still remains the original value
input.getAttribute('id') // the-input
input.getAttribute('type') // typo
input.getAttribute('value') // Name:


property 是 attribute 对应的 DOM 节点的 对象属性 (Object field)
// property is a different story
input.id // the-input
input.type //  text
input.value // Jack


attribute 会始终保持 html 代码中的初始值, 而 Property 是有可能变化的

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

- js this
```  
this和作用域不一样,作用域是声明的时候就定下来了,this是在调用的时候才确定下来


谁最后调用函数，函数this就是谁（this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的）
例子：
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //undefined
            console.log(this); //window
        }
    }
}
var j = o.b.fn;
j();
最后调用的是window，所以this指向window。
如果是o.b.fn(),那么this指向的就是b。


箭头函数 > new > 显式 > 隐式 > 默认绑定
```

- JS的原型
- 对象遍历
- JavaScript中的arguments
- class继承和原型链继承的区别
- 遍历不可枚举属性
- setTimeout底层如何实现的
- 变量作用域链
- new和Object.create的区别


- 构造函数的隐式原型是什么
- 怎么监听对象属性值的改变
- js的函数式特性（弱类型？函数式的可置换性是什么

- js实现before，after这样的钩子函数



- 写一个四则运算，输入字符串输入结果，如果有括号呢
- JavaScript 创建构造函数的过程中发生了什么
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
- 字符串和new String出来的字符串有啥区别？
- 类数组与数组的区别与转换
- Array.sort()方法与实现机制
- js函数的4种调用方式讲一下
- 如何实现一个对象的属性无法改变
- js类型判断方式有哪些
``` 
1.typeof
2.instanceof
3.constructor
4.Object.prototype.toString.call() === [object Array]  （这种方式最精准）

typeof有什么不好的地方

```

- 0.1+0.2等于多少，精度丢失的原因
- 点击一个文本结点, target会是什么

- stream和同步方式处理文件有什么区别
- 循环语法比较及使用场景（for、forEach、for...in、for...of）
- js的变量提升和函数提升，暂时性死区
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
- setTimeout用作倒计时为何会产生误差
- Object.assign和Object.create相关
- new和Object.create的区别
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

- 说一下JS的作用域查找过程
- 说一下对bind，call，apply三个函数的认识，自己实现一下bind方法。

- 对象的几种创建方式
``` 
// 第一种：字面量
var o1 = {name: "o1"}
var o2 = new Object({name: "o2"})
// 第二种：通过构造函数
var M = function(name){this.name = name}
var o3 = new M("o3")
// 第三种：Object.create()
var p = {name: "p"}
var o4 = Object.create(p)



```


- new 实现和new 的过程
``` 
(1) 创建一个新对象；
(2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象） ；
(3) 执行构造函数中的代码（为这个新对象添加属性） ；
(4) 返回新对象。

function myNew() {
  var constr = Array.prototype.shift.call(arguments);
  var obj = Object.create(constr.prototype);
  var result = constr.apply(obj, arguments);
  return result instanceof Object? result : obj;
}

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

- 深拷贝和浅拷贝的实现方式分别有哪些？什么时候需要深拷贝，深拷贝需要注意的地方
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
- 深拷贝(数组，对象，dom元素)
- var str='abc'和var str=new string('abc')的区别是什么
- 使用setTimeout实现setInterval

``` 
// 可避免setInterval因执行时间导致的间隔执行时间不一致
setTimeout (function () {
  // do something
  setTimeout (arguments.callee, 500)
}, 500)


```
- 实现一个基本的Event Bus
- 如何解决循环引用的问题
- 如何实现一个事件的发布订阅
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

如何发送同步ajax

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


``` 

连接：https://www.jianshu.com/p/9cfe30d1a967

```
- es5的继承 实现一下
- 实现extend函数
- 组合继承和寄生组合继承的优缺点
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

闭包优点
可以让一个变量保存在内存中，不被垃圾回收机制清除
可以避免变量的全局污染
可以定义模块，将操作函数暴露到外部，细节隐藏在模块内部
闭包缺点
容易造成内存泄漏
闭包对性能会产生负面影响，包括处理速度和内存消耗

```
- 实际中遇到的闭包问题
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

看链接；https://juejin.im/post/59e85eebf265da430d571f89




```
- 箭头函数可以new吗，可以放argument吗？
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
- async、await 原理和优缺点
``` 
Async、await运行的时候会解析成什么样来运行
```


- typeof 于 instanceof 区别
- 怎么判断页面是否加载完成？
- defer和async区别
- 说说重绘（Repaint）和回流（Reflow）

 
- 数组中的forEach和map的区别
- for in和for of,forEach的区别

```
for in 一般常用来遍历对象或json

for of数组对象都可以遍历，遍历对象需要通过和Object.keys()

for in循环出的是key，for of循环出的是value
```
- obj对象和map对象区别
``` 
obj对象就是键必须是字符串，这给它的使用带来了很大的限制，所以引入了Map，它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
```
- Set、Map和weakset、WeakMap的区别



```
应用场景Set用于数据重组，Map用于数据储存

Set： // 能够存储无重复值的有序列表
1，成员不能重复
2，只有键值没有键名，类似数组
3，可以遍历，方法有add, delete,has

Weakset // 存放的是对象的弱引用

Map:  // ES6中提供了Map数据结构，能够存放键值对，其中，键的去重是通过Object.is()方法进行比较，键的数据类型可以是基本类型数据也可以是对象，而值也可以是任意类型数据。

Weak Map(或者Weak Set)都是存储对象弱引用的方式，在Weak Map（或者Weak Set）中，所有的键都必须是对象（尝试使用非对象的键会抛出错误），而且这些对象都是弱引用，不会干扰到垃圾回收。

```

- Map类型和obj的区别，什么时候只可以用map类型

 
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
- 前端的requestAnimationFrame了解吗？有使用过吗？说一下使用场景。
- Map和Set；

- 写一个方法遍历所有文档树所有节点(考察递归)；
- 手写 Proxy / Object.defineProperty
- 写一个函数，可以控制最大并发数


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

上传文件在请求中怎么实现的，切成小包到服务器怎么还原？

```


- 手写原生 DOM 拖拽
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


async函数(async await 是 promise 和 generator 函数组合的一个语法糖)

优点：内置执⾏器、更好的语义、更⼴的适⽤性、返回的是Promise、结构清晰。
缺点：错误处理机制


```

- 内存泄露和内存溢出
``` 
内存泄漏是资源未释放，内存溢出是满出来了。
1、内存泄漏memory leak :是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄漏似乎不会有大的影响，但内存泄漏堆积后的后果就是内存溢出。 
2、内存溢出 out of memory :指程序申请内存时，没有足够的内存供申请者使用

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


- class编译和构造函数编译有什么区别

-sort函数实现排序原理
``` 
数组长度<=22时采用插入排序，大于22用快排。
```
- set去重原理
- 阻止相同事件的其他侦听器被调用（stopImmediatePropagation）
- SON的parse有几个参数
- b === b + 1?如何实现
- JS 可以实现多线程吗？
- 怎么实现this对象的深拷贝
- 搜索请求中文如何请求
- for..in 和 object.keys的区别
- 设计一个栈，不使用数组
- 实现 memorize once 高阶函数
- 如何实现属性的监听的
- 如果js文件加载不成功会发生什么
- setTimeout底层如何实现的
- 对JavaScript和Java两者的怎么看
- JSON.stringify（）会出现什么问题？还有吗？（循环引用，如何解决）
- document.getElementById()的实现思路；
- arguments转数组，用call方法要加个参数怎么做
- compose？
- 怎么自己用就是原生封装一个组件，比如封装一个弹框，希望能够自定义弹框中的内容，要怎么去做
- 有这样一个函数，如何让b 访问不到a
``` 
 function(){
  
  var a=undefined;
  
  function b(){
  
  }}
```
- Es6中class关键字如何定义私有属性
```
  如何实现像java中private一样的私有方法。
  
  这个我一时间答不出来，面试官提醒我用es6的symbol

```
- nextTick 实现原理 和 使用场景 ？
- __proto__怎样修改
- 讲讲arraybuffer
- Math.round(-7.5),Math.round(-7.6)的结果,考察floor等
- encodeURI和encodeURIComponent的区别
-图片懒加载实现的几种方式
- 2.person的实例     p1.call({})   会怎么样？沿着p1一直问到了object.prototype._ptoto_；
-js传参是按值传递还是按照地址
``` 
按值传递，不然如果是引用数据类型的话，修改了的话把原始数据给改了
```
单页面应用会出现什么问题？（f5之后会出现404，前端如何解决？）


- 下面两个式子谁改变arr1
``` 
 let arr3=Array.prototype.push.apply(arr1,arr2)
 let arr4=Array.prototype.concat.apply(arr1,arr2)

```
         

JSON.stringify（）会出现什么问题？还有吗？（循环引用，如何解决）
- 题目
```  

var a = {

    name :1,
    
    b:function(){
    
        this.name++;
        
        return this.name
    
    }

}

console.log(a.b())
var c = a.b
console.log(c())
```

- canvas优化绘制性能
- 给页面注入50万个li怎么做提升性能？
- fileReader用过吗？base64编码原理？
  
