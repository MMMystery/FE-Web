 - ES6更新的内容主要分为以下几点
```
表达式：声明、解构赋值
内置对象：字符串扩展、数值扩展、对象扩展、数组扩展、函数扩展、正则扩展、Symbol、Set、Map、Proxy、Reflect
语句与运算：Class、Module、Iterator、Decorator(装饰器)
异步编程：Promise、Generator、Async
```

0. class
``` 
class 只是语法糖，本质还是函数

class Person {}
Person instanceof Function // true

```

1. let/const 与var
```    

函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
var 存在提升，我们能在声明之前使用。let、const 在我们声明（初始化）之前是不能访问它们的（这个行为被称之为暂时性死区）
var 在全局作用域下声明变量会导致变量挂载在 window上，其他两者不会

var存在变量提升 
const定义常量，数组元素可以push添加，对象里的属性也可以修改（因为对象是引用类型的，P中保存的仅是对象的指针，这就意味着，const仅保证指针不发生改变，修改对象的属性不会改变对象的指针，所以是被允许的。）。
let是块级作用域

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


箭头函数的this指向和普通函数的区别？箭头函数有作用域吗？可以new吗？可以放argument吗？

箭头函数没有自己的this，箭头函数中的this是在定义函数的时候绑定，它会捕获其所在的上下文的this作为自己的this(this 只取决于他外面的第一个不是箭头函数的函数的 this)
并且 this一旦绑定了上下文，就不会被任何代码改变,而不像普通函数那样是在执行函数的时候绑定。

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
Object.is() // 判断两个对象相等
Object.assign()
Object.getOwnPropertyDescriptors() 
__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf() 
Object.keys()，Object.values()，Object.entries()

这些方法分别有什么用？

```


--------------------------------------------------

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

- Set、Map数据结构和weakset、WeakMap分别是什么

```
Set
成员唯一、无序且不重复
[value, value]，键值与键名是一致的（或者说只有键值，没有键名）
可以遍历，方法有：add、delete、has

WeakSet
成员都是对象
成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏
不能遍历，方法有add、delete、has

Map
本质上是键值对的集合，类似集合,键的数据类型可以是基本类型数据也可以是对象，而值也可以是任意类型数据。
可以遍历，方法很多可以跟各种数据格式转换

WeakMap
只接受对象作为键名（null除外），不接受其他类型的值作为键名
键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
不能遍历，方法有get、set、has、delete


问：Set去重的原理？

```
- Proxy
``` 
Proxy 是 ES6 中新增的功能，可以用来自定义对象中的操作

```
- Proxy（代理）对象能拦截什么
```  
let p = new Proxy(target, habdler);
target：用 Proxy 包装的目标对象（可以是数组对象，函数，或者另一个代理）；
handler：一个对象，拦截过滤代理操作的函数。
     

```
- Reflect（反射）（其实就是object的工具类来用）
``` 
Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。
与大多数全局对象不同，Reflect不是一个构造函数。你不能将其与一个new运算符一起使用，或者将Reflect对象作为一个函数来调用。Reflect的所有属性和方法都是静态的（就像Math对象）。

Reflect对象的方法与Proxy对象的方法相同。

区别：
Proxy的函数负责的是：拦截并定义拦截时具体的操作
Reflect的静态函数负责的是：最终执行对象的操作
var obj = new Proxy({}, {
    get: (target, key, receiver)=>{
        console.log('这里可以记录访问日志。');
        console.log('如果要设置私有属性，那么这里直接抛出一个错误不让访问。');
        if(key !== "value") {
            console.log('这里可以预警和拦截');
        }
    return Reflect.get(target, key, receiver);//这里也可以直接操作target[key]
},
```


- ArrayBuffer
```
ArrayBuffer是一(大)块内存，但不能直接访问ArrayBuffer里面的字节。要访问ArrayBuffer，需要用到 Typed Array。

（1）ArrayBuffer对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。

（2）TypedArray视图：共包括9种类型的视图，比如Uint8Array（无符号8位整数）数组视图, Int16Array（16位整数）数组视图, Float32Array（32位浮点数）数组视图等等。

（3）DataView视图：可以自定义复合格式的视图，比如第一个字节是Uint8（无符号8位整数）、第二、三个字节是Int16（16位整数）、第四个字节开始是Float32（32位浮点数）等等，此外还可以自定义字节序。

简单说，ArrayBuffer对象代表原始的二进制数据，TypedArray视图用来读写简单类型的二进制数据，DataView视图用来读写复杂类型的二进制数据。

```

- Iterator 和 for...of 循环
``` 
遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作
只要是一个对象部署了Symbol.interator接口，就可以用for...of遍历该对象，同时也可以调用该接口的Symbol.interator方法调用next()方法对对象进行遍历，不同的是for..of是对该对象的值的输出，而next()返回的是对象。

原生具备 Iterator 接口的数据结构如下：

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }

```

- Iterator（迭代器，遍历器）、Generator（生成器）的用法？
``` 
迭代器是一个对象，它定义一个序列，并在终止时可能返回一个返回值。 更具体地说，迭代器是通过使用 next() 方法实现 Iterator protocol 的任何一个对象，该方法返回具有两个属性的对象： value，这是序列中的 next 值；和 done
一、Iterator（迭代器），yield表达式在generator中是作为一个暂停标志，当碰到yield时，函数暂停执行，等到下一次next()执行时
可迭代对象具有 Symbol.iterator 属性
在ES6中有3种类型的集合对象：数组、Map集合与Set集合，为了更好地访问对象中的内容，这3种对象都内建了以下三种迭代器

entries() 返回一个迭代器，其值为多个键值对
values() 返回一个迭代器，其值为集合的值
keys() 返回一个迭代器，其值为集合中的所有键名

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


二、Generator原理（生成器）
生成器是一种返回迭代器的函数。 通过 function 关键字后面 加 * 来定义，使用 yield 关键字返回迭代器
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

- generator 原理
``` 
Generator 是 ES6中新增的语法，和 Promise 一样，都可以用来异步编程

generator:
yield: 暂停代码
next(): 继续执行代码                                            
   
yield怎么控制顺序 

```


- Decorator(装饰器), 实现原理
``` 
许多面向对象的语言都有修饰器（Decorator）函数，用来修改类的行为。修饰器不仅可以修饰类，还可以修饰类的属性。
@decorator
class A {};

// 等同于
class A {};
A = decorator(A) || A;
修饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数。
如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行。

修饰器只能用于类和类的方法，不能用于修饰函数，因为存在函数提升。
如果一定要修饰函数，可以采用高阶函数的形式直接执行。
function decoratorFn(fn) {
    return function() {
        const res = fn.apply(this, arguments);
        return res;
    }
}

function doSomething() {};
const doSomething2 = decoratorFn(doSomething);

core-decorators.js是一个第三方模块，提供了几个常见的修饰器，通过它可以更好地理解修饰器。
（1）@autobind 修饰器使得方法中的this对象，绑定原始对象。
（2）@readonly 修饰器使得属性或方法不可写。
（3）@override 修饰器检查子类的方法，是否正确覆盖了父类的同名方法，如果不正确会报错。
（4）@deprecate 或 @deprecated 修饰器在控制台显示一条警告，表示该方法将废除。
（5）@suppressWarnings 修饰器抑制deprecated修饰器导致的console.warn()调用。但是，异步代码发出的调用除外。


装饰器——Decorator函数，就是简单的将一个函数包装成另一个函数

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




- promise（promise A+规范）resolve，reject，then，all，race了解过吗？

``` 
Promise 的三种状态：

pending：等待任务完成；
resolved（或fulfilled）：任务完成并且没有任何问题；
rejected：任务完成，但是出现问题。

Promise的静态方法：

Promise.resolve 返回一个fulfilled状态的promise对象  Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
Promise.reject 返回一个rejected状态的promise对象
Promise.all 接收一个promise对象数组为参数，只有全部为resolve才会调用 通常会用来处理 多个并行异步操作
Promise.race 接收一个promise对象数组为参数，只要有一个promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。
```
- promise原理

- 实现promise
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

基础版本
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    function MyPromise(executor) {
      this.state = PENDING;
      this.value = null;
      this.reason = null;

      const resolve = (value) => {
        if (this.state === PENDING) {
          this.state = FULFILLED;
          this.value = value;
        }
      }

      const reject = (reason) => {
        if (this.state === PENDING) {
          this.state = REJECTED;
          this.reason = reason;
        }
      }

      try {
        executor(resolve, reject);
      } catch (reason) {
        reject(reason);
      }
    }

```

- 实现promise.all (实现promise.all的polyfill)
``` 
Promise.all = function(arr){
    if(!Array.isArray(arr)){
        throw new TypeError(`argument must be a array`)
    }
    return new Promise((resolve,reject) => {
        let resolveNum = 0;
        let resolveResult = [];
        for(let i = 0; i < arr.length; i++){
           Promise.resolve(
                arr[i].then((data) => {
                    resolveNum++;
                    resolveResult.push(data)
                    if(resolveNum == arr.length){ // 如果都执行完了，把resolveResult返回
                        return resolve(resolveResult)
                    }
                }，(e) => {
                    return reject(e)
                })
        })
    })
    
}
```
- 实现promise.race // Promise.race方法和Promise.all方法差不多，只是Promise.all需要等待所有的请求都完成，而Promise.race只要有一个请求完成就可以。

``` 
Promise.race = function(arr) {
      if(!Array.isArray(arr)){
          throw new TypeError(`argument must be a array`)
      }
    return new Promise(function(resolve, reject) {
      for (let i = 0; i < arr.length; i++) {
         Promise.resolve(
            arr[i].then(data => {
                return resolve(data);
            }, (e) => {
                return reject(e);
            });
         }
    })
  }

```

- 实现promise.retry  （写一个函数，每隔1000ms发送一次请求，如果promise未正确返回则继续发送，最多5次。）
``` 
Promise.retry = (fn, times, delay) => {
  return new Promise((resolve, reject)=>{
      var error;
      var attempt = () => {
          if (times == 0) {
              reject(error);
          } else {
              fn().then(resolve).catch((e) => {
                      times--;
                      error = e;
                      setTimeout(()=>
                        {
                           attempt()  
                        }, delay);
                  });
          }
      };
      attempt();
  });
};


Promise.retry = function(fn, times, delay){
    return new Promise((resolve,reject)=>{
    var attempt = () => {
        fn().then(resolve).catch((e)=>V {
            if(times<=0){
                reject();
            }else{
                times--;
                setTimeout(()=>{
                    attempt();
                },delay)
            }

        })
     })
    }
    attempt();
}

```

- 实现 promise.all 并发限制，每次只能并发5个请求
``` 
这是自己写的
Promise.all = function(arr){
    let index = 0;
      let newArr = arr.slice(index,index+4); // 利用slice
      return new Promise((resolve,reject) => {
         let count = 0;
          let resultArr =[]
         for(let i=0; i<newArr.length; i++ ){
             Promise.resolve(
                arr[i].then((res)=>{
                   count++;
                    resultArr.push(res)
                   if(count==newArr.length){
                      index = (index+1)*5;
                     return resolve(resultArr)
                 }
             })
             ,(e)=>{return reject(e)})
         }

    })
}
```

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

- promise封装ajax
``` 
var  myNewAjax=function(url){
  return new Promise(function(resolve,reject){
      var xhr = new XMLHttpRequest();
      xhr.open('get',url);
      xhr.send(data);
      xhr.onreadystatechange=function(){
           if(xhr.readyState==4&&xhr.status==200){
                var json=JSON.parse(xhr.responseText);
                resolve(json)
           }else if(xhr.readyState==4&&xhr.status!=200){
                reject('error');
           }
      }
  })

```

- Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
```   
promise构造函数（new Promise）是同步执行的，then方法是异步执行的

```

- 用promise 实现 genetator

- promise中第二个参数的reject中执行的方法和promise.catch()都是失败执行的，分别这么写有什么区别，什么情况下会两个都同时用到？

``` 
reject 是用来抛出异常的，catch 才是用来处理异常的

```                                                                                                                 

- Promise.then里抛出的错误能否被try...catch捕获，为什么
``` 
promise自己有catch去捕获，外部try..catch无法捕获，因为try catch只能处理同步的错误，对异步错误没有办法捕获

let promise = new Promise((resolve, reject) => {
  throw new Error()
  reject()
})
promise.catch(err => {
  console.log(err)
})


```
- 写一个函数，每个promise依赖于上一个promise返回的结果去请求，直到某个失败为止。
- 现在有100个请求，怎么实现 Promise 串行化 。就是形如 [fn1, fn2, fn3] 这样， 然后 fn1 返回的是一个 promise ，resolve 之后再去执行 fn2
``` 
最简单的方式：利用async/await
async function runPromiseByQueue(myPromises) {
    let result = []
      for (let value of myPromises) {
        result.push(await value());
      }
    return res;
}

reduce方式：
function runPromiseByQueue(myPromises) {
  myPromises.reduce(
    (previousPromise, nextPromise) => previousPromise.then(() => nextPromise()),
    Promise.resolve()
  );
}
上一个 Promise 执行，完毕后调用下一个 Promise，并作为一个新的 Promise 返回，下次迭代继续这个循环。

```
- 实现Promise.limit()，实现对promise数组的限制运行。
- 一个promise有多个then，如果第一个then出错，后面的还会执行吗，如何捕获异常。 如果第一个then出错了，我还想要后面的继续执行，应该怎么做。
``` 
出错了后面then就不会执行，知道catch捕获后返回新的promise，catch后面如果还有then的话就继续执行。

答问题二：
立即catch就行吧，catch后会返回新的promise，后面的then就可以继续执行

```
- Promise和Async处理失败的时候有什么区别
- Async/await promise 和 generator区别。
``` 
Async/await是一个语法糖，内部实现还是generator + yield
async function 代替了 function*，await 代替了 yield

```

- 三个异步函数怎么知道彼此已经结束。不用promise.all
- 用es5写promise

- Promise.any()
- Promise.reject()
- Promise.allSettled()


- new Promise(() => {throw new Error()})能否抛出异常？  
- 如何捕获new Promise((reject) => {reject()})的异常呢？除了catch和try，catch

- 写一个promise的底层实现
- promise的链式调用
``` 
function start() {
  return new Promise((resolve, reject) => {
    resolve('start');
  });
}

start()
  .then(data => {
    // promise start
    console.log('result of start: ', data);
    return Promise.resolve(1); // p1
  })
  .then(data => {
    // promise p1
    console.log('result of p1: ', data);
    return Promise.reject(2); // p2
  })
  .then(data => {
    // promise p2
    console.log('result of p2: ', data);
    return Promise.resolve(3); // p3
  })
  .catch(ex => {
    // promise p3
    console.log('ex: ', ex);
    return Promise.resolve(4); // p4
  })
  .then(data => {
    // promise p4
    console.log('result of p4: ', data);
  });
上面的代码最终会输出：

result of start:  start
result of p1:  1
ex:  2
result of p4:  4

promise 的 then 方法里面可以继续返回一个新的 promise 对象
下一个 then 方法的参数是上一个 promise 对象的 resolve 参数
catch 方法的参数是其之前某个 promise 对象的 rejecte 参数
一旦某个 then 方法里面的 promise 状态改变为了 rejected，则promise 方法连会跳过后面的 then 直接执行 catch
catch 方法里面依旧可以返回一个新的 promise 对象
```
- promise并发请求 但是按序输出                                             
- 问我那个场景要用generator，而不适合用async，不断提示我，我还是没有答出来，他说是数据交换    


- 模块化Commonjs,AMD,CMD规范的了解，以及ES6的模块化跟其他几种的区别，以及出现的意义（这些要弄清楚）

``` 
作用：
解决命名冲突
提供复用性
提高代码可维护性

AMD：requirejs 在推广过程中对模块定义的规范化产出，提前执行，推崇依赖前置
CMD：seajs 在推广过程中对模块定义的规范化产出，延迟执行，推崇依赖就近
CommonJs：模块输出的是一个值的 copy，运行时加载，加载的是一个对象（module.exports 属性），该对象只有在脚本运行完才会生成
ES6 Module：模块输出的是一个值的引用，编译时输出接口，ES6模块不是对象，它对外接口只是一种静态定义，在代码静态解析阶段就会生成。


https://www.processon.com/view/link/5c8409bbe4b02b2ce492286a#map

IIFE： 使用自执行函数来编写模块化，特点：在一个单独的函数作用域中执行代码，避免变量冲突。

(function(){
  return {
	data:[]
  }
})()


AMD： 使用requireJS 来编写模块化，特点：依赖必须提前声明好。--非同步加载模块
AMD: require / defined
define('./index.js',function(code){
	// code 就是index.js 返回的内容
})
//引入使用模块：
require(['module1', 'module2'], function(m1, m2){
   使用 m1/m2
})



CMD： 使用seaJS 来编写模块化，特点：支持动态引入依赖文件。--专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。整合了 CommonJS 和 AMD 规范的特点
//导出模块
define(function(require, exports, module){
  exports.xxx = value
  module.exports = value
})
//引入模块	
define(function (require, exports, module) {
  var m1 = require('./module1')
  var m4 = require('./module4')
  m1.show()
  m4.show()
})


CommonJS：(nodejs 中自带的模块化)。
require / module.exports / exports
暴露模块：module.exports = value或exports.xxx = value；
引入模块：require(xxx), 如果是第三方模块，xxx 为模块名；如果是自定义模块，xxx 为模块文件路径




ES6 模块化
1，设计思想：静态化
2，在编译时就能确定模块的依赖关系，以及输入和输出的变量


```

- require与import的区别
``` 
require支持 动态导入，import不支持，正在提案 (babel 下可支持)
require是 同步 导入，import属于 异步 导入
require是 值拷贝，导出值变化不会影响导入值；import指向 内存地址，导入值会随导出值而变化
```
- require 和 import 区别
``` 
import 是 ES6 的模块化语法，require() 在好几种模块规范中都有使用

require是值拷贝， import传的是值引用(只读)

–require是运行时调用，所以require理论上可以运用在代码的任何地方
–import是编译时调用，所以必须放在文件开头

–require是赋值过程，其实require的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量
–import是解构过程，但是目前所有的引擎都还没有实现import，我们在node中使用babel支持ES6，也仅仅是将ES6转码为ES5再执行，import语法会被转码为require
```
- Nodejs可以通过import来引入模块吗、ES6中可以通过require来引入模块吗
  
  - 不声明async，可以用await吗
- ES6 的 Set 内部实现。


