
- webpack 打包原理
```  
webpack 是一个模块打包机，将根据文件间的依赖关系对其进行静态分析，然后将这些模块按指定规则生成静态资源

当 webpack 处理程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle

识别入口文件
通过逐层识别模块依赖(Commonjs、amd或者es6的import，webpack都会对其进行分析，来获取代码的依赖)
webpack做的就是分析代码，转换代码，编译代码，输出代码
最终形成打包后的代码

以下功能：
打包：将多个文件 打包成一个文件，减少服务器压力和下载带宽
转换：将预编译语言 转换成 浏览器识别的语言
优化：性能优化

特点：
代码拆分
智能解析
快速运行

```

- Webpack热更新实现原理（dev-server是怎么跑起来）

```  
指当你对代码修改并保存后，webpack将会对代码进行重新打包，并将改动的模块发送到浏览器端，浏览器用新的模块替换掉旧的模块，去实现局部更新页面而非整体刷新页面。

除了 Webpack，还需要 webpack-dev-server
使用webpack-dev-server去启动本地服务，内部实现主要使用了webpack、express、websocket。

使用express启动本地服务，当浏览器访问资源时对此做响应。
服务端和客户端使用websocket实现长连接
webpack监听源文件的变化，即当开发者保存文件时触发webpack的重新编译。

每次编译都会生成hash值、已改动模块的json文件、已改动模块代码的js文件
编译完成后通过socket向客户端推送当前编译的hash戳
客户端的websocket监听到有文件改动推送过来的hash戳，会和上一次对比

一致则走缓存
不一致则通过ajax和jsonp向服务端获取最新资源
使用内存文件系统去替换有修改的内容实现局部刷新

```

- 用过哪些loader和plugin,plugin与loader的区别

```  
Loader：
Loader是webpack最重要的功能之一。Loader让webpack能够处理不同的文件。loader可以将所有类型的文件转换为webpack能够处理的有效模块

作用：
识别出应该被对应的loader进行转换的文件。（使用test属性）
转换这些文件，从而使其能够被添加到依赖图中（并最终添加到bundle中）。（使用use属性）

例子：
loader可以将sass，less文件的写法转换成css，而不在使用其他转换工具。
可以将ES6或者ES7的代码，转换成大多数浏览器兼容的JS代码。
可以将React中的JSX转换成JavaScript代码。



plugin：
plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程
从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。




区别：

对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程

plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务

```


- loader的执行顺序为什么是后写的先执行

```  
其实为啥是从右往左，而不从左往右，只是Webpack选择了compose方式，而不是pipe的方式而已
函数式编程中有组合的概念
```


- webpack执行的过程

```
初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。
编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。
```


- webpack里面的插件是怎么实现的
- 多个入口怎么分割
- css浏览器兼容在webpack里怎么配
``` 
//postcss-loader autoprefixer postcss 处理浏览器兼容
```
- webpack配置用到webpack.optimize.UglifyJsPlugin这个插件，有没有觉得压缩速度很慢，有什么办法提升速度

- babel 原理 babel 的编译原理，抽象语法树，babel把ES6转成ES5或者ES3之类的原理是什么，有没有去研究。
- babel编译原理

```
babylon 将 ES6/ES7 代码解析成 AST
babel-traverse 对 AST 进行遍历转译，得到新的 AST
新 AST 通过 babel-generator 转换成 ES5

```

- source-map

```
在开发环境中我们使用：cheap-module-source-map
在生产环境中我们使用：false（不需要map包）。

```



