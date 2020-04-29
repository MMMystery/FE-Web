- 手写一个ES6的类
``` 
// ES5普通写法
function Animal() {
  this.name = 'name'
}

// ES6
class Animal2 {
  constructor () {
    this.name = 'name';
  }
}
```
- es6 class怎么用es5实现
``` 
1.ES5继承的实质是先创建了子类元素child的的实例对象，然后再把父类元素parent的原型对象中的属性赋值给子类元素child的实例对象里面，从而实现继承（Parent.apply(this)）.
2.ES6的继承机制完全不同，实质上是先创建父类的实例对象this（所以必须先调用父类的super()方法），然后再用子类的构造函数修改this。


var _createClass = (function() {

})()

ES5 实现 B 继承 A【编程】
为了表现，肯定是直接写寄生组合继承啦

```
- es5的继承 实现一下（原型继承）
``` 
组合继承（组合构造和原型方式实现继承）
function Super(){
  this.name='ss1'
}
 
Super.prototype.getName=function () {
  console.log('my name is ???')
}
 
function Child(){
  this.age=1;
  //继承属性
  Super.call(this)
}
//继承方法
Child.prototype=new Super();

```

- js实现继承的几种方式
```  

class继承

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

 实现Man继承People
function People() {
      this.type = 'prople'
    }

    People.prototype.eat = function () {
      console.log('吃东西啦');
    }

    function Man(name) {
      this.name = name;
      this.color = 'black';
    }

原型继承：
Man.prototype = new People();

call、apply、bind都可以实现继承
function Child(){
    Person.call(this,'李端','26');
};
var child = new Child();

构造继承：
function Man(name) {
      People.call(this);
}

组合继承：
function Man(name) {
  People.call(this);
}

Man.prototype = People.prototype;

寄生组合继承：
function Man(name) {
  People.call(this);
}

Man.prototype = Object.create(People.prototype, {
  constructor: {
    value: Man
  }
})

```

- 实现extend函数
- 原型链继承原理
``` 
function myExtend(C, P) {
    var F = function(){};
    F.prototype = P.prototype;
    C.prototype = new F();
    C.prototype.constructor = C;
    C.super = P.prototype;
}

```

- new 实现和new 的过程与Object.create的区别
``` 
(1) 创建一个新对象；
(2) 链接到原型（为这个新对象添加属性） ；
(3) 将构造函数的作用域赋给新对象（绑定 this，因此 this 就指向了这个新对象） ；
(4) 返回新对象。

// v2 : 还需要判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么。
  function objectFactory() {
      var obj = new Object(),
      // 因为 shift 会修改原数组，所以 arguments 会被去除第一个参数, 把第一个参数取出来
      Constructor = [].shift.call(arguments);
      // 建立继承关系(二者之间的关系)
      obj.__proto__ = Constructor.prototype;
      // 开始执行这个构造函数
      var res = Constructor.apply(obj, arguments);
      // 看一下构造函数的返回值，是对象还是一个基本数据类型?
      return typeof res === 'object' ? res : obj;
  }
```
- Object.create 的基本实现
``` 
_create = function (o) {
    let F = function () {}
    F.prototype = o
    return new F()
}

```


- 实现 instanceof 
```  
// 思路：判断右边变量的原型是否存在于左边变量的原型链上

function instanceof(left, right) {
    // 获得类型的原型
    let prototype = right.prototype
    // 获得对象的原型
    let left = left.__proto__
    // 判断对象的类型是否等于类型的原型
    while (true) {
    	if (left === null)
    		return false
    	if (prototype === left)
    		return true
    	left = left.__proto__
    }
}

```


- call、apply、bind 实现。

```  
fun.call(thisArg, param1, param2, ...)
fun.apply(thisArg, [param1,param2,...])
fun.bind(thisArg, param1, param2, ...)

call
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {  // 检查调用call的对象是否为函数，不是函数就跑出
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this //给context添加一个方法 指向this
  let arg = [...arguments].slice(1) // arguments是类数组，所以[...xxx]把类数组变成数组，去除第一位，剩余的参数然后转为数组
  let result = context.fn(...arg) //解构数组，执行fn
  delete context.fn //删除方法
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
  if (arguments[1]) { // 判断第二个参数是否存在，转换为数组
    result = context.fn(...arguments[1]) 解构数组，执行fn
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
  let args = [...arguments].slice(1)
  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) { 
      return new _this(...args, ...arguments)  // 若是用new操作符调用,则直接用new 调用原函数,并用扩展运算符传递参数
    } else {
      return _this.apply(context, args.concat(...arguments))
    }
  }
}

```

- 实现深拷贝
``` 
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
const throttle = (fn, delay) => {
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

- 使用 reduce 方法实现 forEach、map、filter
``` 
// forEach
 function forEachUseReduce(array, handler) {
   array.reduce(function (pre, item, index) {
     handler(item, index);
   });
 }
 
 // map
 function mapUseReduce(array, handler) {
   let result = [];

   array.reduce(function (pre, item, index) {
     let mapItem = handler(item, index);
     result.push(mapItem);
   });

   return result;
 }
 
 // filter
 function filterUseReduce(array, handler) {
   let result = [];

   array.reduce(function (pre, item, index) {
     if (handler(item, index)) {
       result.push(item);
     }
   });

   return result;
 }

```
- Symbol内部实现原理，几道题目拆解实现Symbol
- getOwnPropertyNames 实现
``` 
// 不能拿到不可枚举的属性

if (typeof Object.getOwnPropertyNames !== 'function') {
  Object.getOwnPropertyNames = function(o) {
    if (o !== Object(o)) {
      throw TypeError('Object.getOwnPropertyNames called on non-object');
    }
    var props = [],
      p;
    for (p in o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) {
        props.push(p);
      }
    }
    return props;
  };
}

```


- 能不能改写一个数组的push方法，不是重写，也不是新写，保持原来的逻辑之外，再添加一个consle.log（arguements）在控制台打印出来，比如pushA。在工作台把A打印出来，push什么就打印什么。原来的逻辑不能改？

- 实现数组的flat函数（数组拍平）
``` 

function flatter(arr){
 let newArr = [];
  arr.forEach((item)=>{
    newArr.concat(Array.isArray(item)?flatter(item):item)
  )
 return newArr;
}

Function flatter(arr){
 Return arr.reduce((acc,cur,index,array)=>{
	Return acc.concat(Array.isArray(cur)?  flatter(acc) : cur
}, [])
}


```
- 实现在原型链上重写 flat 函数 （链接：https://juejin.im/post/5dff18a4e51d455804256d31#heading-15）
``` 
Array.prototype.myFlat = function(num = 3) {
  if (Array.isArray(this)) {
    let arr = [];
    if (!Number(num) || Number(num) < 0) {
      return this;
    }
    this.forEach(item => {
      if(Array.isArray(item)){
        let count = num
        arr = arr.concat(item.myFlat(--count))
      } else {
        arr.push(item)
      }  
    });
    return arr;
  } else {
    throw tihs + ".flat is not a function";
  }
};
const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
arr.myFlat(arr)

```

- 实现一个JS函数柯里化，函数柯里化使用场景
``` 
function curry(fn, ...args) {
      if (fn.length <= args.length) {
        return fn(...args);
      } else {
        return (...args2) => curry(fn, ...args, ...args2);
      }
    }
```


- 写一个curry函数，其实就是add(1,2,3) 实现add(1)(2)(3)? 再升级为：add(1)(2,3)？
``` 

实现：add(1,2,3)
function add (...args) {
	return args.reduce((a, b) => a + b)
}

简单珂里化

function add(x){
  return function(y){
      return function(z){
         return x + y +z;
       }
  }
}

实现真正的珂里化
function curry(fn,...args){
    if(fn.length <= args.length){
        return fn(...args)
    }
    return function(...args1){
        return curry(fn,...args,...args1)
    }
}
var fn = curry(function(a, b, c) {
    console.log(fn);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]





function curry (fn) {
	let args = []
	return function _c (...newArgs) {
		if (newArgs.length) {
			args = [
				...args,
				...newArgs
			]
			return _c
		} else {
			return fn.apply(this, args)
		}
	}
}




// 实现一个add方法，使计算结果能够满足如下预期：
add(1)(2)(3) = 6;
add(1, 2, 3)(4) = 10;

完整实现
function add(){
 let arr = [...arguments];

     let fn = function(){
        // 把参数都放在一个相当于全局变量的 args 里面　
        arr.push(...arguments)
        return fn;
     }

    fn.toString = function(){
      return arr.reduce(function(preItem,curItem){return preItem+curItem})
    }
    return fn;
}
add(1)(2)(3)// 6



```
- 实现compose函数（实现函数compose，compose接受多个函数作为参数，并返回一个新的函数，新的函数会从右向左依次执行原函数， 并且上一次结果的返回值将会作为下一个函数的参数。）
``` 
function compose(...fns) {
  return (...args) => fns.reduceRight((acc, cur) => cur(acc), ...args);
}

function a(msg) {
  return msg + "a";
}
function b(msg) {
  return msg + "b";
}
function c(msg) {
  return msg + "c";
}

const f = compose(
  a,
  b,
  c
);
console.log(f("hello"));

```

- Array.isArray实现
``` 

Array.isArray = function(obj){
    return Object.prototype.toString.call(obj) == "[object Array]"
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

连接：https://www.jianshu.com/p/9cfe30d1a967

```

- 使用setTimeout实现setInterval

``` 
// 可避免setInterval因执行时间导致的间隔执行时间不一致
setTimeout (function () {
  // do something
  setTimeout (arguments.callee, 500)
}, 500)



(() => {
  const list = new Set();
  function myInterval(fn, ms) {
    const ref = {};
    const exec = () => {
      return setTimeout(() => {
        fn.apply(null);
        const timer = exec();
        ref.current = timer;
      }, ms);
    };
    ref.current = exec();
    list.add(ref);
    return ref;
  }
 
  function myClearInterval(ref) {
    clearTimeout(ref.current);
    list.delete(ref);
  }
  window.myInterval = myInterval;
  window.myClearInterval = myClearInterval;
})()

```
- 原生js实现filter函数。
``` 
Array.prototype.filter = function(fn,context){
    if(typeof fn != 'function'){
        throw new TypeError(`${fn} is not a function`)
    }
    let arr = this;
    let reuslt = []
    for(var i = 0;i < arr.length; i++){
        let temp= fn.call(context,arr[i],i,arr);
        if(temp){
            result.push(arr[i]);
        }
    }
    return result
}
```

- 实现lodash.isEqual
``` 
function isObject(obj){
    return typeof ojb === 'object' && obj !== null
}
// 全相等
function isEqual(obj1,obj2){
    if(!isObject(obj1) || !isObject(obj2)) {
        // 值类型
        return obj1===obj2
    }
    if(obj1===obj2){
        return true
    }
    // 两个都是对象或数组，而且不相等
    const obj1key = Object.keys(obj1)
    const obj2key = Object.keys(obj2)
    
    if(obj1key.length !== obj2key.length){
        return false
    }
    for(let key in obj1){
        const res = isEqual(obj1[key],obj2[key])
        if(!res){
            return false
        }
    }
    return true
}

```
- 手写reduce或者filter的polyfill
- 手写parseInt的实现
- 自己实现一个event类
- 手写indexOf的实现
- 手写 Proxy / Object.defineProperty
- 写一个函数，可以控制最大并发数
- 设计一个栈，不使用数组
- js实现栈、队列、链表、二叉树
```  
栈：
class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    this.stack.pop()
  }
  peek() {
    return this.stack[this.getCount() - 1]
  }
  getCount() {
    return this.stack.length
  }
  isEmpty() {
    return this.getCount() === 0
  }
}
队列：
class Queue {
  constructor() {
    this.queue = []
  }
  enQueue(item) {
    this.queue.push(item)
  }
  deQueue() {
    return this.queue.shift()
  }
  getHeader() {
    return this.queue[0]
  }
  getLength() {
    return this.queue.length
  }
  isEmpty() {
    return this.getLength() === 0
  }
}

单向链表：
class Node {
  constructor(v, next) {
    this.value = v
    this.next = next
  }
}
class LinkList {
  constructor() {
    // 链表长度
    this.size = 0
    // 虚拟头部
    this.dummyNode = new Node(null, null)
  }
  find(header, index, currentIndex) {
    if (index === currentIndex) return header
    return this.find(header.next, index, currentIndex + 1)
  }
  addNode(v, index) {
    this.checkIndex(index)
    // 当往链表末尾插入时，prev.next 为空
    // 其他情况时，因为要插入节点，所以插入的节点
    // 的 next 应该是 prev.next
    // 然后设置 prev.next 为插入的节点
    let prev = this.find(this.dummyNode, index, 0)
    prev.next = new Node(v, prev.next)
    this.size++
    return prev.next
  }
  insertNode(v, index) {
    return this.addNode(v, index)
  }
  addToFirst(v) {
    return this.addNode(v, 0)
  }
  addToLast(v) {
    return this.addNode(v, this.size)
  }
  removeNode(index, isLast) {
    this.checkIndex(index)
    index = isLast ? index - 1 : index
    let prev = this.find(this.dummyNode, index, 0)
    let node = prev.next
    prev.next = node.next
    node.next = null
    this.size--
    return node
  }
  removeFirstNode() {
    return this.removeNode(0)
  }
  removeLastNode() {
    return this.removeNode(this.size, true)
  }
  checkIndex(index) {
    if (index < 0 || index > this.size) throw Error('Index error')
  }
  getNode(index) {
    this.checkIndex(index)
    if (this.isEmpty()) return
    return this.find(this.dummyNode, index, 0).next
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
}

二叉树：
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }
  addNode(v) {
    this.root = this._addChild(this.root, v)
  }
  // 添加节点时，需要比较添加的节点值和当前
  // 节点值的大小
  _addChild(node, v) {
    if (!node) {
      this.size++
      return new Node(v)
    }
    if (node.value > v) {
      node.left = this._addChild(node.left, v)
    } else if (node.value < v) {
      node.right = this._addChild(node.right, v)
    }
    return node
  }
}
```
- 实现 memorize once 高阶函数
- sum(2, 3)实现sum(2)(3)的效果
- 实现Object.assign()函数
- async/await 实现
- reduce 实现
- Iterator遍历器实现

- 数据绑定最基本的实现
``` 
题目：
// 实现一个方法，可以给 obj 所有的属性添加动态绑定事件，当属性值发生变化时会触发事件
let obj = {
  key_1: 1,
  key_2: 2
}
function func(key) {
  console.log(key + ' 的值发生改变：' + this[key]);
}
bindData(obj, func);
obj.key_1 = 2; // 此时自动输出 "key_1 的值发生改变：2"
obj.key_2 = 1; // 此时自动输出 "key_2 的值发生改变：1"

答案：
function bindData(obj, fn) {
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      set(newVal) {
        if (this.value !== newVal) {
          this.value = newVal;
          fn.call(obj, key);
        }
      },
      get() {
        return this.value;
      }
    })
  }
}



```
- 实现一个双向数据绑定

```
// defineProperty方式
let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')
// 数据劫持，这个是关键
Object.defineProperty(obj, 'text', {
  get: function () {
      return obj
  },
  set: function (newValue) {
    console.log('数据更新了')
    input.value = newVal
    span.innerHTML = newVal
  }
})
// 输入监听
input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})


// Proxy方式
    var obj = {
        name: ''
    }
    var proxyObj = new Proxy(obj, {
    get: function(target, key, receiver) {
      return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver) {
      if (key === 'name') {
        document.getElementById('name').value = value
        document.getElementById('pName').innerHTML = value
      }
      return Reflect.set(target, key, value, receiver)
    }
    })
    
    document.getElementById('name').addEventListener('input', function(e){
    proxyObj.name = e.target.value
})

```

- JSON转换为URL
``` 
 // data={name : 'zhangsan', age : 'lisi'}
  function parseParams(data){
    var key, i, value, tempArr = [];
    for (i in data) {
      key = encodeURIComponent(i);
      value = encodeURIComponent(data[i]);
      tempArr.push(key + '=' + value);
    }
    return tempArr.join('&');
  }


```
- 手写代码实现一下Array.prototype.trim这个函数，并写个测试用例跑给我看下
``` 
String.prototype.trim = function () {
　　    return this.replace(/(^\s*)|(\s*$)/g, "");
　　}

```
- 写一个方法遍历所有文档树所有节点(考察递归)；
``` 
function traversal(node){
    if(node&&node.nodeType === 1){
    console.log(node);
    }
    let tempNode;
    for(let i=0; i<node.childNodes; i++){
        tempNode = node.childNodes[i];
        if(tempNode.nodeType === 1){
            traversal(tempNode)
         }
    }
}

```
- 实现一个print函数，需要具备以下功能（其实就是实现一个简单的模板引擎）
``` 
let str = 'My name is ${name}, I am from ${city}',
info = {
   name: 'AaDerBrane',
   city: 'GungZhou'
};
console.log(printf(str, info));
// My name is AaDerBrane, I am from GuangZhou
function printf(str, info) {}

答案：
function render(template, data) {
  return template.replace(new RegExp('{{(.*?)}}', 'g'), (match, key) => data[key.trim()]);
}

```
- 手写jsonp实现
``` 
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement("script");
  script.src = url;
  script.async = true;
  script.type = "text/javascript";
  window[jsonpCallback] = function(data) {
    success && success(data);
  };
  document.body.appendChild(script);
}
jsonp(
  "http://xxx",
  "callback",
  function(value) {
    console.log(value);
  }
);

```
- 手写AJAX实现（要求带cookie）
  
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

readyState五中状态的含义
如何发送同步ajax

```

- 实现拖拽

``` 
todo

```
- 在线编程，getUrlParams(url,key); 就是很简单的获取url的某个参数的问题，但要考虑边界情况，多个返回值等等

- js实现css的:hover效果

``` 
$("el").onmouseover = function() {
  //
}
$("el").onmouseout = function() {
  //
}

```



- 基于promise实现jsonp




- 实现一个简单的虚拟 DOM 渲染
``` 
let domNode = {
  tagName: 'ul',
  props: { class: 'list' },
  children: [{
    tagName: 'li',
    children: ['item1']
  }, {
    tagName: 'li',
    children: ['item1']
  }]
};

// 构建一个 render 函数，将 domNode 对象渲染为 以下 dom
<ul class="list">
    <li>item1</li>
    <li>item2</li>
</ul>

答案：
function render(domNode) {
  if (!domNode) return document.createDocumentFragment();
  let $el
  if (typeof domNode === 'object') {
    $el = document.createElement(domNode.tagName);

    if (domNode.hasOwnProperty('props')) {
      for (let key in domNode.props) {
        $el.setAttribute(key, domNode.props[key]);
      }
    }

    if (domNode.hasOwnProperty('children')) {
      domNode.children.forEach(val => {
        const $childEl = render(val);
        $el.appendChild($childEl);
      })
    }
  } else {
    $el = document.createTextNode(domNode);
  }

  return $el;
}





```

- 手写发布订阅的EventEmitter类、实现一个Event Bus。
``` 
class EventEmitter {
    constructor(){
        this.events = {}
    }
    on(name,callback){
        if(!this.events[name]){
            this.events[name] = [callback];
        }else{
            this.events[name].push(callback)
        }
    }
    emit(name,...arg){
        if(this.events[name]){
            this.events[name].forEach(fn => {
                fn.call(this,...arg)
            })
        }
    }
    off(name,cb){
        if(this.events[name]){
            this.events[name] = this.events[name].filter(fn => {
                return fn != cb
            })
        }
    }
    once(name,fn){
        var onlyOnce = () => {
            fn.apply(this,arguments);
            this.off(name,onlyOnce)
        }
        this.on(name,onlyOnce);
        return this;
    }
}

```

- 手写实现观察者模式

- 手写代码，实现原型式继承（看红宝书）
- 手写代码，实现借用构造函数（看红宝书）
- 编写一个函数将dom列表子元素顺序反转
``` 
let frag = document.creatDocumentFragment();
for(let i=target.children.length - 1; i--){
    frag.appendChild(target.children[i])
}
target.appendChild(frag)

```
- 手写once函数，传入函数参数只执行一次（闭包）
- 手写代码，不产生新数组，删除数组里的重复元素（排序， splice() ）
- 手写dom的深度遍历
- 实现一个类，可以on,emit,off,once，注册、调用、取消、注册仅能使用一次的事件
- 最常见是在Array、String prototype 上写一个函数。比如 'abcd'.f() => 'd-c-b-a'
``` 
String.prototype.f = function(){
    let str;
    for(let i=this.length; i>0; i--){
        str + = this[i]
    }
    return str.join('-');
}

```

- 手写一个深拷贝函数，最好能处理循环引用和Date、Reg的
- 怎样以对象为构造函数创建一个对象
- Thunk函数实现（结合Generator实现异步）
- 实现一个方法遍历输出Object所有属性
- js实现before，after这样的钩子函数
- 手写一个基于hash路由函数
- 实现一个repeat函数，主要是闭包的应用

3. Thunk函数实现（结合Generator实现异步）
4. async实现原理（spawn函数）
- 手写实现inherit函数
- 手写实现以下事件委托函数 function delegate(parent, selector, handle) {}
``` 
var btn = document.getElementsByTagName('ul')[0]
btn.onclick = function(e){
var e = e ||window.event;
console.log(e.target.innerHTML);

```


- 实现一个sleep函数
``` 
function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time*1000);
    });
}

```
- 将一个同步callback包装成promise形式
``` 
function promisify(fn,context){
  return (...args) => {
    return new Promise((resolve,reject) => {
        fn.apply(context,[...args,(err,res) => {
            return err ? reject(err) : resolve(res)
        }])
    })
  }
}
```
- 写一个函数，可以控制最大并发数

- 手撕代码--前端路由实现（JS原生）
- 手撕代码--图片懒加载实现（JS原生）
- cookie封装
- 实现一个循环监听
- 实现 memorize once 高阶函数
- 如果我需要设计一个拖拽的dialog，怎么实现？手写代码


- 手写闭包里怎么用setTimeout
- 实现 (5).add(3).minus(2) 功能
``` 
Number.prototype.add = function(n) {
  return this.valueOf() + n;
};
Number.prototype.minus = function(n) {
  return this.valueOf() - n;
};
console.log((5).add(3).minus(2))//6
```

- 36进制加法，add(string a,string b)
- 实现一个函数, 奇数次输出1, 偶数次输出2, 不能使用全局变量
- when('#id).then(success, faild), 结点存在调用success, 不存在调用faild, 实现这样一个when方法
- 实现一个函数, 能够返回1000-2000的随机值
- 写一个尾递归
- 实现一个EventBus，这个好像是头条必面的题
- 手动实现Array.reduce()
- 大数相加和大数相减，大数相乘。
- 求一个对象的层级数（我写完后，又问如果不用递归，只用循环实现呢）
- 纯js写一个动画，5s由快到慢，速度自定义


- new Queue().task(1000,()=>console.log(1)).task(2000,()=>console.log(2)).task(3000,()=>console.log(3)).start()实现该函数，start()后等1秒输出1，再等2秒2，再等3秒3.
- ab-cd-ef=》ab-Cd-Ef（来个简单的题（你菜给你来个简单的嘤嘤嘤））
- [1,2,3,4,6,7,9,13,15]=>['1->4',6->7,'9','13','15']实现一下

- 手撕代码 实现一个自增类 改类有一个id属性，每次实例化时，id都加一
- 实现一个calendar组件
- 写一个轮播图，用原生js
- 写代码 实现remove函数，删除object的属性
- promise的catch怎么实现？

- 手撕js实现对象变query
- 手写一个工厂类方法，并在它的基础上给出装饰者模式
- 实现一个函数，这个函数有两个参数，一个参数是fn 一个是count 要求，参数fn是一个promise函数, 如果执行成功直接返回，如果失败就重试count次数，到达count之后就返回失败
- 手写实现求两个集合A, B 的差集，<A-B>和<B-A>都要给出
- 手写函数节流（不使用setTimeOut()和setInterval()）
``` 
function throttle(wait, fn) {
    var prev_time = null;
    return function (){
            var now_time = new Date().getTime();
            if(!prev_time || now_time - prev_time>= wait) {
                prev_time = now_time;
                fn().apply(null, arguments);
            }
    }
}

```
- 实现一个函数，第i次执行输出i
```

var getNum = (function () {
    let i = 0;
    return function() {
        ++i
        console.log(i);
    }
})();

```
- 实现以下函数
``` 

function machine() {
 
 }
machine('ygy').execute()
// start ygy
machine('ygy').do('eat').execute();
// start ygy
// ygy eat
machine('ygy').wait(5).do('eat').execute();
// start ygy
// wait 5s（这里等待了5s）
// ygy eat
machine('ygy').waitFirst(5).do('eat').execute();
// wait 5s
// start ygy
// ygy eat

```

- 手写实现
``` 
function ps(n){}
ps(1) //["()"]
ps(2) //["(())","()()"]
```

- 手写实现
``` 
var a = "123";
a.duplicate() // '123123"

答案：
String.prototype.duplicate = function() {
    return this+this;   
}
```
- 假设现在要实现一个点击发送短信验证码的功能，如何实现它的倒计时？
- 没有后台服务器和不能Date返回的时间有误的情况下如何获得当前的本地时间？


- 手写一个继承
``` 
父类Person, 拥有属性lastname, 方法hello
子类Student, 拥有属性grade, 方法goSchool
Student继承与Person
实现new 一个Student 调用hello 输出lastname 调用goSchool输出grade

```

- 让spacify（）能接受多个参数，例如spacify（‘hello’，‘world’，‘d’）；
``` 
使用arguments，它是一个类数组对象，其中包含了传递给函数的所有参数。

function containsAll(haystack) {
  for (var i = 1; i < arguments.length; i++) {
    var needle = arguments[i];
    if (haystack.indexOf(needle) === -1) {
      return false;
    }
  }
  return true;
}

```
- 实现log函数
``` 
function log(...args){
    let str = args.join(" ");
    return "(app)"+str;
}
```
- 实现lazyMan

```
function _LazyMan(name){
    this.nama = name;
    this.queue = [];
    this.queue.push(() => {
        console.log("Hi! This is " + name + "!");
        this.next();
    })
    setTimeout(()=>{
        this.next()
    },0)
}
  
_LazyMan.prototype.eat = function(name){
    this.queue.push(() =>{
        console.log("Eat " + name + "~");
        this.next()
    })
    return this;
}

_LazyMan.prototype.next = function(){
    var fn = this.queue.shift();
    fn && fn();
}

_LazyMan.prototype.sleep = function(time){
    this.queue.push(() =>{
        setTimeout(() => {
            console.log("Wake up after " + time + "s!");
            this.next()
        },time * 1000)
    })
    return this;
}

_LazyMan.prototype.sleepFirst = function(time){
    this.queue.unshift(() =>{
        setTimeout(() => {
            console.log("Wake up after " + time + "s!");
            this.next()
        },time * 1000)
    })
    return this;
}

function LazyMan(name){
    return new _LazyMan(name)
}

```
- 写一个cookie并定义过期时间为一天


- 使用ES6的Reflect来实现一个观察者模式
``` 
    // 观察者设计模式
    const queuedObservers = new Set();

    const observe = fn => queuedObservers.add(fn);
    const observable = obj => new Proxy(obj, {set});

    function set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      queuedObservers.forEach(observer => observer());
      return result;
    }


    // test
    const person = observable({
      name: '张三',
      age: 20
    });

    function print() {
      console.log(`${person.name}, ${person.age}`)
    }

    observe(print);
    person.name = '李四';
    // 输出
    // 李四, 20
```
- 给定一棵树，请你输出所有从根节点到叶子节点的路径组成的数字之和
``` 
let tree = {
      val: 1,
      left: {
          val: 2,
          left: {
              val: 4,
              left: null,
              right: null
          },
          right: {
              val: 5,
              left: null,
              right: null
          }
      },
      right: {
          val: 3,
          left: null,
          right: null
      }
  }

// 例如以上的树，总共有从根节点到叶子节点的路径3条，分别为：1->2->4,1->2->5,1->3
// 则计算方法为：124+125+13=262


```

- 获取URL上的值
- 代码实现题Url参数转换为对象
``` 
题目：
let urlStr = 'http://www.inode.club?name=koala&study=js&study=node';
转换结果如下:
{ name: 'koala', study: [ 'js', 'node' ] }

答案：
// 参数转成对象
function queryString(request){
    let params = request.split('?')[1];
    let param = params.split('&');
    let obj = {};
    for (let i = 0;i<param.length;i++){
        let paramsA = param[i].split('=');
        let key = paramsA[0];
        let value = paramsA[1];
        if(obj[key]){
            obj[key] = Array.isArray(obj[key])?obj[key]:[obj[key]];
            obj[key].push(value);
        }else{
            obj[key] = value;
        }
    }
    return obj;
}
console.log(queryString(urlStr));

```
- 5个fetch请求，请求完成后要求立即执行，但最终的输出顺序要按照要求输出ABCDE



