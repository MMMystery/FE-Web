- vue的响应式原理
  

```
Object.defineProperty(obj, prop, descriptor)
obj 是要在其上定义属性的对象；prop 是要定义或修改的属性的名称；descriptor 是将被定义或修改的属性描述符。
比较核心的是 descriptor，它有很多可选键值，具体的可以去参阅它的文档。这里我们最关心的是 get 和 set，get 是一个给属性提供的 getter 方法，当我们访问了该属性的时候会触发 getter 方法；set 是一个给属性提供的 setter 方法，当我们对该属性做修改的时候会触发 setter 方法。一旦对象拥有了 getter 和 setter，我们可以简单地把这个对象称为响应式对象

对象递归调用
数组变异方法的解决方法：代理原型/实例方法


observe
observe 方法的作用就是给非 VNode 的对象类型数据添加一个 Observer，如果已经添加过则直接返回，否则在满足一定条件下去实例化一个 Observer 对象实例。
observe 的功能就是用来监测数据的变化.
Observer 是一个类，它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新：
依赖收集和派发更新
收集依赖的目的是为了当这些响应式数据发生变化，触发它们的 setter 的时候，能知道应该通知哪些订阅者去做相应的逻辑处理，我们把这个过程叫派发更新，其实 Watcher 和 Dep 就是一个非常经典的观察者设计模式的实现
派发更新就是数据发生变化的时候，触发 setter 逻辑，把在依赖过程中订阅的的所有观察者，也就是 watcher，都触发它们的 update 过程，这个过程又利用了队列做了进一步优化，在 nextTick 后执行所有 watcher 的 run，最后执行它们的回调函数
vue编译Compile的过程主要分以下几步
parse(生成AST)=> optimize(优化静态节点) => generate(生成render function)

```
- 除了Object.defineProperty,还有什么能实现数据劫持（双向绑定，proxy和defineProperty对比），Proxy 相比于 defineProperty 的优势
``` 
属性监听：
Object.defineProperty只能对属性进行数据劫持，所以需要深度遍历整个对象 对于数组不能监听到数据的变化
var Book = {}
var name = '';
Object.defineProperty(Book, 'name', {
  set: function (value) {
    name = value;
    console.log('你取了一个书名叫做' + value);
  },
  get: function () {
    return '《' + name + '》'
  }
})
 
Book.name = 'vue权威指南';  // 你取了一个书名叫做vue权威指南
console.log(Book.name);  // 《vue权威指南》

Proxy
数组变化也能监听到
不需要深度遍历监听

let data = { a: 1 }
let reactiveData = new Proxy(data, {
	get: function(target, name){
		// ...
	},
	// ...
})


```
- vue的生命周期
- vue的双向绑定如何实现
- scoped // 防止样式污染
- computer和watch如何实现的，区别，原理。
``` 
computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。
watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
所以一般来说需要依赖别的属性来动态获得值的时候可以使用 computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 watch。
```
- $nextTrick原理 和 使用场景 ？

- vuex
``` 
state: 状态中心
mutations: 更改状态
actions: 异步更改状态
getters: 获取状态
modules: 将state分成多个modules，便于管理
```
