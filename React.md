- React的Dom的diff算法描述一下
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

- 简述路由原理以及react-router的内部原理解释。

```   
路由原理

前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

hash 模式
history 模式


react-router：

实现URL与UI界面的同步。其中在react-router中，URL对应Location对象，而UI是由react components来决定的，这样就转变成location与components之间的同步问题

看这个链接：https://www.jianshu.com/p/d991a4a55ae1


```
- redux这一类的工具在解决什么问题，它的本质原理详述。

```   
Redux是将整个应用状态存储到一个地方上称为store,里面保存着一个状态树store tree,组件可以派发(dispatch)行为(action)给store,而不是直接通知其他组件，组件内部通过订阅store中的状态state来刷新自己的视图。

Redux三大原则
唯一数据源
保持只读状态
数据改变只能通过纯函数来执行

```


- react setState 机制
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
- React V16 生命周期函数用法
```   
链接：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

```

- 说说对React Hooks的理解
- React Hooks当中的useEffect是如何区分生命周期钩子的


- 什么是高阶组件(HOC)

```
高阶组件(Higher Order Componennt)本身其实不是组件，而是一个函数，这个函数接收一个元组件作为参数，然后返回一个新的增强组件，高阶组件的出现本身也是为了逻辑复用
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
- redux主要做什么的，用过redux的一些中间件吗，简单说一下

```   
redux中间件redux-saga

redux-saga相当于在Redux原有数据流中多了一层，通过对Action进行监听，从而捕获到监听的Action，然后可以派生一个新的任务对state进行维护（这个看项目本身的需求），通过更改的state驱动View的变更。

```