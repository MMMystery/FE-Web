- 堆和栈区别
- 位运算
``` 
10 << 1 // -> 20 可以把左移看成以下公式 a * (2 ^ b)
10 >> 1 // -> 5  可以把右移看成以下公式 a / (2 ^ b)

两个数不使用四则运算得出和

```

- 函数提升和变量提升
``` 
// 在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

b() // call b second
console.log(b) // b() {console.log('call b second')}
console.log(a) // undefined

function b() {
    console.log('call b fist')
}
function b() {
    console.log('call b second')
}
var b = 'Hello'
var a = 'world'

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
- JavaScript有⼏种类型的值
``` 

栈：原始数据类型（ Undefined ， Null ， Boolean ， Number 、 String、 symbol  ）
堆：引⽤数据类型（对象、数组和函数,Data,RegExp）
两种类型的区别是：存储位置不同

原始数据类型直接存储在栈( stack )中的简单数据段，占据空间⼩、⼤⼩固定，属于被频繁使⽤数据，所以放⼊栈中存储；
引⽤数据类型存储在堆( heap )中的对象,占据空间⼤、⼤⼩不固定,如果存储在栈中，将会 影响程序运⾏的性能；引⽤数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引⽤值时，会⾸先检索其在栈中的地址，取得地址后从堆中获得实体

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

- js类型判断方式有哪些
``` 
1.typeof //判断类型
2.instanceof // a是否Array的实例
3.constructor // arr.constructor === Array // a实例所对应的构造函数是否为Array
4.Object.prototype.toString.call(temp) === [object Array]  （这种方式最精准）

typeof有什么不好的地方, typeof 与 instanceof 区别

```


- 如何准确判断一个变量是否是数组类型

``` 
1.数组方法 isArray()
Array.isArray(a)

2.instanceof  

var a = []
a instanceof Array //a是否Array的实例？true or false 
总结：判断实例对象的proto属性与构造函数的prototype是不是用一个引用。如果不是，他会沿着对象的proto向上查找的，直到顶端Object。
f.proto 一层一层向上寻找，能否找到FOO.prototype，找到为true，否则为false

3.利用构造函数constructor
var arr = [1,2,3];
arr.constructor === Array // a实例所对应的构造函数是否为Array

4.Object.prototype.toString.call(obj)  （这种方式最精准）// “[object Number]”

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

- 怎么判断对象类型？判断一个对象是否是函数
``` 
typeof操作符
instanceof 
利用构造函数constructor 
Object.prototype.toString.call() // “[object Number]”

```
- 利用typeof instanceof来判断数组还是对象

---


- JS中的内置函数有哪些？
```  
内置函数： Object Array Boolean Number String Function Date RegExp Error
内置对象：Math, JSON
```
- 数值运算
```  
1 + "1"
加性操作符：如果只有一个操作数是字符串，则将另一个操作数转换为字符串，然后再将两个字符串拼接起来

所以值为：“11”

2 * "2" // 4
乘性操作符：如果有一个操作数不是数值，则在后台调用 Number()将其转换为数值

[1, 2] + [2, 1]
Javascript中所有对象基本都是先调用valueOf方法，如果不是数值，再调用toString方法。

所以两个数组对象的toString方法相加，值为："1,22,1"

"a" + + "b"
后边的“+”将作为一元操作符，如果操作数是字符串，将调用Number方法将该操作数转为数值，如果操作数无法转为数值，则为NaN。

所以值为："aNaN"

6 种 falsy 值:
undefined
null
NaN
0
'' (empty string)
false

new Number(0)和new Boolean(false)其实是一个对象，是truthy。
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
通过ES6的Object.is(a,b) // true

JSON.stringify(obj)==JSON.stringify(obj2);//true


通用方法:
首先判断是不是引用类型的，如果有一个不是，那就进行直接判断。
若全是引用类型的，那就先看一下属性值的长度是否相等，若不相等，就直接false啦。
若相等，就接着遍历里边的每一个属性，还是先看里边的属性是哪一个类型，如果全是引用类型，那就接着对里边的属性调用equals递归函数。如果不全是引用类型，那就比较这两个值是否相等，若不相等就直接false啦。

```

- this指向
``` 
1、全局环境中的 this 
在全局执行环境中（在任何函数体外部）this 都指向全局对象 window;

2、是否是 new 绑定
构造函数返回值不是 function 或 object。 newSuper() 返回的是 this 对象。
构造函数返回值是 function 或 object， newSuper()是返回的是Super中返回的对象。

3、函数是否通过 call,apply 调用，或者使用了 bind 绑定，如果是，那么this绑定的就是指定的对象【归结为显式绑定】

4、 隐式绑定，函数的调用是在某个对象上触发的，即调用位置上存在上下文对象。典型的隐式调用为: xxx.fn()

5、默认绑定，在不能应用其它绑定规则时使用的默认规则，通常是独立函数调用。
非严格模式：node环境，执行全局对象 global，浏览器环境，执行全局对象 window。
严格模式：执行 undefined
```

- js的单线程、EventLoop机制、宏队列、微队列
``` 
JS的本质是单线程：

1. 一般来说，非阻塞性的任务采取同步的方式，直接在主线程的执行栈完成。

2. 一般来说，阻塞性的任务都会采用异步来执行，异步的工作一般会交给其他线程完成，然后回调函数会放到事件队列中。

一次完整的Event loop是这样的：

执行同步代码，这属于宏任务
执行栈为空，查询是否有微任务需要执行
执行所有微任务
必要的话渲染 UI
然后开始下一轮 Event loop，执行宏任务中的异步代码



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
process.nextTick (Node独有) 且process.nextTick优先级大于promise.then
Promise
Object.observe
MutationObserver


看链接；https://juejin.im/post/59e85eebf265da430d571f89

```

- js原型链

``` 
文章：https://www.jianshu.com/p/be7c95714586

实例.__proto__ === 原型
原型.constructor === 构造函数
构造函数.prototype === 原型

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
闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，这就形成了一个闭包。函数 B 就被称为闭包。


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
创建执行匿名函数，他可以围绕文件中的上下文创建一个闭包环境，为这个文件创建私有的命名空间。这样就可以避免不同的 JavaScript 模块和库在命名上产生冲突。
闭包缺点
容易造成内存泄漏
闭包对性能会产生负面影响，包括处理速度和内存消耗


for ( var i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log( i );
	}, i*1000 );
}

怎么让它输出1，2，3，4，5
1.改为let
for ( let i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log( i );
	}, i*1000 );
}

2.使用闭包
for ( var i=1; i<=5; i++) {
    (function(j) {
        setTimeout( function timer() {
                console.log( j );
            }, j*1000 );
        })(i)
}
3.使用setTimeOut的第三个参数
for ( var i=1; i<=5; i++) {
	setTimeout( function timer(j) {
		console.log( j );
	}, i*1000, i);
}


- 怎么销毁一个闭包

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

- javascript的执行上下文

- 深拷贝和浅拷贝的实现方式分别有哪些？什么时候需要深拷贝，深拷贝需要注意的地方
```


|      |和原数据是否指向同一对象  第一层数据为基本数据类型         原数据中包含子对象
赋值    |是                     改变会使原数据一同改变          改变会使原数据一同改变
浅拷贝  |否                     改变不会使原数据一同改变        改变会使原数据一同改变
深拷贝  |否                     改变不会使原数据一同改变        改变不会使原数据一同改变

浅拷贝只拷贝了第一层，如果接下去的值中还有对象的话，两者享有相同的地址。改变会使原数据一同改变


浅拷贝：(1) Object.assign的方式 (2) 通过对象扩展运算符 (3) 通过数组的slice方法 (4) 通过数组的concat方法。

// 1. ...实现
let copy1 = {...{x:1}}

// 2. Object.assign实现
let copy2 = Object.assign({}, {x:1})

// 3. Array.prototype.slice()、 Array.prototype.concat()等等



深拷贝：(1) 通过JSON.stringify来序列化对象 (2) 手动实现递归的方式。

// 1. JOSN.stringify()/JSON.parse()
let obj = {a: 1, b: {x: 3}}
JSON.parse(JSON.stringify(obj))

该方法也是有局限性的：

会忽略 undefined
会忽略 symbol
不能序列化函数
不能解决循环引用的对象

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

// 3. lodash有一个深拷贝函数


问：深拷贝(数组，对象，dom元素)

数组深拷贝的方式 for循环 、concat方法 、...扩展符

对象的深拷贝  for...in 、 JSON.parse(JSON.stringify(obj)) 、 ...扩展符（只能拷贝第一层）


问：怎么实现this对象的深拷贝

```

- 数组中的forEach和map的区别

- for ,for in,for of,forEach的区别
```
for循环在Array和Object中都可以使用
for in在Array和Object中都可以使用  for in循环出的是key,注意：遍历对象会遍历包含原型上的属性
forEach循环在Array、Set、Map中都可以使用。 缺点：无法使用 break 语句跳出循环，或者使用 return 从函数体内返回。
for of在Array、Object、Set、Map中都可以使用 for of循环出的是value。 不同于 forEach()，可以使用 break, continue 和 return
```
- obj对象和map对象区别
``` 
obj对象就是键必须是字符串，这给它的使用带来了很大的限制，所以引入了Map，它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
```

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

区别：字面量创建的方式内部其实就是new 
function Foo() {}
// function 就是个语法糖
// 内部等同于 new Function()
let a = { b: 1 }
// 这个字面量内部也是使用了 new Object()


```
- Object.assign和Object.create相关
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
``` 
1 + '1' // '11'
2 * '2' // 4
[1, 2] + [2, 1] // '1,22,1'
'a' + + 'b' // -> "aNaN"
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

一、ES6 扩展运算符进行转换
var arr1 = [...arrayLike]; // ['a','b','c']

二、ES6 中的 Array.from
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

三、Array.prototype.slice.call(arr);

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



- js继承的几种方式以及区别 （这个要完善一下，很多种）
```
组合继承：
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}
function Child(value) {
  Parent.call(this, value)
}
Child.prototype = new Parent()

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true

寄生组合继承：
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}

function Child(value) {
  Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true


Class 继承：
class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}
class Child extends Parent {
  constructor(value) {
    super(value)
    this.val = value
  }
}
let child = new Child(1)
child.getValue() // 1
child instanceof Parent // true



- 组合继承和寄生组合继承的优缺点

答案：组合继承缺点在于继承父类函数时调用了构造函数。寄生组合继承去掉了父类无用的属性。


- class继承和原型链继承的区别
答案：类继承的实现建立在原型继承之上，class 实现继承的核心在于使用 extends 表明继承自哪个父类

- 原型继承可以继承非原型属性吗

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


- JavaScript 中的真值和假值是什么？
``` 

JavaScript 中有以下 6 个假值：

false
undefined
null
""：空字符串
NaN
0：包含 -0 和 +0
除上面以外的其他所有值都被认为是真值。

```
- map（）和forEach遍历的区别
```
map（）会返回一个新数组。

如果你需要迭代一个数组，使其本身发生变化且不需要返回一个新数组时，可以使用 forEach()
如果你只是对数字进行遍历时，也可以使用 forEach()
map() 是保持原有数组不变的正确选择，他可以让原始数组的每一个值都映射到新的数组上
map() 运行的较快，且返回的新数组可以让你继续使用 map()、filter()、reduce() 等方法，

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

event.stopImmediatePropagation()  // 阻止相同事件的其他侦听器被调用,阻止该事件目标执行别的注册事件
```
- setTimeout用作倒计时为何会产生误差
``` 
setTimeout(function () {
	console.log('biubiu');
}, 1000);

某个执行时间很长的函数();

如果定时器下面的函数执行要 5秒钟，那么定时器里的log 则需要 5秒之后再执行，函数占用了当前执行栈 ，要等执行栈执行完毕后再去读取 微任务(microtask)，等 微任务(microtask) 完成，这个时候才会去读取 宏任务(macrotask) 里面的 setTimeout 回调函数执行。


// 以下是一个相对准备的倒计时实现
var period = 60 * 1000 * 60 * 2
var startTime = new Date().getTime();
var count = 0
var end = new Date().getTime() + period
var interval = 1000
var currentInterval = interval

function loop() {
  count++
  var offset = new Date().getTime() - (startTime + count * interval); // 代码执行所消耗的时间
  var diff = end - new Date().getTime()
  var h = Math.floor(diff / (60 * 1000 * 60))
  var hdiff = diff % (60 * 1000 * 60)
  var m = Math.floor(hdiff / (60 * 1000))
  var mdiff = hdiff % (60 * 1000)
  var s = mdiff / (1000)
  var sCeil = Math.ceil(s)
  var sFloor = Math.floor(s)
  currentInterval = interval - offset // 得到下一次循环所消耗的时间
  console.log('时：'+h, '分：'+m, '毫秒：'+s, '秒向上取整：'+sCeil, '代码执行时间：'+offset, '下次循环间隔'+currentInterval) // 打印 时 分 秒 代码执行时间 下次循环间隔

  setTimeout(loop, currentInterval)
}

setTimeout(loop, currentInterval)

```

- 怎么判断 script 或 img 是否加载完成
``` 
$('img').onload事件
readystatechange事件，然后用document.readyState == “complete”
img的complete属性
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


- 什么是NaN？以及如何检查值是否为 NaN？
``` 
NaN属性表示“不是数字”的值，但它的的类型又是数字
Number.isNaN() 可以检测
```

- call、apply、bind的区别。
``` 


总之三种方法都是改变函数内this的指向
call：call 可以接收多个参数。B.call(A, args1,args2);
apply：apply 只接受一个参数数组。例如：B.apply(A, arguments);
bind：除了返回是函数以外，它的参数和call一样。可以通过 bind 实现柯里化

call、apply、bind最大的区别就是bind不会立即调用，会返回一个函数，apply、call会立即调用。
call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。


1.fn.call (context, arg1, arg2, .....) 

call中第一个参数是上下文，剩下的参数就是需要向fn中传递的参数,从第二个参数开始往后,每个参数被依次传入函数

2.fn.apply (context, [args])

apply同call类似，第一个参数也是fn的上下文，和call不同的是，apply第二个参数是数组或者类数组

3.fn.bind (context)

bind会创建一个函数，称之为绑定函数，调用这个函数时，绑定函数会以创建它是bind方法传入的第一个参数作为自己的上下文，第二个及第二个以后的参数并且加上绑定函数运行时传递进来的参数作为原函数的参数来调用原函数。 （有点绕哈，不过对下一道题有帮助）


```

- 说一下JS的作用域查找过程
``` 
当一个作用域嵌套在另一个块或函数中，就产生了作用域嵌套。
在当前作用域无法找到某变量时，向外层查找
```





- 如何让 (a == 1 && a == 2 && a == 3) 的值为true？（利用Symbol）
``` 
1、利用[Symbol.toPrimitive]
2、利用利用数据劫持(Proxy/Object.definedProperty)

```






- JSON.stringify（）会出现什么问题？如何解决循环引用的问题

``` 
JS 中引用计数垃圾回收策略的问题

利用JSON 扩展包的
JSON.decycle 去除循环引用
JSON.retrocycle 还原

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



- 怎么判断页面是否加载完成？



 








- mouseover和mouseenter的区别
  
```
mouseover：当鼠标移入元素或其子元素都会触发事件，所以有一个重复触发，冒泡的过程。对应的移除事件是mouseout

mouseenter：当鼠标移除元素本身（不包含元素的子元素）会触发事件，也就是不会冒泡，对应的移除事件是mouseleave
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


requestAnimationFrame 和 setTimeout 的区别

```

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
      imgs[i].src = imgs[i].getAttribute('data-src') //关键
    } 
  }      
}
// addEventListener('scroll', lazyLoad) or setInterval(lazyLoad, 1000)

方案二：getBoundingClientRect
方案三：IntersectionObserver // 浏览器api，能直接判断是否在视口中。

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

// 以下会先打印冒泡然后是捕获
node.addEventListener('click',(event) =>{
	console.log('冒泡')
},false);
node.addEventListener('click',(event) =>{
	console.log('捕获 ')
},true)

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

- 文件上传如何做断点续传，断点续传具体细节，还追问了如果文件特别大，电脑内存又不够应该怎么处理

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
- 实现ajax异步函数的方式
- 内存泄露和内存溢出
``` 
内存泄漏是资源未释放，内存溢出是满出来了。
1、内存泄漏memory leak :是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄漏似乎不会有大的影响，但内存泄漏堆积后的后果就是内存溢出。 
意外的全局变量: 无法被回收
定时器: 未被正确关闭，导致所引用的外部变量无法被释放
事件监听: 没有正确销毁 (低版本浏览器可能出现)
闭包: 会导致父级中的变量无法被释放

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
- 什么是纯函数
``` 
纯函数是一个满足以下两个条件的函数：

给定相同的输入，返回输出结果必须相同
在作用域之外不能改变其他数据或提供给函数的数据。

```

- base64 前端如何转化
``` 
图片的下载始终都要向服务器发出请求，要是图片的下载不用向服务器发出请求，而可以随着 HTML 的下载同时下载到本地那就太好了，而 base64 正好能解决这个问题
```
- 静态方法和实例方法的区别
``` 
Array.isArray // 数组的静态方法
Array.prototype.push // 数组的实例方法

静态方法，不能在实例上使用。
实例方法，可以在实例上使用。

```





- 0.1+0.2!==0.3吗，为什么？
``` 
因为 JS 采用 IEEE 754双精度版本（64位）,二进制来存储东西不能精确表示0.1， 0.2这样的浮点数，计算时使用的是带有舍入误差的数，并不是所有的浮点数在计算机内部都存在舍入误差，比如0.5就没有舍入误差，具有舍入误差的运算结可能会符合我们的期望，原因可能是“负负得正”。

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



- class编译和构造函数编译有什么区别

- Array.sort()函数实现排序原理
``` 
sort方法接收哪些参数
sort方法如何降序排序


数组长度<=22时采用插入排序，大于22用快排。

sort 函数，可以接收一个函数，返回值是比较两个数的相对顺序的值

没有函数 是按照 UTF-16 排序的，对于字母数字 你可以利用 ASCII 进行记忆

[3, 15, 8, 29, 102, 22].sort();
// [102, 15, 22, 29, 3, 8]

正确用法：
[3, 15, 8, 29, 102, 22].sort((a,b) => {return a - b});

```

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

- 搜索请求中文如何处理输入框
```  
简单来说就是切换中文输入法时在打拼音时(此时input内还没有填入真正的内容)，会首先触发compositionstart，然后每打一个拼音字母，触发compositionupdate，最后将输入好的中文填入input中时触发compositionend。触发compositionstart时，文本框会填入 “虚拟文本”（待确认文本），同时触发input事件；在触发compositionend时，就是填入实际内容后（已确认文本）,所以这里如果不想触发input事件的话就得设置一个bool变量来控制。
为了解决中文输入法输入内容时还没将中文插入到输入框就验证的问题

我们希望中文输入完成以后才验证

```


- 如果js文件加载不成功会发生什么
- setTimeout底层如何实现的，setTimeout实现原理
``` 
setTimeout只能保证在指定的时间过后将任务(需要执行的函数)插入队列等候，并不保证这个任务在什么时候执行。
```

- document.getElementById()的实现思路；


- 有这样一个函数，如何让b 访问不到a
``` 
 function(){
  
  var a=undefined;
  
  function b(){
  
  }}
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
JS中的基本类型按值传递，对象类型按共享传递的(call by sharing，也叫按对象传递、按对象共享传递)。
```
- tostring和valueof有什么区别
``` 
valueof是返回最适合该对象类型的原始值，而tostring则是返回对象的字符串表示。

```


- 下面两个式子谁改变arr1
``` 
 let arr3=Array.prototype.push.apply(arr1,arr2)
 let arr4=Array.prototype.concat.apply(arr1,arr2)

```
         
- this指向
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
- 复合函数（pipe函数）
``` 
创建一个 pipe 函数，使其通过返回带有一个参数的函数来从左到右依次执行传入的函数

const square = v => v * v
const double = v => v * 2
const addOne = v => v + 1
const res = pipe(square, double, addOne)
res(3) // 19; addOne(double(square(3))) 

解答：
首先使用展开运算符 ... 让提供的所有参数转换成为一个数组，然后再实现返回的一元函数。在一元函数中通过使用 Array.prototype.reduce() 来运行传入的函数并存储计算结果便可获得最终的计算结果。


const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x) 


```
- 面向对象理解
- Memoization 是什么？
``` 
Memoization 是用来缓存函数调用的输出结果，以便减少后续再次调用时的运算，进而加快运算速度的一种优化技术。Memoization 在再次调用有相同输入的同一函数时将直接返回缓存的该函数的输出结果，但第一次的计算当然是必不可少的。
```
- 对JavaScript和Java两者的怎么看

- Javascript中callee和caller的作用？（caller(调用者)，callee(被调用者)）
```  
caller是返回一个对函数的引用，该函数调用了当前函数；
callee是返回正在被执行的function函数，也就是所指定的function对象的正文
```

----------------------------------------------暂时不处理-----------------------------------------------
- canvas优化绘制性能
- 给页面注入50万个li怎么做提升性能？
- fileReader用过吗？base64编码原理？
- stream和同步方式处理文件有什么区别
- canvas 的一个问题， 一个球从一个角飞到另一个角。 现在用鼠标画一条线。 只要是穿过这个球，球就停止。  说一下实现，不会实现就说思路。
- Canvas绘制波浪线。
- JS 执行过程中是如何保存上下文的（建议看看极客时间的《浏览器工作原理》）
- 说一下hashMap
  

