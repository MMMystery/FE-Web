看掘金的webpack收藏夹


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

- loader的原理

``` 

```

- webpack4.0，5.0做了什么更新

module.exports={
    //入口文件的配置项
    entry:{},
    //出口文件的配置项
    output:{},
    //模块：例如解读CSS,图片如何转换，压缩
    module:{},
    //插件，用于生产模版和各项功能
    plugins:[],
    //配置webpack开发服务功能
    devServer:{}
}


- webpack原理和机制,怎么实现的
``` 
工作原理概括
基本概念
在了解 Webpack 原理前，需要掌握以下几个核心概念，以方便后面的理解：

Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情。


```
- webpack加载顺序
- webpack执行的过程

```
初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。
编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。
```


- webpack里面的插件是怎么实现的
- webpack的入口文件怎么配置，多个入口怎么分割
```  
entry: {
        'index1': './src/index1.js',
        'index2': './src/index2.js',
        'index3': './src/index3.js'
    },

```
- css浏览器兼容在webpack里怎么配
``` 
//postcss-loader autoprefixer postcss 处理浏览器兼容
```
- webpack配置用到webpack.optimize.UglifyJsPlugin这个插件，有没有觉得压缩速度很慢，有什么办法提升速度
- webpack的分割配置
``` 
SplitChunksPlugin，并通过内置的optimization配置段进行配置

默认只对两种情况进行分割：一是异步加载的module，二是被其他chunk引用次数大于等于2的module
默认生产chunk最小为30k
默认有两个cacheGroup，一个为vendors用于处理第三方依赖库；一个是default(处理当module被引用等于或超过2次时情况)

```
- babel 原理 babel 的编译原理，抽象语法树，babel把ES6转成ES5或者ES3之类的原理是什么，有没有去研究。
- babel编译原理

```
babylon 将 ES6/ES7 代码解析成 AST
babel-traverse 对 AST 进行遍历转译，得到新的 AST
新 AST 通过 babel-generator 转换成 ES5

```
- async 经过 babel 处理后的代码看过吗
- source-map

```
在开发环境中我们使用：cheap-module-source-map
在生产环境中我们使用：false（不需要map包）。

```
- webpack哪里负责压缩js，哪里负责压缩css

``` 
分别是：
uglifyjs-webpack-plugin
optimize-css-assets-webpack-plugin


```
- 假如有2个团队，一个团队想用另一个团队的一个类库，并且还是想在用到的时候才加进来，怎么办？
``` 
webpack中的externals去配置一个cmd的异步引入
```

- webpack3.0，4.0区别
``` 
1.mode

webpack增加了一个mode配置，只有两种值development | production。对不同的环境他会启用不同的配置。

2.CommonsChunkPlugin

CommonChunksPlugin已经从webpack4中移除。
可使用optimization.splitChunks进行模块划分（提取公用代码）。
但是需要注意一个问题，默认配置只会对异步请求的模块进行提取拆分，如果要对entry进行拆分
需要设置optimization.splitChunks.chunks = 'all'。

3.webpack4使用MiniCssExtractPlugin取代ExtractTextWebpackPlugin。

4.代码分割。

使用动态import，而不是用system.import或者require.ensure

5.vue-loader。

使用vue-loader插件为.vue文件中的各部分使用相对应的loader，比如css-loader等

6.UglifyJsPlugin

现在也不需要使用这个plugin了，只需要使用optimization.minimize为true就行，production mode下面自动为true

optimization.minimizer可以配置你自己的压缩程序

```

- babel 怎么转化 class extend 的
- babel 怎么配置
- babel把ES6转成ES5或者ES3之类的原理是什么，有没有去研究。
- 实现webpack的vconsole的插件

简单描述了一下这几个属性是干什么的。
描述一下npm run dev / npm run build执行的是哪些文件
通过配置proxyTable来达到开发环境跨域的问题，然后又可以扩展和他聊聊跨域的产生，如何跨域
最后可以在聊聊webpack的优化，例如babel-loader的优化，gzip压缩等等
webpack 中的 loader 是如何实现的？
webpcak HMR原理
打包优化
webpack 优化
- webpack的css-loader原理讲一下
用过什么webpack的loader和plugin
webpack的loader和plugin的原理
``` 
Compiler 和 Compilation
在开发 Plugin 时最常用的两个对象就是 Compiler 和 Compilation，它们是 Plugin 和 Webpack 之间的桥梁。 Compiler 和 Compilation 的含义如下：

Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options， loaders， plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；
Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。
Compiler 和 Compilation 的区别在于：Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。

```
- bable原理
- webpack如何找到依赖关系的
- webpack打包的整个过程
- webpack是按照什么进行分chunk打包的？
- 抽取公共文件是怎么配置的
- import { Button } from 'antd'，打包的时候只打包button，分模块加载，是怎么做到的
对webpack有了解吗？chunk、bundle和module有什么区别？
说说hash、chunkhash和contenthash的区别？
- babel的stage-1，stage-2，stage-3？
- webpack.then原理
- require懒加载啊
- max-chunk啥的
- webpack如何优化编译速度
- Webpack 打包出来的文件如何拆包？
- 如何编写loaders和plugins
- webpack用过吗？摇树treeshaking是什么，什么场景下用过？
``` 
就是清理无用的代码。

利用ES6模块的特点：
只能作为模块顶层的语句出现
import 的模块名只能是字符串常量
import binding 是 immutable的
代码擦除：uglify阶段删除无用代码
使用方法很简单，webpack配置中的wbpack.prod.js中只需要设置
mode: 'production',

```
- 我看到你的webpack配置用到webpack.optimize.UglifyJsPlugin这个插件，有没有觉得压缩速度很慢，有什么办法提升速度。

- Loader处理Scss为例子
``` 
以处理 SCSS 文件为例：

SCSS 源代码会先交给 sass-loader 把 SCSS 转换成 CSS；
把 sass-loader 输出的 CSS 交给 css-loader 处理，找出 CSS 中依赖的资源、压缩 CSS 等；
把 css-loader 输出的 CSS 交给 style-loader 处理，转换成通过脚本加载的 JavaScript 代码；
可以看出以上的处理过程需要有顺序的链式执行，先 sass-loader 再 css-loader 再 style-loader。

```


