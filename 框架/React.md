- React的Dom的diff算法描述一下，diff算法是对树的深度优先遍历还是广度优先遍历？
```  
①用JS对象构建一颗虚拟DOM树，然后用虚拟树构建一颗真实的DOM树，然后插入到文档中。
②当状态变更时，重新构造一颗新的对象树，然后新树旧树进行比较，记录两树差异。
③把步骤2的差异应用到步骤1所构建的真实DOM树上，视图就更新了。

diff算法：

传统Diff：diff算法即差异查找算法；对于Html DOM结构即为tree的差异查找算法；而对于计算两颗树的差异时间复杂度为O（n^3）,显然成本太高，React不可能采用这种传统算法；
React Diff：

之前说过，React采用虚拟DOM技术实现对真实DOM的映射，即React Diff算法的差异查找实质是对两个JavaScript对象的差异查找；
基于三个策略：
Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。（tree diff）
拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结（component diff）
对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。（element diff）


基于中Diff的开发建议
基于tree diff：

开发组件时，注意保持DOM结构的稳定；即，尽可能少地动态操作DOM结构，尤其是移动操作。
当节点数过大或者页面更新次数过多时，页面卡顿的现象会比较明显。
这时可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。
基于component diff：

注意使用 shouldComponentUpdate() 来减少组件不必要的更新。
对于类似的结构应该尽量封装成组件，既减少代码量，又能减少component diff的性能消耗。
基于element diff：

对于列表结构，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。

```
- 虚拟dom的缺点
- diff 和patch 的过程
- diff
```
diff算法比较新旧节点的时候，比较只会在同层级比较，不会跨层级比较
当数据发生变化的时候会生成一个新的VNode，然后新VNode和oldNode做对比，发现不一样的地方直接修改在真实的dom上，比较新旧节点，一边比较一边给真是的dom打补丁
节点设置key可以高效的利用dom（key最好不要设置成index索引）
虚拟DOM diff算法主要就是对以下三种场景进行优化：


tree diff

对树进行分层比较，两棵树只会对同一层次的节点进行比较。(因为 DOM 节点跨层级的移动操作少到可以忽略不计)
如果父节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。
注意：
React 官方建议不要进行 DOM 节点跨层级的操作，非常影响 React 性能。
在开发组件时，保持稳定的 DOM 结构会有助于性能的提升。例如，可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。

component diff

如果是同一类型的组件，按照原策略继续比较 virtual DOM tree（tree diff）。
对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。
如果不是，直接替换整个组件下的所有子节点。

element diff

对处于同一层级的节点进行对比。
这时 React 建议：添加唯一 key 进行区分。虽然只是小小的改动，性能上却发生了翻天覆地的变化！
如： A B C D  -->  B A D C
添加 key 之前： 发现 B != A，则创建并插入 B 至新集合，删除老集合 A；以此类推，创建并插入 A、D 和 C，删除 B、C 和 D。
添加 key 之后： B、D 不做任何操作，A、C 进行移动操作，即可。
建议：在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。
```
- DIFF算法为什么是O(n)复杂度而不是O(n^3)
- 知道react是怎么渲染虚拟dom的吗
- 简述路由原理以及react-router的内部原理解释。

```   
路由原理

前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

hashHistory 模式
老浏览器的history: 主要通过hash来实现，对应createHashHistory
createHashHistory: location.hash=*** location.replace()


browserHistory 模式 （路径是真实的URL，会发送request，所以需要服务器端做特殊配置）
高版本浏览器: 通过html5里面的history，对应createBrowserHistory
createBrowserHistory: pushState、replaceState

解释一下为什么browserHistory需要服务端配置，因为真实URL其实是指向服务器资源，比如我们经常使用的API接口，也是一个真实URL的资源路径，当通过真实URL访问网站的时候，第一次访问的是网站的域名，这个时候可以正常加载我们的网站js等文件，而用户手动刷新网页时，由于路径是指向服务器的真实路径，服务器端没有做路由配置，就会导致资源不存在，用户访问的资源不存在，返回给用户的是404错误。



react-router：

实现URL与UI界面的同步。其中在react-router中，URL对应Location对象，而UI是由react components来决定的，这样就转变成location与components之间的同步问题

原理：DOM渲染完成之后，给window添加onhashchange事件监听页面hash的变化，并且在state属性中添加了route属性，代表当前页面的路由。
具体步骤：

当点击链接，页面hash改变时，触发绑定在 window 上的 onhashchange 事件；
在 onhashchange 事件中改变组件的 state中的 route 属性，react组件的state属性改变时，自动重新渲染页面；
页面随着 state 中的route属性改变，自动根据不同的hash给Child变量赋值不同的组件，进行渲染。

看这个链接：https://www.jianshu.com/p/d991a4a55ae1

```
- react-router4.0与3.0区别
``` 

```
- React 同构
- redux这一类的工具在解决什么问题，它的本质原理详述。

```   
Redux是将整个应用状态存储到一个地方上称为store,里面保存着一个状态树store tree,组件可以派发(dispatch)行为(action)给store,而不是直接通知其他组件，组件内部通过订阅store中的状态state来刷新自己的视图。

Redux三大原则
唯一数据源
保持只读状态
数据改变只能通过纯函数来执行

```

- react setState 机制（setState什么时候异步、什么时候同步）
```  

在一个事件handler函数中，不管setState()被调用多少次，他们也会在函数执行结束以后，被归结为一次重新渲染, 可以优化性能, 这个等到最后一起执行的行为被称为batching。
//假设现在this.state.value = 0;
 
function eventHandler(){
    this.setState({value:this.state.value + 1});
    this.setState({value:this.state.value + 1});
    this.setState({value:this.state.value + 1});
}
 
//最后this.state.value仍然会是1，不是3;


如果想实现这样的效果，应该传一个函数给setState。这个函数有两个参数，第一个为previous state，第二个为props。这里的例子和props无关，只需要第一个参数
// 假设 this.state = { value: 0 };
 
function eventHandler(){
    this.setState((state) => ({ value: state.value + 1}));
    this.setState((state) => ({ value: state.value + 1}));
    this.setState((state) => ({ value: state.value + 1}));
}

//现在this.state.value === 3;
到这里我们得到结论，setState是异步执行的。

但是当setState()不在事件Handler函数中，如在使用ajax的时候，这种batching的异步表现又不会发生。


promise.then(() => {
  // 不在事件函数中，所以setState立刻执行
  this.setState({a: true}); // 重新渲染 {a: true, b: false }
  this.setState({b: true}); // 重新渲染 {a: true, b: true }
});
```
- react的setState后发生了什么
- React V16 生命周期函数用法
```   
链接：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


渲染的时候父组件和子组件的生命周期执行顺序：
装载过程：
componentWillMount 1
render 1
constructor 2
componentWillMount 2
render 2
constructor 3
componentWillMount 3
render 3
componentDidMount 1
componentDidMount 2
componentDidMount 3

装载过程：
constructor()
static getDerivedStateFromProps(nextProps, prevState)
componentWillMount()(将要废弃)
render()
componentDidMount()

更新过程：
componentWillReceiveProps(v17.0中将被弃用) 
-> static getDerivedStateFromProps(nextProps, prevState)
-> shouldComponentUpdate 
-> componentWillUpdate(v17.0中将被弃用) 
-> render 
-> getSnapshotBeforeUpdate 
-> componentDidUpdate

卸载过程
componentwillUnMount

错误处理(当组件发生错误的时候，用得极少)
getDerivedStateFromError(v16.6新增) -> componentDidCatch(未来将被废弃)

```

- 说说对React Hooks的理解
``` 
React Hooks 的设计目的，就是加强版函数组件，完全不使用"类"，就能写出一个全功能的组件。

React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。
函数组件的好处：
不需要声明Class, 也就避免了extends constructor等一系列代码
不需要显示的声明this，没有声明周期
不需要维护一个组件内的状态（state）,所有需要的数据都是通过props传进来的

Hooks还有的好处：

函数式的纯组件装配状态与行为。模块化粒度更细了，代码复用度高，也更高内聚松耦合了

四个最常用的钩子：
useState()
useContext()
useReducer()
useEffect()

```
- React Hooks当中的useEffect是如何区分生命周期钩子的

- 介绍下 React Fiber 架构、调度原理(自己讲了下Fiber树中节点的具体数据结构、任务优先级、代码如何断开和重连)
``` 
Fiber 可以提升复杂React 应用的可响应性和性能。Fiber 即是React新的调度算法

旧版：旧版 React 通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止

新版：Fiber实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。实现方式是使用了浏览器的requestIdleCallback这一 API。


每次有 state 的变化 React 重新计算，如果计算量过大，浏览器主线程来不及做其他的事情，比如 rerender 或者 layout，那例如动画就会出现卡顿现象。
React 制定了一种名为 Fiber 的数据结构，加上新的算法，使得大量的计算可以被拆解，异步化，浏览器主线程得以释放，保证了渲染的帧率。从而提高响应性。



链表、一次Fiber循环所有节点访问两次、requestIdleCallback
```
- 画Fiber渲染树

- react的单向数据流是什么
``` 
React是单向数据流，数据主要从父节点传递到子节点

```
- react怎么实现的，原理

``` 
react是用于构建用户界面的JS框架。因此react只负责解决view层的渲染

Virtual Dom模型
生命周期管理
setState机制
diff算法
React patch、事件系统
react的 Virtual Dom模型
```

- 什么是高阶组件(HOC)

```
高阶组件(Higher Order Componennt)本身其实不是组件，而是一个函数，这个函数接收一个元组件作为参数，然后返回一个新的增强组件，高阶组件的出现本身也是为了逻辑复用

里层原理，如何实现
```
- react如何提高性能

```  
1.setState
setState机制在正常运行时，由于批更新策略，已经降低了update过程的触发次数。
2.父组件render

重写shouldComponentUpdate来避免不必要的dom操作。（新版react提供的PureComponent就解决了没必要的重新渲染。）
使用key来帮助React识别列表中所有子组件的最小变化。

3.正确使用diff算法
key值的设定

```

- 如何避免组件的重新渲染，react性能优化？

``` 
React.memo():这可以防止不必要地重新渲染函数组件
// React.memo()是一个高阶函数，它与 React.PureComponent类似，但是它是一个函数组件而非一个类


PureComponent:这可以防止不必要地重新渲染类组件


这两种方法都依赖于对传递给组件的props的浅比较，如果 props 没有改变，那么组件将不会重新渲染。虽然这两种工具都非常有用，但是浅比较会带来额外的性能损失，因此如果使用不当，这两种方法都会对性能产生负面影响。
通过使用 React Profiler，可以在使用这些方法前后对性能进行测量，从而确保通过进行给定的更改来实际改进性能。
```



- 如何更新状态和不更新状态
```
setState就是更新状态啊

```

- 如何在React中应用样式

```
<div className="App">
<div style={{backgroundColor:'orange'}}>
```


- 什么是错误边界

```  
部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。

```
- 什么是 Fragments
```
// With Fragments   
  return (
    <React.Fragment>
       <CompoentA />
       <CompoentB />
       <CompoentC />
    </React.Fragment>
  )

  // 简写 Fragments   
  return (
    <>
       <CompoentA />
       <CompoentB />
       <CompoentC />
    </>
  )

```
什么是传送门(react Portals)

```  
使得组件可以脱离父组件层级挂载在DOM树的任何位置

render() {
  // React does *not* create a new div. It renders the children into `domNode`.
  // `domNode` is any valid DOM node, regardless of its location in the DOM.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}

```
什么是 Context

如何在重新加载页面时保留数据
``` 
存储在 redux 中。

存储在最外层 component 的 context 中

```
- 如何从React中调用API
``` 
没理解，是问调用服务端api？

```



- 什么是Redux及其工作原理

- redux中的reducer（纯函数）

```
Redux数据流里，reduces其实是根据之前的状态（previous state）和现有的action（current action）
更新state(这个state可以理解为上下累加器的结果）
每次redux reducer被执行时，state和action被传入，这个state根据action进行累加或者是'自身消减'(reduce),
进而返回最新的state,这也就是典型reduce函数的用法：state ->  action ->  state


```
- redux主要做什么的，用过redux的一些中间件吗，简单说一下(redux怎么处理异步操作)

```   
redux中间件redux-saga

redux-saga相当于在Redux原有数据流中多了一层，通过对Action进行监听，从而捕获到监听的Action，然后可以派生一个新的任务对state进行维护（这个看项目本身的需求），通过更改的state驱动View的变更。

```

- 介绍下 redux，以及和 mobx 区别是什么


- 用react/vue写一个组件，功能是反馈鼠标在整个页面的的位置

- 如果将绑定事件放入react的render里会发生什么
- React render做了什么
- 什么是 JSX？

``` 
JSX 是 JavaScript XML 的简写。这是 React 使用的一种文件类型，具备 JavaScript 的表现力，并使用 HTML 作为模板语法。这样一来 HTML 文件理解起来就非常简单。这种文件可以创造稳健的应用程序并提高其效率。

```

- react-router传递参数的方式
- pureComponent和FunctionComponent区别
``` 
pureComponent会进行一个props，state与之前的状态进行比较，判断是否需要重新渲染。

FunctionComponent无生命周期，不能在里面进行状态的修改。
```
- 为什么在 React Router v4 中使用 switch 关键字？

- React和原生事件的执行顺序是什么？可以混用吗？
- 虚拟Dom中的 $$typeof属性的作用是什么？
- 为什么 React组件首字母必须大写？

- Redux如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理
- 多个组件之间如何拆分各自的state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，如何思考这块
- React组件中怎么做事件代理

- react-router怎么实现路由切换
- react-router里的<Link>标签和<a>标签有什么区别
- <a>标签默认事件禁掉之后做了什么才实现了跳转

- react异步渲染的概念,介绍Time Slicing 和 Suspense

- react-thunk 异步redux解决方案，thunk原理

- refs的使用
- react如何调用api
- React中有几种创建组件的方式
- connect如何获取store的值的以及connect原理

```  
通过mapStateToProps和mapDispatchToProps

//需要渲染什么数据
function mapStateToProps(state) {
  return {
      num:state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
      PayIncrease: () => dispatch(jia),
      PayDecrease: () => dispatch(jian)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Buy);


```

- React.createClass和extends Component的区别
``` 
一、语法区别
二、propType 和 getDefaultProps
React.createClass：通过proTypes对象和getDefaultProps()方法来设置和获取props.
React.Component：通过设置两个属性propTypes和defaultProps

三、状态的区别
通过getInitialState()方法返回一个包含初始值的对象
通过constructor设置初始状态

四、this区别
React.createClass：会正确绑定this

```

- 如何启动build后的项目

```  
npm install -g serve
serve -s build

```
- 为什么需要bind(this)
``` 
  作用域的问题，foo() {} 与 const foo = () => {}里面的this作用域不一样，foo() {}里面使用外部成员，需要bind(this)，直接使用的this作用域仅在该方法内部
```
- vue和react的区别
- 路由懒加载原理
- context本质是什么
- React16新特性
- 组件间的通信方式有哪几种
- redux简单实现
- 高阶函数和装饰器
- immutable
- 路由的动态加载模块
- React组件中怎么做事件委托
- react异步渲染的概念,介绍Time Slicing 和 Suspense
- react的理念是什么（拿函数式编程来做页面渲染）
- React、React-Router、Redux、的大致的实现原理
- Redux在使用的时候，对于状态的越来越臃肿这个问题是怎么解决的？
- 手写实现一个 Redux 中的 reducer (state, action) => newState
- Redux 怎么做到每个组件可以访问的 store 的
- Redux跟全局对象有什么区别？
- Proxy
- react vs vue区别以及项目选型
- 父组件state发生改变子组件是否跟着刷新
- React componentWillMount 做 setState 会干嘛
- react在更新了页面的时候，怎么实现将虚拟的DOMjs对象转到真正的DOM上面去呢
- Class的Constructor调用Super,Class和以前的创建对象方式有啥不同
- react suspense
- render phase && commit phase
- 展示组件(Presentational component)和容器组件(Container component)之间有何不同
``` 
 展示组件关心组件看起来是什么。
 展示专门通过 props 接受数据和回调，并且几乎不会有自身的状态，但当展示组件拥有自身的状态时，通常也只关心 UI 状态而不是数据的状态。
 容器组件则更关心组件是如何运作的。
 容器组件会为展示组件或者其它容器组件提供数据和行为(behavior)，它们会调用 Flux actions，并将其作为回调提供给展示组件。容器组件经常是有状态的，因为它们是(其它组件的)数据源。

```
-手写实现 React 高阶组件
- forceUpdate经历了哪些生命周期，子组件呢?
- vue和react谈谈区别和选型考虑
- Flux架构模式
- 手写实现一个 Redux 中的 reducer (state, action) => newState？
- 了解fiber吗，做了什么优化，描述一个使用fiber优化前后有区别的场景
- Redux的中间件和node的中间件原理
- mobx-react如何驱动react组件重渲染
- this.$refs中元素的排列顺序；
- Redux有没有做过封装
- react的redux是什么设计模式，react这里用了什么设计模式
- 高阶组件和mixin的区别
