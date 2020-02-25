- 实现promise
``` 


```
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

- Object.create 的基本实现
``` 

// 思路：将传入的对象作为原型
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
```

- 实现instance of
- 实现promise.all

``` 
function isPromise(obj) {       // 这个方法是为了判断不是promise的时候直接返回。
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';  
}

const myPromiseAll = (arr)=>{
    let result = [];
    return new Promise((resolve,reject)=>{
        for(let i = 0;i < arr.length;i++){
            if(isPromise(arr[i])){
                arr[i].then((data)=>{
                    result[i] = data;
                    if(result.length === arr.length){
                        resolve(result)
                    }
                },reject)
            }else{
                result[i] = arr[i];
            }
        }    
    })
}

```
- 实现一个JS函数柯里化，函数柯里化使用场景
- 自己实现一个event类
- 实现 memorize once 高阶函数
- sum(2, 3)实现sum(2)(3)的效果
- 实现Object.assign()函数
- async/await 实现
- reduce 实现
- Iterator遍历器实现
- Thunk函数实现（结合Generator实现异步）
- 实现一个方法遍历输出Object所有属性
1. Promise（A+规范）、then、all方法

3. Thunk函数实现（结合Generator实现异步）
4. async实现原理（spawn函数）
- 手写一个throttle

- 实现promise.all的polyfill
- 实现promise.all
``` 
Promise.all = function(arr){
    if(!Array.isArray(arr)){
        throw new TypeError(`argument must be a array`)
    }
    return new Promise((resolve,reject) => {
        var resolveNum = 0;
        var resolveResult = [];
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
            arr[i]).then(data => {
                return resolve(data);
            }, (e) => {
                return reject(e);
            });
         }
    })
  }

```

- 实现promise.retry
``` 
Promise.retry = function(fn, times, delay) {
  return new Promise(function(resolve, reject){
      var error;
      var attempt = function() {
          if (times == 0) {
              reject(error);
          } else {
              fn().then(resolve).catch(function(e){
                      times--;
                      error = e;
                      setTimeout(function(){attempt()}, delay);
                  });
          }
      };
      attempt();
  });
};

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
- 手写reduce或者filter的polyfill
- 手写parseInt的实现
- 自己实现一个event类
- 自己实现new函数
- 用reduce实现map的功能
- 手写indexOf的实现
- 手撕代码--前端路由实现（JS原生）
- 手撕代码--图片懒加载实现（JS原生）
- cookie封装
- 实现一个循环监听
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
- promise封装ajax
``` 
var  myNewAjax=function(url){
  return new Promise(function(resolve,reject){
      var xhr = new XMLHttpRequest();
      xhr.open('get',url);
      xhr.send(data);
      xhr.onreadystatechange=function(){
           if(xhr.status==200&&readyState==4){
                var json=JSON.parse(xhr.responseText);
                resolve(json)
           }else if(xhr.readyState==4&&xhr.status!=200){
                reject('error');
           }
      }
  })
}


```
- 手写闭包里怎么用setTimeout
- 实现一个斐波那契数列实现输入第n项输出相应的值，优化这个函数，让被查找过的下标值下次再次访问的时候能够立马找到并输出
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
- 写一个curry函数，其实就是add(1,2,3) 改成 add(1)(2,3)
``` 
function currying(fn,...args){
    if(fn.length <= args.length){
        return fn(...args)
    }
    return function(...args1){
        return currying(fn,...args,...args1)
    }
}
function add(a,b,c){
    return a + b + c
}
add(1,2,3) // 6
var curryingAdd = currying(add);
curryingAdd(1)(2)(3) // 6
```
- 手写发布订阅的EventEmitter类
``` 
class EventEmitter {
    constructor(){
        this.events = {}
    }
    on(name,cb){
        if(!this.events[name]){
            this.events[name] = [cb];
        }else{
            this.events[name].push(cb)
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
- js实现继承的几种方式
- 手写实现观察者模式
- 写了一个curry函数，其实就是add(1,2,3) 改成 add(1)(2,3)
- new Queue().task(1000,()=>console.log(1)).task(2000,()=>console.log(2)).task(3000,()=>console.log(3)).start()实现该函数，start()后等1秒输出1，再等2秒2，再等3秒3.
- ab-cd-ef=》ab-Cd-Ef（来个简单的题（你菜给你来个简单的嘤嘤嘤））
- [1,2,3,4,6,7,9,13,15]=>['1->4',6->7,'9','13','15']实现一下
- 手撕代码 实现一个函数接受一个值，输出小于这个数的斐波那契数列的所有项
- 手撕代码 实现一个自增类 改类有一个id属性，每次实例化时，id都加一
- 实现一个calendar组件
- 写一个轮播图，用原生js
- 写代码 实现remove函数，删除object的属性
- promise的catch怎么实现？
- 基于promise实现jsonp
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
-假设现在要实现一个点击发送短信验证码的功能，如何实现它的倒计时？
- 没有后台服务器和不能Date返回的时间有误的情况下如何获得当前的本地时间？
- 手写一个继承
``` 
父类Person, 拥有属性lastname, 方法hello
子类Student, 拥有属性grade, 方法goSchool
Student继承与Person
实现new 一个Student 调用hello 输出lastname 调用goSchool输出grade

```

- 前端路由实现（JS原生）
- 让spacify（）能接受多个参数，例如spacify（‘hello’，‘world’，‘d’）；
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
