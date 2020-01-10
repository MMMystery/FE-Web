- call、apply、bind 实现
- new 实现
- class 实现继承
- async/await 实现
- reduce 实现
- 实现一个双向数据绑定
- instanceof 实现
- Array.isArray 实现
- Object.create 的基本实现原理
- getOwnPropertyNames 实现
- promise 实现
- 手写一个防抖/节流函数
- 柯里化函数的实现
- 手写一个深拷贝
- 实现一个new操作符
- 手写jsonp实现
- js实现css的:hover效果
实现一个JSON.stringify
实现一个JSON.parse
实现一个Function.bind
实现一个继承
实现一个JS函数柯里化


- 手写代码实现事件委托和闭包
- js的event loop机制
- 手写实现inherit函数
- 手写实现throttle函数

- 实现一个repeat函数，主要是闭包的应用
- 请解释XSS与CSRF分别是什么，两者有什么联系？如何防御？
- js原型链
- 手写代码实现（其实就是树的遍历，递归和非递归实现）
- 性能优化
- http缓存
- 前端安全防范措施
- 对http2的了解
- 对新技术的了解
- 对MVC MVP MVVM的了解
- 手写代码实现一下Array.prototype.trim 这个函数，并写个测试用例跑给我看下
- 说一下对bind，call，apply三个函数的认识，自己实现一下bind方法。
- 请实现一个 call 函数
- 如何实现一个 apply 函数？
- 怎么判断对象类型？
- generator 原理
- async、await 的优缺点
- 说说你对闭包的理解
- 数组降维
- 请实现一个深拷贝
- typeof 于 instanceof 区别
-  怎么判断页面是否加载完成？
-  说说你对Service worker的理解
-  defer和async区别

-  说说浏览器缓存机制
-  怎样选择合适的缓存策略
-  说说重绘（Repaint）和回流（Reflow）
-  页面首屏渲染性能优化方案有哪些
-  浏览器性能问题-使用 Webpack 优化项目

-  实现一个JSON.stringify
-  实现一个JSON.parse
-  手写一个继承
-  手写防抖(Debouncing)和节流(Throttling)
-  数组中的forEach和map的区别
-  for in和for of,forEach的区别

```
for in 一般常用来遍历对象或json

for of数组对象都可以遍历，遍历对象需要通过和Object.keys()

for in循环出的是key，for of循环出的是value
```
- Set、Map的区别
```
应用场景Set用于数据重组，Map用于数据储存

Set：
1，成员不能重复
2，只有键值没有键名，类似数组
3，可以遍历，方法有add, delete,has

Map:
1，本质上是健值对的集合，类似集合
2，可以遍历，可以跟各种数据格式转换
```

-   常见的继承的几种方法


- 前端的requestAnimationFrame了解吗？有使用过吗？说一下使用场景。  
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
- 闭包为什么会造成内存泄漏？
- JS宏任务和微任务的理解
- 深拷贝和浅拷贝的实现方式分别有哪些？

```
浅拷贝：(1) Object.assign的方式 (2) 通过对象扩展运算符 (3) 通过数组的slice方法 (4) 通过数组的concat方法。
深拷贝：(1) 通过JSON.stringify来序列化对象 (2) 手动实现递归的方式。
```

- javascript的垃圾回收机制讲一下
- new 操作符具体做了什么？
- 1.document.ready和onload的区别？
```
页面加载完成有两种事件，一是ready，表示文档结构已经加载完成（不包含图片等非文字媒体文件），二是onload，指示页 面包含图片等文件在内的所有元素都加载完成。(可以说：ready 在onload 前加载！！！)我的理解： 一般样式控制的，比如图片大小控制放在onload 里面加载;              而：jS事件触发的方法，可以在ready 里面加载;
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

- 理解Eventloop
- 如何准确判断一个变量是否是数组类型
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

- 手写ajax
  
```
var xhr = new XMLHttpRequest()

xhr.open("GET","/api",false)

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
- setTimeout、setInterval和requestAnimationFrame；
- 数组map、filter、reduce相关；
- Map和Set；
- 说一下对闭包的理解，以及你在什么场景下会用到闭包？
- promise中第二个参数的reject中执行的方法和promise.catch()都是失败执行的，分别这么写有什么区别，什么情况下会两个都同时用到？
- 写一个方法遍历所有文档树所有节点(考察递归)；
- 手写 Proxy / Object.defineProperty
- 写一个函数，可以控制最大并发数
- 实现instanceof
- 实现继承
- lazyMan
- 说说js的垃圾回收(GC)
- Async/Await 如何通过同步的方式实现异步
- 实现懒加载
```
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
```
- div中两个button，div上事件代理，如何判断点击的是哪个button
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
- 20、offsetWidth/offsetHeight,clientWidth/clientHeight与scrollWidth/scrollHeight的区别
- 21、javascript有哪些方法定义对象
- 怎么从十万个节点中找到想要的节点，怎么快速在某个节点前插入一个节点？
- 怎么用原生js实现一个轮播图，以及滚动滑动
- 怎么实现上传下载的功能
- 跨标签页通讯
- 如何让事件先冒泡后捕获
- 介绍下浏览器事件循环
- 哪些是宏任务，哪些是微任务
- 浏览器事件循环和 node事件循环有什么差别
- setTimetout 到期时间是怎么计算的，比如有1000个定时器
- react setstate 机制，事务机制
- 介绍下 redux，以及和 mobx 区别是什么
- 实现 promise.all 并发限制，每次只能并发5个请求
- css 盒模型
- node 错误监控怎么做的
- rn 有没有搞过？
- react 生态都用过什么。
- 介绍下 fiber
- 介绍下 hooks
- 数组哪些方法有副作用
- 请分别用深度优先思想和广度优先思想实现一个拷贝函数？
- 表单可以跨域吗
- 说一下对闭包的理解，以及你在什么场景下会用到闭包？
- 最常见是在 Array、String prototype 上写一个函数。比如 'abcd'.f() => 'd-c-b-a'
- 还有一些常用的函数，比如 bind (好多家都考……)，throttle, debounce 等