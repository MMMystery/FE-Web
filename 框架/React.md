- vue 和 react 谈谈区别和选型考虑
``` 
学习曲线
代码风格
灵活性
是否轻便

一、生态系统：
react生态系统丰富，比vue多很多，如果项目涉及到一些复杂组件，往往react生态圈更容易找到现成的。而不用手动去写一个。

二、React与Vue最大的不同是模板的编写，jsx写法更符合正常的一个节点呈现逻辑，vue的模板引擎没那么直接的逻辑性


Vue 2.0以后就是单项数据流了，双向绑定是语法糖，react也是单向数据流。vue和react也都是函数式编程+面向对象编程了。

我认为单向数据流的好处在于所有的状态改变(mutation)可追溯。举个例子，父组件维护了一个状态，假设子组件可随意更改父组件甚至祖宗组件的状态，那各组件的状态改变就会变得难以追溯，父组件的状态也可能被子组件意外修改而不可察觉。而单向数据流保证了父组件的状态不会被子组件意外修改如果要修改，只能通过在子组件中dispatch一个action来对全局状态修改，全局状态在通过props分发给子组件；又或是调用父组件的方法；又或是发事件，这些操作是肉眼可见且可控的（用函数式来说，保证了组件就是无副作用的纯函数），不至于造成状态总被意外修改而导致难以维护的情况。


vue 适合 webapp，适合做用户交互多、各种动态效果变化丰富的应用。特别是PC、手机的网页版 商城等页面。vue 实现逻辑复杂的功能比较简单，跟写js似的，而且一些效果、过度感觉很舒服。
react 适合 oa系统，适合 大批量的数据展示、适合做大型应用。特别适合公司的后台操作系统。
```



- React的Dom的diff算法描述一下，diff算法是对树的深度优先遍历还是广度优先遍历？
```  
①用JS对象构建一颗虚拟DOM树，然后用虚拟树构建一颗真实的DOM树，然后插入到文档中。
②当状态变更时，重新构造一颗新的对象树，然后新树旧树进行比较，记录两树差异。
③把步骤2的差异应用到步骤1所构建的真实DOM树上，视图就更新了。

传统diff算法：

传统Diff：diff算法即差异查找算法；对于Html DOM结构即为tree的差异查找算法；而对于计算两颗树的差异时间复杂度为O（n^3）,显然成本太高，React不可能采用这种传统算法；
其实传统算法就是对每个节点一一对比，循环遍历所有的子节点，然后判断子节点的更新状态，分别为remove、add、change。


React Diff算法：

diff策略
React用 三大策略 将O(n^3)复杂度 转化为 O(n)复杂度
策略一（tree diff）：
Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。
策略二（component diff）：
拥有相同类的两个组件 生成相似的树形结构，
拥有不同类的两个组件 生成不同的树形结构。 （同一层只要出现不是同一类型的组件，就替换该组件的所有子节点。对于同一类型的组件，有可能其 Virtual DOM 没有任何变化，如果能够确切的知道这点那可以节省大量的 diff 运算时间，因此 React 允许用户通过 shouldComponentUpdate() 来判断该组件是否需要进行 diff。
策略三（element diff）：
对于同一层级的一组子节点，通过唯一id区分。

1：如果父节点不同，放弃对子节点的比较，直接删除旧节点然后添加新的节点重新渲染；
2：如果子节点有变化，Virtual DOM不会计算变化的是什么，而是重新渲染，
3：通过唯一的key策略

由于 React 只会简单的考虑同层级节点的位置变换，而对于不同层级的节点，只有创建和删除操作。



基于中Diff的开发建议
基于tree diff：

开发组件时，注意保持DOM结构的稳定；即，尽可能少地动态操作DOM结构，尤其是移动操作。当节点数过大或者页面更新次数过多时，页面卡顿的现象会比较明显。
这时可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。
基于component diff：

注意使用 shouldComponentUpdate() 来减少组件不必要的更新。
对于类似的结构应该尽量封装成组件，既减少代码量，又能减少component diff的性能消耗。
基于element diff：

对于列表结构，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。

```
- 虚拟dom的缺点
- React的diff/patch算法原理, diff 和patch 的过程
``` 
patch
patch是指遍历差异队列依次更新到真实dom上的操作。通过switch去匹配差异对象的type，然后进行对应的操作。
```
- diff （DIFF算法为什么是O(n)复杂度而不是O(n^3)）
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

首先说说为什么要使用Virturl DOM，因为操作真实DOM的耗费的性能代价太高，所以react内部使用js实现了一套dom结构，在每次操作在和真实dom之前，使用实现好的diff算法，对虚拟dom进行比较，递归找出有变化的dom节点，然后对其进行更新操作。为了实现虚拟DOM，我们需要把每一种节点类型抽象成对象，每一种节点类型有自己的属性，也就是prop，每次进行diff的时候，react会先比较该节点类型，假如节点类型不一样，那么react会直接删除该节点，然后直接创建新的节点插入到其中，假如节点类型一样，那么会比较prop是否有更新，假如有prop不一样，那么react会判定该节点有更新，那么重渲染该节点，然后在对其子节点进行比较，一层一层往下，直到没有子节点

```
- react和vue的diff哪里不同？
``` 
vue 和 react 的 diff 算法有相同和有不同，相同是都是用同层比较，不同是 vue使用双指针比较，react 是用 key 集合级比较

```

- 知道react是怎么渲染虚拟dom的吗

-  React V16 生命周期函数用法
  ```   
  链接：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  
  装载过程：
  constructor()
  static getDerivedStateFromProps(nextProps, prevState)
  render()
  componentDidMount()
  
  更新过程：
  -> static getDerivedStateFromProps(nextProps, prevState)
  -> shouldComponentUpdate 
  -> render 
  -> getSnapshotBeforeUpdate 
  -> componentDidUpdate
  
  卸载过程
  componentwillUnMount
  
  生命周期三个阶段：Render 渲染阶段和 Commit 阶段 （更新时存在Pre-Commit 阶段）
  
  
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
  
  
  错误处理(当组件发生错误的时候，用得极少)
  getDerivedStateFromError(v16.6新增) -> componentDidCatch(未来将被废弃)
  
  
  几处改动：
  fiber 架构
  react生命周期为什么有Unsafe_*
  静态函数：getDerivedStateFromProps
  getSnapshotBeforeUpdate
  减少声明周期，提高性能
  
  答案：
  Fiber 架构下，reconciler 会进行多次，reconciler 过程又会调用多次之前的 willxxx ，造成了语意不明确，因此干掉
  都次调用 willxxx 会导致一些性能安全/数据错乱等问题，因此 Unsafe
  静态函数 getDerivedStateFromProps ，直接将其函数内的用户逻辑降低几个数量级，减少用户出错，提高性能，符合语意
  getSnapshotBeforeUpdate 替换之前 willxxxx，给想读取 dom 的用户一些空间，强逼用户到 mount 阶段才能操作 dom
  提高性能，减少 try catch 的使用
  
  
  ```
- 能简单介绍一下 react 执行过程吗
``` 
performUnitOfWork
beginWork
completeUnitOfWork

jsx 经过 babel 转变成 render 函数
create update
enqueueUpdate
scheduleWork 更新 expiration time
requestWork
workLoop大循环
Effect List
commit
```
- 简述路由原理以及react-router的内部原理解释。

```   
路由原理

前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

hashHistory 模式（Hash路由，hash模式）
老浏览器的history: 主要通过hash来实现，不会向服务器请求数据，可以通过 hashchange 事件来监听到 URL 的变化，从而进行跳转页面。对应createHashHistory
createHashHistory: location.hash=*** location.replace()


browserHistory 模式（Browser路由，history模式） （路径是真实的URL，会发送request，所以需要服务器端做特殊配置）
高版本浏览器: 通过html5里面的history，对应createBrowserHistory
createBrowserHistory: pushState、replaceState

window.onpopstate可以监听前进和后退操作
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
- react-router中 监听路由变化的时候 怎么异步处理 
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

dispatch的实现原理/redux流程（后来发现是想问源码的发布订阅都写在哪了：其实是想问createStore）

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
- setState 函数的第二个参数的作用是什么？
``` 
该函数会在setState函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成
```
- react的setState后发生了什么
- react中setState以后，是子树渲染还是整颗树渲染还是其他情况？
- 说说对React Hooks的理解，React Hooks当中的useEffect是如何区分生命周期钩子的，为什么没有生命周期
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
useEffect() // useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。 
useRef()

一、useReducer
// 这就是 Redux
  function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);
  
    function dispatch(action) {
      const nextState = reducer(state, action);
      setState(nextState);
    }
  
    return [state, dispatch];
  }
二、useEffect 可以在组件渲染后实现各种不同的副作用，它使得函数式组件同样具备编写类似类组件生命周期函数的功能。在这里我们仅仅介绍三个常用的生命周期替代方案，分别是：
如果第二个参数传[ list ]，表示useEffect会在list发生改变时执行

componentDidMount vs useEffect
componentDidUpdate vs useEffect
componentWillUnmount vs useEffect

1、componentDidMount vs useEffect，怎么保证是在Didmount之后使用？，利用第二个参数
function Example() {
  // 注意不要省略第二个参数 []，这个参数保证函数只在挂载的时候进行，而不会在更新的时候执行。
  useEffect(() => console.log('mounted'), []);  
  return null;
}
// 举例网络请求，第二个参数空数组[]一定要带上。
useEffect(async () => {
    const result = await axios(
      'http://hn.algolia.com/api/v1/search?query=redux',
    );
 
    setData(result.data);
  }, []);


2、componentDidUpdate vs useEffect
useEffect(() => console.log('mounted or updated'));  // 不需要指定第二个参数
3、componentWillUnmount vs useEffect
useEffect(() => {
  return () => {
    console.log('will unmount');  // 直接使用return返回一个函数，这个函数在unmount时执行。
  }
}, []);

- useEffect 怎么清除副作用
  用过useCallback吗

优化 usecallback、useMemo

- 自定义 Hook

```

- 在生命周期中的哪一步你应该发起 AJAX 请求
``` 
React 下一代调和算法 Fiber 会通过开始或停止渲染的方式优化应用性能，其会影响到 componentWillMount 的触发次数。对于 componentWillMount 这个生命周期函数的调用次数会变得不确定，React 可能会多次频繁调用 componentWillMount。
所以在componentDidMount函数中执行最好
```

- 介绍下 React Fiber 架构、调度原理(自己讲了下Fiber树中节点的具体数据结构、任务优先级、代码如何断开和重连)
``` 
JS 运算、页面布局和页面绘制都是运行在浏览器的主线程当中，他们之间是互斥的关系。如果 JS 运算持续占用主线程，页面就没法得到及时的更新。
如果页面元素很多，整个过程占用的时机就可能超过 16 毫秒，就容易出现掉帧的现象。

在之前的版本中，如果你拥有一个很复杂的复合组件，然后改动了最上层组件的 state，那么调用栈可能会很长
调用栈过长，再加上中间进行了复杂的操作，就可能导致长时间阻塞主线程，带来不好的用户体验。Fiber 就是为了解决该问题而生

Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染改成了异步渲染，在不影响体验的情况下去分段计算更新

Fiber 改进思路是将调度阶段拆分成一系列小任务，每次加入一个节点至任务中，做完看是否还有时间继续下一个任务，有的话继续，没有的话把自己挂起，主线程不忙的时候再继续。
每次只做一小段，做完一段就把时间控制权交还给主线程，而不像之前长时间占用，从而实现对任务的暂停、恢复、复用灵活控制，这样主线程上的用户交互及动画可以快速响应，从而解决卡顿的问题。
在 react 生成的 Virtual Dom 基础上增加的一层数据结构，主要是为了将递归遍历转变成循环遍历，配合 requestIdleCallback API, 实现任务拆分、中断与恢复。

旧版：旧版 React 通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止

新版：Fiber实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。实现方式是使用了浏览器的requestIdleCallback这一 API。
而 Fiber Reconciler 每执行一段时间，都会将控制权交回给浏览器，可以分段执行


对于如何区别优先级，React 有自己的一套逻辑。对于动画这种实时性很高的东西，也就是 16 ms 必须渲染一次保证不卡顿的情况下，React 会每 16 ms（以内） 暂停一下更新，返回来继续渲染动画
对于异步渲染，现在渲染有两个阶段：reconciliation 和 commit 。前者过程是可以打断的，后者不能暂停，会一直更新界面直到完成。

1. Reconciliation 阶段（可打断）
componentWillMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate

2. Commit 阶段（不可打断）
componentDidMount
componentDidUpdate
componentWillUnmount
因为 Reconciliation 阶段是可以被打断的，所以 Reconciliation 阶段会执行的生命周期函数就可能会出现调用多次的情况，从而引起 Bug。由此对于 Reconciliation 阶段调用的几个函数，除了 shouldComponentUpdate 以外，其他都应该避免去使用，并且 V16 中也引入了新的 API 来解决这个问题。

getDerivedStateFromProps 用于替换 componentWillReceiveProps ，该函数会在初始化和 update 时被调用。
getSnapshotBeforeUpdate 用于替换 componentWillUpdate ，该函数会在 update 后 DOM 更新前被调用，用于读取最新的 DOM 数据



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

- 什么是高阶组件(HOC)，相比 mixins 有什么优点？（https://blog.csdn.net/astonishqft/article/details/82870224）

```
在多个不同的组件中需要用到相同的功能，其解决办法有两种：mixin和高阶组件。

minxin的缺陷
破坏了原有组件的封装：可能会带来新的state和props,意味着会有些“不可见”的状态需维护。
命名冲突：不同mixin中的命名不可知，故非常容易发生冲突，需要花一定成本解决。
增加了复杂性，难以维护。


高阶组件(Higher Order Componennt)本身其实不是组件，而是一个函数，这个函数接收一个元组件作为参数，然后返回一个新的增强组件，高阶组件的出现本身也是为了逻辑复用
一个公共逻辑写到高阶组件里面，然后高级组件包裹的组件都具备这些逻辑。

const EnhancedComponent = higherOrderComponent(WrappedComponent) 

高阶组件允许你做：
代码复用，逻辑抽象，抽离底层准备（bootstrap）代码
渲染劫持
State 抽象和更改
Props 更改

实现高阶组件的方法有两种
属性代理(props proxy)。高阶组件通过被包裹的 React 组件来操作 props。
反向继承(inheritance inversion)。高阶组件继承于被包裹的 React 组件。

在高阶组件内，应避免对组件做任何修改。应使用组合技术，将输入的组件包裹到一个容器组件中。
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }
    render() {
      // 用容器包裹输入组件，不要修改它
      return <WrappedComponent {...this.props} />;
    }
  }
}

例子：
function withLog (fn) {
    function wrapper(a, b) {
        const result = fn(a, b)
        console.log(result)
        return result
    }
    return wrapper
}
const withLogAdd = withLog(add)
withLogAdd(1, 2)


里层原理，如何实现

其实 HOC 和 Vue 中的 mixins 作用是一致的，并且在早期 React 也是使用 mixins 的方式。但是在使用 class 的方式创建组件以后，mixins 的方式就不能使用了

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
React.memo():这可以防止不必要地重新渲染函数组件，函数组件不能使用PureComponent，可以使用 React.memo 来实现相同的功能
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

错误边界是 React 捕获子组件树中所有 JavaScript 错误的组件，他可以记录这些错误，并将错误显示在 UI 上来替代组件树的崩溃。

如果类组件定义了一个名为 componentDidCatch 的新生命周期方法，那么他将成为错误边界。


后面改用 static getDerivedStateFromError() 来代替了。

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
Portals 提供了一种很好的将子节点渲染到父组件外部 DOM 层级中的 DOM 节点中的方式。

ReactDOM.createPortal(child, container) 
第一个参数（child）是任意可渲染的 React 子元素，例如一个元素，字符串或片断。第二个参数（container）是一个 DOM 元素。

render() {
  // React 不会创建新的 div。他渲染子元素到 `domNode` 中。
  // `domNode` 可以是任意有效的 DOM 节点，无论他在 DOM 中的位置如何。
  return ReactDOM.createPortal(
    this.props.children,
    domNode,
  );
}

```
- 什么是 Context
``` 
Context 提供了一种通过 React 组件树传递数据的方法，他不需要手动传递属性。
Context 主要为解决 React 组件树中被认为全局数据的共享。
使用 Context，可以跨越组件进行数据的传递

```


如何在重新加载页面时保留数据
``` 
存储在 redux 中。

存储在最外层 component 的 context 中

```
- 如何从React中调用API
``` 
没理解，是问调用服务端api？

```

- 状态提升在 React 中的作用
``` 
当多个组件需要共享一些相同的数据时，建议将共享的状态提升到离这些组件最近的共同祖先上。 例如，如果两个子组件共享了一些相同的数据，那么就建议将共享的状态移至他们的父组件，而不是在两个子组件中使用本地状态进行维护。

```
- React 和 HTML 的事件处理有什么不同？
``` 
React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

SyntheticEvent 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()。
如果因为某些原因，当你需要使用浏览器的底层事件时，只需要使用 nativeEvent 属性来获取即可。每个 SyntheticEvent 对象都包含以下属性：

boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type



React 中的事件机制分为两个阶段：事件注册、事件分发。所有的事件都会注册到 document 上，然后使用统一的回调函数 dispatchEvent 来执行分发。
```
- react事件了解吗？ (合成事件) 和普通事件有什么区别，实现原理

- 什么是Redux及其工作原理

- redux中的reducer（纯函数）

```
Redux数据流里，reduces其实是根据之前的状态（previous state）和现有的action（current action）
更新state(这个state可以理解为上下累加器的结果）
每次redux reducer被执行时，state和action被传入，这个state根据action进行累加或者是'自身消减'(reduce),
进而返回最新的state,这也就是典型reduce函数的用法：state ->  action ->  state


Provider内部其实就是利用Context去做的处理。

```
- redux主要做什么的，用过redux的一些中间件吗，简单说一下(redux怎么处理异步操作) ,说说中间件的意义

```   
redux中间件redux-saga

redux-saga相当于在Redux原有数据流中多了一层，通过对Action进行监听，从而捕获到监听的Action，然后可以派生一个新的任务对state进行维护（这个看项目本身的需求），通过更改的state驱动View的变更。

中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer。这种机制可以让我们改变数据流，实现如异步action ，action 过滤，日志输出，异常报告等功能

```

- 介绍下 redux，以及和 mobx 区别是什么
```  
redux三大原则

单一数据流
整个应用state都被储存在一个store里面 构成一个Object tree
State是只读的
唯一改变state的方法就是触发action, action是一个用于描述已发生事件的普通对象
使用纯函数来执行修改
为了描述action如何改变state tree， 你需要编写reducers
把reducer设计成纯函数，可以实现时间旅行，记录/回放或者热加载

```
- redux有什么缺点
``` 
一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。
当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的shouldComponentUpdate进行判断。

```
- createElement 与 cloneElement 的区别是什么
``` 
createElement 函数是 JSX 编译之后使用的创建 React Element 的函数，而 cloneElement 则是用于复制某个元素并传入新的 Props
```

- Profiler
``` 
Profiler 能添加在 React 树中的任何地方来测量树中这部分渲染所带来的开销。 它需要两个 prop ：一个是 id(string)，一个是当组件树中的组件“提交”更新的时候被React调用的回调函数 onRender(function)。


为了分析 Navigation 组件和它的子代：
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Main {...props} />
  </App>
);

function callback(
  id, // 发生提交的 Profiler 树的 “id”
  phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
  actualDuration, // 本次更新 committed 花费的渲染时间
  baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
  startTime, // 本次更新中 React 开始渲染的时间
  commitTime, // 本次更新中 React committed 的时间
  interactions // 属于本次更新的 interactions 的集合
) {
  // 合计或记录渲染时间。。。
}
```

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
```  
Link 的本质也是a 标签。只不过在Link 中禁用了 a 标签的默认事件，改用了history对象提供的方法进行跳转。

```
- <a>标签默认事件禁掉之后做了什么才实现了跳转

- react异步渲染的概念,介绍Time Slicing 和 Suspense

- react-thunk 异步redux解决方案，thunk原理

- refs的使用
- react如何调用api
- React中有几种创建组件的方式
- connect如何获取store的值的以及connect原理，里面做了什么？

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

- 路由懒加载原理
- context本质是什么
- React16新特性
- 组件间的通信方式有哪几种
- redux简单实现

- immutable是什么？
- 路由的动态加载模块
- React组件中怎么做事件委托
- react异步渲染的概念,介绍Time Slicing 和 Suspense
- react的理念是什么（拿函数式编程来做页面渲染）
- React、React-Router、Redux、的大致的实现原理
- Redux在使用的时候，对于状态的越来越臃肿这个问题是怎么解决的？
- 手写实现一个 Redux 中的 reducer (state, action) => newState
- Redux 怎么做到每个组件可以访问的 store 的
- Redux跟全局对象有什么区别？
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
- React的生命周期中的isBatchingUpdates了解吗？Transaction知道吗
- React的vdom如何实现？jsx是怎样解析的？

- forceUpdate经历了哪些生命周期，子组件呢?
- Flux架构模式
- 手写实现一个 Redux 中的 reducer (state, action) => newState？
- 了解fiber吗，做了什么优化，描述一个使用fiber优化前后有区别的场景
- Redux的中间件和node的中间件原理
- mobx-react如何驱动react组件重渲染
- this.$refs中元素的排列顺序；
- Redux有没有做过封装
- react的redux是什么设计模式，react这里用了什么设计模式
- 你们 abort 机制怎么设计的，了解过原理吗

- react数据通信方式
``` 
React

父子组件,父->子直接用Props,子->父用callback回调
非父子组件,用发布订阅模式的Event模块
项目复杂的话用Redux、Mobx等全局状态管理管库
用新的Context Api
```

- 介绍 React 中的 Refs 及其使用场景？
``` 
Refs 是使用 React.createRef() 方法创建的，他通过 ref 属性附加到 React 元素上。要在整个组件中使用 Refs，需要将 ref 在构造函数中分配给其实例属性
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    return <div ref={this.myRef} />
  }
} 

由于函数组件没有实例，因此不能在函数组件上直接使用 ref。可以通过再申明一下实例来处理

```
- React 中如何使用 prop 检查？
``` 
import PropTypes from "prop-types"

class User extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }
}

使用 propTypes 并不是必需的，但这是一个非常棒的减少错误的实践
使用 PropTypes.element 可以指定只传递一个子代
defaultProps 用来确保 this.props 在父组件没有指定的情况下有一个初始值。类型检查发生在 defaultProps 赋值之后，所以类型检查也会应用在 defaultProps 上。

```
- 为何 react 点击事件放在 settimeout 会拿不到 event 对象
- 谈谈如何封装组件
- 说一下你对React的理解？React设计思想？
- 实现一个redux【编程】10几行经典redux
- 懒加载
``` 
es提供的import(), webpack提供的require.ensure()
直接script创建
```
- redux中dispatch原理
-react的合成事件【描述】
- react升到16，有什么坑需要解决【描述】
为什么16的性能好，fiber流程是怎样的【描述】
为什么两个will生命周期要被标记为danger【描述】
用了react的哪些新特性，带来什么收益【举例】
-scope如何实现

muatable和shouldupdate配合、immuatable数据一些对比问题【描述】
3. react 17要做什么规划，concurrent mode【描述】
concurrent mode、去掉危险的生命周期。concurrent mode是react重点面试题了，基于requestidlecallback实现(考虑兼容性，官方自己实现了一个)——浏览器空闲的时候做事情

- forceUpdate 经历了哪些生命周期，子组件呢?
-顺势讲到了closure，以及他的其他应用场景；接着讲到了scope chain，VO，execution context
- react 17要做什么规划，concurrent mode【描述】
  concurrent mode、去掉危险的生命周期。concurrent mode是react重点面试题了，基于requestidlecallback实现(考虑兼容性，官方自己实现了一个)——浏览器空闲的时候做事情
- react钩子函数为什么不能循环调用
- React.memo 原理
