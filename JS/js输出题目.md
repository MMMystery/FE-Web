new 的方式优先级最高，接下来是 bind 这些函数(不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定)，然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变


- 作用域
``` 
静态作用域与动态作用域
因为 JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了。

而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

让我们认真看个例子就能明白之间的区别：

var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

// 结果是 ???
假设JavaScript采用静态作用域，让我们分析下执行过程：

执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。

假设JavaScript采用动态作用域，让我们分析下执行过程：

执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。

前面我们已经说了，JavaScript采用的是静态作用域，所以这个例子的结果是 1。


```

- JavaScript深入之执行上下文栈
``` 
如果要问到 JavaScript 代码执行顺序的话，想必写过 JavaScript 的开发者都会有个直观的印象，那就是顺序执行，毕竟：

var foo = function () {

    console.log('foo1');

}

foo();  // foo1

var foo = function () {

    console.log('foo2');

}

foo(); // foo2
然而去看这段代码：

function foo() {

    console.log('foo1');

}

foo();  // foo2

function foo() {

    console.log('foo2');

}

foo(); // foo2
打印的结果却是两个 foo2。

刷过面试题的都知道这是因为 JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。



```














- 求输出
``` 
var a = {n:1};
var b = a;
a.x = a ={n:2};
console.log(a.x);  // undefined
console.log(b.x);  // {n:2}

首先，这两句令a和b同时引用了{n:2}对象，接着的a.x = a = {n：2}是关键。尽管赋值是从右到左的没错，但是.的优先级比=要高，所以这里首先执行a.x，相当于为a（或者b）所指向的{n:1}对象新增了一个属性x，即此时对象将变为{n:1;x:undefined}。之后按正常情况，从右到左进行赋值，此时执行a ={n:2}的时候，a重定向，指向了新对象{n：2},而b依然指向的是旧对象，这点是不变的。接着的关键来了：执行a.x = {n：2}的时候，并不会重新解析一遍a，而是沿用最初解析a.x时候的a，也即旧对象，故此时旧对象的x的值为{n：2}，旧对象为 {n:1;x:{n：2}}，它被b引用着。 后面输出a.x的时候，又要解析a了，此时的a当然是重定向后的指向新对象的a，而这个新对象是没有x属性的，故得到undefined；而输出b.x的时候，将输出旧对象的x属性的值，即{n:2}。
```
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

- 求输出
``` 
var name = '123';
 
var obj = {
    name: '456',
    getName: function () {
        function printName() {
            console.log(this.name)    ;
        }
 
        printName();
        
        //bind
        printName.bind(this)();
        //call
        printName.call(this);
        //apply
        printName.apply(this);
        //=>
        printName = ()=>{
            console.log(this.name);
        }
    }
}
 
obj.getName();


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

- 输出题
``` 
var max = 10,
    fn = function(x){
        console.log(max)
        if(x>max){
            console.log(x)
        }
    };
(function(f){
    var max = 100;
    f(15)
})(fn)

静态作用域

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
- 所有对象都有原型？
``` 
false 
除了基本对象（base object），所有对象都有原型。基本对象可以访问一些方法和属性，比如 .toString。这就是为什么你可以使用内置的 JavaScript 方法！所有这些方法在原型上都是可用的。虽然 JavaScript 不能直接在对象上找到这些方法，但 JavaScript 会沿着原型链找到它们，以便于你使用。

```
- ==,===比较
``` 
console.log({age:1}==={age:1}) // false
console.log({age:1}=={age:1})  // false

基础类型比较是比较他们的值

对象比较的是他们的引用。所以==也是false

```

- 输出是什么？
``` 
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1')
obj.hasOwnProperty(1)
set.has('1')
set.has(1)

输出: true true false true
所有对象的键（不包括 Symbol）在底层都是字符串，即使你自己没有将其作为字符串输入。这就是为什么 obj.hasOwnProperty('1') 也返回 true。
```
- 输出是什么？
``` 
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)

输出： { a: "three", b: "two" }
如果你有两个名称相同的键，则键会被替换掉。它仍然位于第一个键出现的位置，但是值是最后出现那个键的值
```
- 输出是什么？
``` 
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
拿对象作为键时会转换变成 "[object Object]"
a["[object Object]"] = 123
a["[object Object]"] = 456
所以后面a[b]等于a["[object Object]"] 也就是456了

```

- 输出是什么
``` 
const person = { name: 'Lydia' }

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21)
sayHi.bind(person, 21)
输出: Lydia is 21 function
使用这两种方法，我们都可以传递我们希望 this 关键字引用的对象。但是，.call 是立即执行的。
.bind 返回的是一个函数，但带有绑定上下文！它不是立即执行的。

```

- 输出是什么？
``` 
function sayHi() {
  return () => 0
}

console.log(typeof sayHi()) // function

function sayHi() {
  return (() => 0)() 
}

console.log(typeof sayHi())  //因为返回的是一个立即执行函数，返回值是0，所以是number
```

- 输出是什么？
``` 
(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()

catch 代码块接收参数 x。当我们传递参数时，这与之前定义的变量 x 不同 。这个 x 是属于 catch 块级作用域的。
然后，我们将块级作用域中的变量赋值为 1，同时也设置了变量 y 的值。
catch 块之外的变量 x 的值仍为 undefined， y 的值为 2
```
- reduce的使用
``` 

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur)
  },
  [1, 2]
)

[1, 2]是初始值。初始值将会作为首次调用时第一个参数 acc 的值。在第一次执行时， acc 的值是 [1, 2]， cur 的值是 [0, 1]。合并它们，结果为 [1, 2, 0, 1]。 第二次执行， acc 的值是 [1, 2, 0, 1]， cur 的值是 [2, 3]。合并它们，最终结果为 [1, 2, 0, 1, 2, 3]

```

- parseInt计算?
``` 
const num = parseInt("7*6", 10);
设定了 进制 后 (也就是第二个参数，指定需要解析的数字是什么进制: 十进制、十六机制、八进制、二进制等等……),parseInt 检查字符串中的字符是否合法. 一旦遇到一个在指定进制中不合法的字符后，立即停止解析并且忽略后面所有的字符。
*就是不合法的数字字符。所以只解析到"7"，并将其解析为十进制的7. num的值即为7.

```
- 输出是什么？
``` 
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
对数组进行映射的时候,num就是当前循环到的元素. 在这个例子中，所有的映射都是number类型，所以if中的判断typeof num === "number"结果都是true.map函数创建了新数组并且将函数的返回值插入数组。

但是，没有任何值返回。当函数没有返回任何值时，即默认返回undefined.对数组中的每一个元素来说，函数块都得到了这个返回值，所以结果中每一个元素都是undefined
```


