new 的方式优先级最高，接下来是 bind 这些函数(不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定)，然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变

- 求输出
``` 

function Foo() {
    getName = function() {
        console.log(1);
    };
    return this;
}
Foo.getName = function() {
    console.log(2);
};
Foo.prototype.getName = function() {
    console.log(3);
};
var getName = function() {
    console.log(4);
};

function getName() {
    console.log(5);
}

//请写出以下输出结果：
Foo.getName();      //-> 2    Foo对象上的getName() ，这里不会是3，因为只有Foo的实例对象才会是3，Foo上面是没有3的
getName();          //-> 4    window上的getName，console.log(5)的那个函数提升后，在console.log(4)的那里被重新赋值
Foo().getName();    //-> 1    在Foo函数中，getName是全局的getName，覆盖后输出 1（当前的这个函数在调用的时候才会执行里面的语句）
getName();          //-> 1    window中getName();
new Foo.getName();  //-> 2    Foo后面不带括号而直接 '.'，那么点的优先级会比new的高，所以把 Foo.getName 作为构造函数
new Foo().getName();//-> 3    此时是Foo的实例，原型上会有输出3这个方法

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
console.log(fn2)

```
- this指向题目
``` 
function foo() {
	console.log(this.a)
}
var a = 1
foo()  // this指向window，a已经赋值了，所以是1；

var obj = {
	a: 2,
	foo: foo
}
obj.foo() // this指向obj对象。打印输出2
const c = new foo() // undefined


对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是window
对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象
对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this

```

- this指向
``` 
var name = "The Window";
  var object = {     name : "My Object",
    getNameFunc : function(){       
        return function(){         
               return this.name;       
        };
    }
  };
  alert(object.getNameFunc()());
object.getNameFunc()返回一个函数，这个function定义是在window上。this指向window
所以输出：The Window

var name = "The Window";
  var object = {     
    name : "My Object",
    getNameFunc : function(){       
    var that = this;       
        return function(){         
            return that.name; 
      };
    }
  };
  alert(object.getNameFunc()());

输出：My Object
```

- promise输出题
``` 
function test(res) {
    return Promise.resolve(res).then(res => {
            console.log(res += '!');
            return res;
        }).then(res => {
            console.log(res += '!');
            return Promise.reject("end"); 
        }).catch(res => {
            console.log(res);
            return res;  
        }).then(res => {
            console.log(res += '!');  
        });
}
test("google");

google!
google!!
end
end!

```
- 数组reduce
``` 
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 0, 1, 0, 1];
arr1.reduce((acc, item, index) =>
            (arr2[index] && acc.push(item),acc),[]);
[1, 3, 5]
```

- 输出题
``` 
var A = function(){};
A.prototype.n = 1;
var b = new A(); // b.__proto__ = {n:1}
A.prototype = {
    n:2,
    m:3
}
var c = new A(); // c.__proto__ = {n:2,m:3}
console.log(b.n) 
console.log(b.m)
console.log(c.n)
console.log(c.m)

```

- eventloop输出题
``` 
setTimeout(()=>console.log("a"),0)
var p = new Promise((resolve)=>{
    console.log("b");
    resolve();
})
p.then(()=>console.log("c"));
p.then(()=>console.log("d"));
console.log("e");

b
e
c
d
a


```
-eventloop输出题
``` 
https://segmentfault.com/a/1190000019494012

console.log('1');
async function async1() {
    console.log('2');
    await async2();
    console.log('3');
}
async function async2() {
    console.log('4');
}

process.nextTick(function() {
    console.log('5');
})

setTimeout(function() {
    console.log('6');
    process.nextTick(function() {
        console.log('7');
    })
    new Promise(function(resolve) {
        console.log('8');
        resolve();
    }).then(function() {
        console.log('9')
    })
})

async1();

new Promise(function(resolve) {
    console.log('10');
    resolve();
}).then(function() {
    console.log('11');
});
console.log('12'); 


1   2 4 10  12
宏任务      微任务
setimeout1  nextTick1 await1 then1

5 11 3
宏任务       
setimeout1 

6 8
宏任务    微任务
         nextTick2  then2
7 9




async function async1() {
    console.log("async1 start");
    await  async2(); 执行到await async2();，会从右向左执行，先执行async2()，打印async2，看见await，会阻塞代码去执行同步任务。
    console.log("async1 end");
}

async  function async2() {
    console.log( 'async2');
}

console.log("script start");

setTimeout(function () {
    console.log("settimeout");
},0);

async1();

new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log('script end'); 

scriptstart  async1start async2 promise1 script end
宏任务        微任务
setTimeout1   await1 then1

async1 end    promise2
宏任务        微任务
setTimeout1 

settimeout

```

- 运算
``` 
+true;
!"Lydia";
输出：1 ; false
```
- 相等
``` 
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b)   // true
console.log(a === b)  // false
console.log(b === c)  // false

new Number() 是一个内建的函数构造器。虽然它看着像是一个 number，但它实际上并不是一个真实的 number：它有一堆额外的功能并且它是一个对象。
```

- 静态方法和实例
``` 
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
freddie.colorChange('orange')   // TypeError

colorChange 是一个静态方法。静态方法被设计为只能被创建它们的构造器使用（也就是 Chameleon），并且不能传递给实例。
因为 freddie 是一个实例，静态方法不能被实例使用，因此抛出了 TypeError 错误。

```
- 函数是对象，可以自由加属性
``` 
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog'
正常运行!
这在 JavaScript 中是可以的，因为函数是对象！（除了基本类型之外其他都是对象）
函数是一个特殊的对象。你写的这个代码其实不是一个实际的函数。函数是一个拥有属性的对象，并且属性也可被调用。

```
- 但是构造函数，不可以直接自由加属性，应该使用原型来加属性。
``` 
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName()); // TypeError

你不能像常规对象那样，给构造函数添加属性。如果你想一次性给所有实例添加特性，你应该使用原型，如下：
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
这才会使 member.getFullName() 起作用。为什么这么做有益的？假设我们将这个方法添加到构造函数本身里。
也许不是每个 Person 实例都需要这个方法。这将浪费大量内存空间，因为它们仍然具有该属性，这将占用每个实例的内存空间。
相反，如果我们只将它添加到原型中，那么它只存在于内存中的一个位置，但是所有实例都可以访问它

```

-输出是什么？
``` 
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)
输出是：Person {firstName: "Lydia", lastName: "Hallie"} and undefined

当使用 new 时，this 引用我们创建的空对象。对于 sarah，我们没有使用 new 关键字，this 引用的是全局对象（global object）。

我们说 this.firstName 等于 "Sarah"，并且 this.lastName 等于 "Smith"。实际上我们做的是，定义了 global.firstName = 'Sarah' 和 global.lastName = 'Smith'。而 sarah 本身是 undefined。
```
- 一元运算
``` 
let number = 0
console.log(number++)
console.log(++number)
console.log(number)

输出 0 2 2 
```

-字符模板的输出
``` 
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`


输出：["", " is ", " years old"]  "Lydia"  21

如果使用标记模板字面量，第一个参数的值总是包含字符串的数组。其余的参数获取的是传递的表达式的值！
```
