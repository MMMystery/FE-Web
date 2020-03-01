
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
- 判断一个对象是否是函数
- 怎么判断对象类型？
``` 
instanceof
利用构造函数constructor 
Object.prototype.toString.call()

```
- js继承的几种实现方式
```

class 实现继承

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






- 组合继承和寄生组合继承的优缺点
- class继承和原型链继承的区别

```

- javascript的执行上下文



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
- 对象遍历 和 数组遍历
``` 

-------------------对象遍历-------------------
//for in的方式 遍历对象的每一个可枚举属性,包括原型链上面的可枚举属性

let obj = {'0':'a','1':'b','2':'c'};
for(let i in obj){
    console.log(i, obj[i])
}

// Object.keys 只能遍历自己的对象上的可枚举的属性，不能遍历自己原型上可枚举的属性。

Object.keys(obj).forEach((key)=>{
    console.log(key, obj[key])
})

// Object.getOwnPropertyNames()  它遍历自身对象的所有属性，包括可枚举不可枚举，但是原型上的属性是无法遍历的。

Object.getOwnPropertyNames(obj).forEach((key)=>{
   console.log(key, obj[key])
})


// Reflect.ownKeys(obj) 遍历
Reflect.ownKeys(obj).forEach(function(key){
    console.log(key,obj[key]);
});



-------------------数组遍历-------------------

for 循环
forEach()
for...in
for...of  // for-in会把继承链的对象属性都会遍历一遍,所以会更花时间. for-of 语句只遍历可迭代对象的数据。


entries()
keys()
values()
reduce()
map() (不改变原数组)


```
- for..in 和 object.keys的区别
``` 
for in遍历对象所有可枚举属性 包括原型链上的属性

Object.keys遍历对象所有可枚举属性 不包括原型链上的属性

hasOwnProperty 检查对象是否包含属性名，无法检查原型链上是否具有此属性名
```
- JavaScript中的arguments， 如何arguments转数组
``` 
arguments 是一个类数组对象 代表传给一个function的参数列表。
const obj = { 0: "a", 1: "b" }; // 这种是类数组
const arr = [ "a", "b" ]; // 正常数组


function printArgs() {
    console.log(arguments);
}
printArgs("A", "a", 0, { foo: "Hello, arguments" });
执行结果是：
["A", "a", 0, Object]

arguments 操作
arguments.length //参数个数



转数组方法：
方法一：通过Array.prototype属性调用slice方法
方法二：通过调用[]的slice方法
方法三：通过遍历arguments,返回数组

1、var args = Array.prototype.slice.call(arguments);
2、var args = [].slice.call(arguments);
3、function toArray(){
    var args = []; 
    for (var i = 1; i < arguments.length; i++) { 
        args.push(arguments[i]); 
    } 
    return args;
}



```

- 如何判断对象的属性是原型的还是实例的
``` 
function isPrototypeAttr(obj,pro) // 检查给定的属性是否存在于当前实例对象中(不包括原型链)
{
    return obj.hasOwnProperty(pro) && (pro in obj)
}

// pro in obj的作用是为了判断该属性是否存在，是必要条件
```
- 如何检查对象中是否存在某个属性
``` 
1. 使用in关键字。"toString" in o; 可以判断对象的自有属性和继承来的属性是否存在
2. 对象的hasOwnProperty() 只能判断自有属性是否存在，对于继承属性会返回false
3. 用undefined判断 o.y!==undefined;  自有属性和继承属性均可判断
4. if(o.y) if直接判断
```
- 遍历不可枚举属性，怎么分辨可枚举属性和不可枚举属性
- 变量作用域链
- js中创建对象的方式有，字面量创建var objA = {}; Object.create创建和new创建，new和Object.create的区别
``` 

- 对象的几种创建方式

// 第一种：字面量
var o1 = {name: "o1"}
var o2 = new Object({name: "o2"})
// 第二种：通过构造函数
var o3 = new function(){}
// 第三种：Object.create()
var o4 = Object.create({name: "p"})

区别：


```
- Object.assign和Object.create相关
- new和Object.create的区别
- 构造函数的隐式原型是什么
- 怎么监听对象属性值的改变（其实就是双向绑定的原理）
``` 
// defineProperty + set/get
var obj={};
Object.defineProperty(obj,'data',{
    get:function(){
        return data;
    },
    set:function(newValue){
        data=newValue;
        console.log('set :',newValue);
        //需要触发的渲染函数写在这...
    }
})


proxy
// let p = new Proxy(target, handler);


```


- js的函数式特性（弱类型？函数式的可置换性是什么
- 写一个四则运算，输入字符串输入结果，如果有括号呢
- JavaScript 创建构造函数的过程中发生了什么(其实问的就是new的过程)
``` 
a：创建一个空对象，作为将要返回的对象实例。

b：将空对象的原型指向了构造函数的prototype属性。

c：将空对象赋值给构造函数内部的this关键字。

d：开始执行构造函数内部的代码。

```
- 定义函数的方式
```
1.函数声明
function demo (){}
function (){} // 匿名函数
()=>{} // ES6匿名函数

2.函数表达式

var demo = function(){}
let demo = ()=>{} // es6

3.构造函数
const demo = new Function("a", "b")


```
- 字符串和new String出来的字符串有啥区别？
``` 

let A="ABC";
let B=new String("ABC");
console.log(A==B) // true
console.log(A.equals(B))  // true
console.log(A===B)  // false  引用类型全比较的时候比较的是引用地址是否相等，那肯定不等

```
- 类数组与数组的区别与转换
``` 
const obj = { 0: "a", 1: "b" , length: 3}; // 这种是类数组
const arr = [ "a", "b" ];

ES6 扩展运算符进行转换
var arr1 = [...arrayLike]; // ['a','b','c']
复制代码

ES6 中的 Array.from
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']


```
- Array.sort()方法与实现机制
``` 
数组长度小于等于 22 的用插入排序，其它的用快速排序
```
- js函数的4种调用方式讲一下
``` 
1、函数调用模式
function add(x,y){
    console.log(this);//window
}    
add();

2、方法调用模式
var o = {
    m: function(){
        console.log(1);
    }
};
o.m();

3、构造函数调用模式(要借助new )  // 如果函数或者方法调用之前带有new关键字，它就构成构造函数调用。
function fn(x){
    this.a = x;
};
var obj = new fn(2);
console.log(obj.a);//2


4、间接调用
call()方法和apply()方法

function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);  

```
- js类型判断方式有哪些
``` 
1.typeof
2.instanceof
3.constructor
4.Object.prototype.toString.call() === [object Array]  （这种方式最精准）

typeof有什么不好的地方

```

- 0.1+0.2等于多少，精度丢失的原因
``` 
0.1的二进制格式是：0.0001100011....。这是一个二进制无限循环小数，但计算机内存有限，我们不能用储存所有的小数位数。那么在精度与内存间如何取舍呢？

答案是：在某个精度点直接舍弃。当然，代价就是，0.1在计算机内部根本就不是精确的0.1，而是一个有舍入误差的0.1。


如何比较这种数据呢：
bignumber.js会在一定精度内，让浮点数计算结果符合我们的期望。let x = new BigNumber(0.1);
或者转换为字符串比较是否相等
```

- 循环语法比较及使用场景（for、forEach、for...in、for...of）

``` 
forEach // 进行数组遍历,这种方法更加简洁，但是不能使用breack语句中断循环，也不能使用return语句返回到外层函数
for..in // for-in循环体还会遍历自定义的属性，数组原型链上的属性都能被访问到。
           for-in按照随机顺序遍历数组元素

for..of // ES6的新语法。
           这个方法避开了for-in循环的所有缺陷
           与forEach()不同的是，它可以正确响应break、continue和return语句

for…in 遍历（当前对象及其原型上的）每一个属性名称
for…of遍历（当前对象上的）每一个属性值:
```

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

- js阻止冒泡事件和阻止默认事件
```  
event.stopPropagation()  // 方法用于阻止捕获和冒泡阶段中当前事件的进一步传播。
event.preventDefault()  // 方法可防止元素的默认行为。 如果在表单元素中使用，它将阻止其提交。 如果在锚元素中使用，它将阻止其导航。 如果在上下文菜单中使用，它将阻止其显示或显示。

```
- setTimeout用作倒计时为何会产生误差
``` 
setTimeout(function () {
	console.log('biubiu');
}, 1000);

某个执行时间很长的函数();


如果定时器下面的函数执行要 5秒钟，那么定时器里的log 则需要 5秒之后再执行，函数占用了当前 执行栈 ，要等执行栈执行完毕后再去读取 微任务(microtask)，等 微任务(microtask) 完成，这个时候才会去读取 宏任务(macrotask) 里面的 setTimeout 回调函数执行。

```

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


- 什么是NaN？以及如何检查值是否为 NaN？
``` 
NaN属性表示“不是数字”的值，但它的的类型又是数字
Number.isNaN() 可以检测
```

- call、apply、bind的区别。
``` 
总之三种方法都是改变函数内this的指向

1.fn.call (context, arg1, arg2, .....)

call中第一个参数是fn的上下文，剩下的参数就是需要向fn中传递的参数

2.fn.apply (context, [args])

apply同call类似，第一个参数也是fn的上下文，和call不同的是，apply第二个参数是数组，call的第二个及第二个以后的参数都是数组里面的元素

3.fn.bind (context)

bind会创建一个函数，称之为绑定函数，调用这个函数时，绑定函数会以创建它是bind方法传入的第一个参数作为自己的上下文，第二个及第二个以后的参数并且加上绑定函数运行时传递进来的参数作为原函数的参数来调用原函数。 （有点绕哈，不过对下一道题有帮助）

4.call、apply、bind最大的区别就是bind不会立即调用，会返回一个函数，apply、call会立即调用。

```

- 说一下JS的作用域查找过程
``` 
当一个作用域嵌套在另一个块或函数中，就产生了作用域嵌套。
在当前作用域无法找到某变量时，向外层查找
```





- 深拷贝和浅拷贝的实现方式分别有哪些？什么时候需要深拷贝，深拷贝需要注意的地方
```

浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。修改新对象也会改动原对象。
但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。



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


问：深拷贝(数组，对象，dom元素)

数组深拷贝的方式 for循环 、concat方法 、...扩展符

对象的深拷贝  for...in 、 JSON.parse(JSON.stringify(obj)) 、 ...扩展符


问：怎么实现this对象的深拷贝

```





- JSON.stringify（）会出现什么问题？如何解决循环引用的问题

``` 
JS 中引用计数垃圾回收策略的问题

利用JSON 扩展包的
JSON.decycle 去除循环引用
JSON.retrocycle 还原

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

- 箭头函数有作用域吗？可以new吗？可以放argument吗？
``` 
箭头函数、没有prototype、没有自己的this指向

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。

箭头函数中的this因为绑定了词法作用域，所以始终指向自身外的第一个this（由于自身没有声明this，所以会去作用域链上找this），也就是始终等于调用它的函数的this

arguments 能否适用是看该函数是否处于严格模式,严格模式是禁止适用的
可以使用rest参数代替arguments。let fun = (...arg) => { console.log(...arg) }; 

```

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

- generator 原理
- async、await 原理和优缺点
``` 
Async、await运行的时候会解析成什么样来运行
```


- typeof 于 instanceof 区别
- 怎么判断页面是否加载完成？

- 说说重绘（Repaint）和回流（Reflow）

 
- 数组中的forEach和map的区别
- for in和for of,forEach的区别

```
for in 一般常用来遍历对象或json

for of数组对象都可以遍历

for in循环出的是key，for of循环出的是value
```
- obj对象和map对象区别
``` 
obj对象就是键必须是字符串，这给它的使用带来了很大的限制，所以引入了Map，它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
```
- Set、Map和weakset、WeakMap分别是什么

```
应用场景Set用于数据重组，Map用于数据储存

Set： // 能够存储无重复值的有序列表
1，成员不能重复
2，只有键值没有键名，类似数组
3，可以遍历，方法有add, delete,has

Weakset // 存放的是对象的弱引用

Map:  // ES6中提供了Map数据结构，能够存放键值对，其中，键的去重是通过Object.is()方法进行比较，键的数据类型可以是基本类型数据也可以是对象，而值也可以是任意类型数据。

Weak Map(或者Weak Set)都是存储对象弱引用的方式，在Weak Map（或者Weak Set）中，所有的键都必须是对象（尝试使用非对象的键会抛出错误），而且这些对象都是弱引用，不会干扰到垃圾回收。


问：Set去重的原理？

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

- setTimeout、setInterval和requestAnimationFrame；前端的requestAnimationFrame了解吗？有使用过吗？说一下使用场景。

``` 
都是宏任务

setTimeout :设置某个时间后执行某个动作，表示延时执行某个动作
setInterval :设置每隔多久执行一次某个动作，它是循环的
requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制
requestAnimationFrame会申请绘制下一帧，只是执行时间由浏览器决定，浏览器会在绘制下一帧前执行回调函数，这样不会造成资源浪费！


区别：
定时器指定的时间间隔表示何时将定时器的代码添加到队列，而不是何时实际执行代码！
而requestAnimationFrame：采用系统时间间隔，最佳绘制。使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
是浏览器用于定时循环操作的一个接口，主要用途是按帧对网页进行重绘。


```


- 说说js的垃圾回收(GC)
- Async/Await 如何通过同步的方式实现异步
- 获取页面滚动高度
``` 
window.pageYOffset
```
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
```  
onmousedown：鼠标按下事件
onmousemove：鼠标移动事件
onmouseup：鼠标抬起事件

计算点的坐标

```

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
```
offsetWidth/offsetHeight 返回值为content + padding + border (和getBoundingClentRect()相同)

clientWidth/clientHeight 返回值为content + padding // 如果有滚动条 ，也不会包含滚动条

scrollWidth/scrollHeight 返回值为content + padding + 溢出内容尺寸
```

- 怎么从十万个节点中找到想要的节点，怎么快速在某个节点前插入一个节点？
- 怎么用原生js实现一个轮播图，以及滚动滑动

``` 
箭头控制
prev.onclick=function(){
 if(currentIndex>=1){
     -currentIndex;
    }else{
      currentIndex = 5;
    }
    animate(currentIndex)
}
next.onclick=function(){
  if(currentIndex<=5){
   +currentIndex;
   }else{
    currentIndex =1;
   }
   animate(currentIndex)
}


function animate(currentIndex){
 multiImages.style.left = -currentIndex * 400 + "px";
}
setInterval(animate,1000);
}


```
- 怎么实现上传下载的功能
- 如何让事件先冒泡后捕获
``` 

若要实现先冒泡后捕获，给一个元素绑定两个addEventListener，其中一个第三个参数设置为false（即冒泡），另一个第三个参数设置为true（即捕获），调整它们的代码顺序，将设置为false的监听事件放在设置为true的监听事件前面即可。

```

- 浏览器事件循环和 node事件循环有什么差别

- setTimeout 到期时间是怎么计算的，比如有1000个定时器

- 请分别用深度优先思想和广度优先思想实现一个拷贝函数？

- 介绍defineProperty方法，什么时候需要用到
- Object.getPrototypeOf()这个方法
- Object.assign()

- 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)
``` 


```

- 文件上传如何做断点续传

```  
思路很简单，拿到文件，保存文件唯一性标识，切割文件，分段上传，每次上传一段，根据唯一性标识判断文件上传进度，直到文件的全部片段上传完毕。

原理就是查询服务器上同文件已经上传了多少字节，然后设置从这个字节大小开始再次上传。

上传文件在请求中怎么实现的，切成小包到服务器怎么还原？

```


- 手写原生 DOM 拖拽


- fragment 缓存DOM操作片段，解决性能问题：在网页之前插入1000个li标签
``` 
// 普通性能较差版本
const ui = document.createElement('ul');
New Array(1000).fill(0).forEach(items => {
	const li = document.createElement('li');
	ul.appendChild(li);
});
document.body.insertBefore(ul, document.body.children[0]);

方法一、// 使用fragment缓存版
var fragment = document.createDocumentFragment();
New Array(1000).fill(0).forEach(items => {
	const li = document.createElement('li');
	ul.appendChild(li);
	fragment.appendChild(ul);
});
document.body.insertBefore(fragment, document.body.children[0]);

方法二、
隐藏元素，应用修改，重新显示

这个会在展示和隐藏节点的时候，产生两次重绘

function appendDataToElement(appendToElement, data) {
    let li;
    for (let i = 0; i < data.length; i++) {
    	li = document.createElement('li');
        li.textContent = 'text';
        appendToElement.appendChild(li);
    }
}
const ul = document.getElementById('list');
ul.style.display = 'none';
appendDataToElement(ul, data);
ul.style.display = 'block';

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
``` 
数据类型的区别


程序执行的区别
1、js是一门脚本语言，它的执行是自上而下，依次执行的。
2、java是一门面向对象的语言，你必须有一个main函数，它的执行是从main函数开始的。

```
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

- 文件上传如何实现？，除了input还有什么别的方法？
``` 
ajax+formData

var xhr = new XMLHttpRequest();
var formData = new FormData();
var fileInput = document.getElementById("myFile");
var file = fileInput.files[0];
formdata.append('myFile', file);

xhr.open("POST", "/upload.php");

xhr.onload = function(){
    if(this.status === 200){
        //对请求成功的处理
    }
}

xhr.send(formData);
xhr = null;



```
- 浏览器如何预览图片，假设我要上传图片，未上传前我想在浏览器看到我待上传的图片
``` 
var reader = new FileReader();
    reader.onload = (function(aImg) {
        return function(e) {
             aImg.src = e.target.result;
        }
    })(img);
reader.readAsDataURL(file);

```

- base64 前端如何转化
``` 
图片的下载始终都要向服务器发出请求，要是图片的下载不用向服务器发出请求，而可以随着 HTML 的下载同时下载到本地那就太好了，而 base64 正好能解决这个问题



```
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
- == 和 ===
``` 
==存在类型转换

===的话
1、如果是引用类型，则两个变量必须指向同一个对象（同一个地址）；
2.、如果是基本类型，则两个变量除了类型必须相同外，值还必须相等。
```
- 怎么判断两个对象相等
```
序列化JSON.stringify(obj)

通用方法:
首先判断是不是引用类型的，如果有一个不是，那就进行直接判断。
若全是引用类型的，那就先看一下属性值的长度是否相等，若不相等，就直接false啦。
若相等，就接着遍历里边的每一个属性，还是先看里边的属性是哪一个类型，如果全是引用类型，那就接着对里边的属性调用equals递归函数。如果不全是引用类型，那就比较这两个值是否相等，若不相等就直接false啦。

```

- 0.1+0.2===0.3吗，为什么？
``` 
因为计算机不能精确表示0.1， 0.2这样的浮点数，计算时使用的是带有舍入误差的数，并不是所有的浮点数在计算机内部都存在舍入误差，比如0.5就没有舍入误差，具有舍入误差的运算结可能会符合我们的期望，原因可能是“负负得正”。

解决办法：
parseFloat((0.1+0.2).toFixed(10))

```
- Number()的存储空间是多大，如果后台发送了一个超过最大字节的数字怎们办
```
JavaScript的Number类型有个最大值（安全值），即2的53次方，为9007199254740992。如果超过这个值，那么js会出现不精确的问题。

解决：
后端使用字符串格式发送数据
控制用户新建数据时id的长度

```
- 怎么会产生内存泄漏


- 判断对象是否相等的办法
``` 

通过ES6的Object.is(a,b) // true

JSON.stringify(obj)==JSON.stringify(obj2);//true

```



- class编译和构造函数编译有什么区别

- sort函数实现排序原理
``` 
数组长度<=22时采用插入排序，大于22用快排。
```
- 阻止相同事件的其他侦听器被调用（stopImmediatePropagation）

- JSON的parse有几个参数
``` 
text:必需， 一个有效的 JSON 字符串。
reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
```
- b === b + 1?如何实现
``` 
console.log(2===true+1) // true。 因为true+1会转换为1+1
```
- JS 可以实现多线程吗？
``` 
js的web worker，可以在后台线程进行一些大量的运算而不阻塞主线程；
通过postmessage，和onmessage和主线程通讯；但是有限制不能操作DOM和某些api；

```

- 搜索请求中文如何请求


- 如果js文件加载不成功会发生什么
- setTimeout底层如何实现的
``` 
setTimeout只能保证在指定的时间过后将任务(需要执行的函数)插入队列等候，并不保证这个任务在什么时候执行。
```

- document.getElementById()的实现思路；


- 怎么自己用就是原生封装一个组件，比如封装一个弹框，希望能够自定义弹框中的内容，要怎么去做
``` 
定义默认熟悉，默认样式，弹框中的内容由上层传入。

```
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

- __proto__怎样修改


- Math.round(-7.5),Math.round(-7.6)的结果,考察Math的ceil、floor、round方法
``` 
Math类中提供了三个与取整有关的方法：ceil、floor、round

ceil // 表示向上取整
floor // 表示向下取整
round // 四舍五入 

Math.round(11.4)  // 11
Math.round(11.5)  // 12
Math.round(-11.5) // -11
Math.round(-11.6) // -12
```


- encodeURI和encodeURIComponent的区别
``` 
encodeURI和encodeURIComponent的区别在于前者被设计来用于对完整URL进行URL Encode，于是URL中的功能字符，比如&, ?, /, =等等这些并不会被转义；
而后者被设计来对一个URL中的值进行转义，会把这些功能字符也进行转义。

```
- 图片懒加载实现的几种方式
- 2.person的实例     p1.call({})   会怎么样？沿着p1一直问到了object.prototype._ptoto_；

- js传参是按值传递还是按照地址
``` 
按值传递，不然如果是引用数据类型的话，修改了的话把原始数据给改了
```



- 下面两个式子谁改变arr1
``` 
 let arr3=Array.prototype.push.apply(arr1,arr2)
 let arr4=Array.prototype.concat.apply(arr1,arr2)

```
         
- this指向的题目
```  

var a = {

    name :1,
    
    b:function(){
    
        this.name++;
        
        return this.name
    
    }

}

console.log(a.b()) // 谁调用this指向谁，所以是this指向a。
var c = a.b
console.log(c()) // 这里闭包了，每调用一次会+1。并且this指向window了。


```
- 简述自定义事件实现方法（参看红宝书）
- 简述 getter 和 setter 写法（参看红宝书）
- 函数式编程compose
``` 
在函数式编程中，Compose 就是将几个有特点的函数拼凑在一起， 让它们结合， 产生一个崭新的函数
组合函数按顺序从右向左执行。右边函数调用后，返回的结果，作为左边函数的参数传入，严格保证了执行顺序，这也是compose 主要特点。

function compose (f, g) {
    return function(x) {
        return f(g(x));
    }
}

```
- 面向对象理解
- 对JavaScript和Java两者的怎么看

----------------------------------------------暂时不处理-----------------------------------------------
- canvas优化绘制性能
- 给页面注入50万个li怎么做提升性能？
- fileReader用过吗？base64编码原理？
- stream和同步方式处理文件有什么区别
- canvas 的一个问题， 一个球从一个角飞到另一个角。 现在用鼠标画一条线。 只要是穿过这个球，球就停止。  说一下实现，不会实现就说思路。
- Canvas绘制波浪线。
  
