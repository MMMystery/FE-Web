- React的Dom的diff算法描述一下
- React的使用经验，react-router的内部原理解释。
- redux这一类的工具在解决什么问题，它的本质原理详述。
- react setState 机制
- React V16 生命周期函数用法
- 简述路由原理
- 说说对React Hooks的理解
- React Hooks当中的useEffect是如何区分生命周期钩子的
- 什么是高阶组件(HOC)

```
高阶组件(Higher Order Componennt)本身其实不是组件，而是一个函数，这个函数接收一个元组件作为参数，然后返回一个新的增强组件，高阶组件的出现本身也是为了逻辑复用
```
- 如何避免组件的重新渲染？

``` 
React.memo():这可以防止不必要地重新渲染函数组件


PureComponent:这可以防止不必要地重新渲染类组件


这两种方法都依赖于对传递给组件的props的浅比较，如果 props 没有改变，那么组件将不会重新渲染。虽然这两种工具都非常有用，但是浅比较会带来额外的性能损失，因此如果使用不当，这两种方法都会对性能产生负面影响。
通过使用 React Profiler，可以在使用这些方法前后对性能进行测量，从而确保通过进行给定的更改来实际改进性能。
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

如何更新状态和不更新状态

- 如何在React中应用样式

```
<div className="App">
<div style={{backgroundColor:'orange'}}>
```
什么是Redux及其工作原理
什么是React路由器及其工作原理
什么是错误边界
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
什么是传送门(Portals)
什么是 Context
什么是 Hooks
如何提高性能
如何在重新加载页面时保留数据
如何从React中调用API

- redux中的reducer（纯函数）

```
Redux数据流里，reduces其实是根据之前的状态（previous state）和现有的action（current action）
更新state(这个state可以理解为上下累加器的结果）
每次redux reducer被执行时，state和action被传入，这个state根据action进行累加或者是'自身消减'(reduce),
进而返回最新的state,这也就是典型reduce函数的用法：state ->  action ->  state


```
- redux主要做什么的，用过redux的一些中间件吗，简单说一下