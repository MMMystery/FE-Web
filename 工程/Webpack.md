
- webpack的结构
``` 
module.exports={
    // 通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化
    mode: 'development',

    // 在开发环境中我们使用：cheap-module-source-map
       在生产环境中我们使用：false（不需要map包）。
    devtool: 'cheap-module-source-map',


    //入口文件的配置项，当我们需要多个入口文件的时候，可以把entry写成一个对象
    entry:{
        main: './src/index.js'
    },
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js' // 可以将第三方依赖单独打包，实现被称为长效缓存的通用模式
     }


    //出口文件的配置项，如果你定义的入口文件有多个，那么我们需要使用占位符来确保输出文件的唯一性
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    // 打包优化
    optimization：{
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        runtimeChunk: true,
    }
    // resolver 是一个库(library)，用于帮助找到模块的绝对路径。一个模块可以作为另一个模块的依赖模块，然后被后者引用
       resolver 帮助 webpack 找到 bundle 中需要引入的模块代码，这些代码在包含在每个 require/import 语句中。
    resolve

    // resolveLoader 配置选项可以用来为 Loader 提供独立的解析规则。
    resolveLoader

    //模块：例如解读CSS,图片如何转换。里面使用loader
    module:{
        rules: [
           {     
                test: /\.(js|mjs)$/,
                exclude: /@babel(?:\/|\\{1,2})runtime/,
                loader: require.resolve('babel-loader'),
                options: {}
            }
        ]
    },

    loader的作用：
    loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
    loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块
    本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。

    babel-loader： 让下一代的js文件转换成现代浏览器能够支持的JS文件。
    scss-loader,css-loader,style-loader,postcss-loader。 //postcss-loader里有用autoprefixer插件,主要是对css文件添加兼容性前缀
    file-loader,url-loader，eslint-loader


    //插件，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。插件接口功能极其强大，可以用来处理各种各样的任务。
    webpack 插件是一个具有 apply 属性的 JavaScript 对象。apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。
    plugins:[
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    HtmlWebpackPlugin // 打包项目中的html文件, 并生成对应打包的html文件的插件
    optimize-css-assets-webpack-plugin // 处理css的插件
    HotModuleReplacementPlugin //热更新插件
    UglifyJsPlugin: JS的压缩混淆
    webpack-bundle-analyzer可视化分析包
    使用CommonsChunkPlugin插件将react,,react-dom,react-router-dom包单独导出成vendor.js。（webpack4.0后已经直接改为使用optimization里配置即可）
    

    
    node
    // 性能开关
    performance: false 


    // externals

    // 最后这块独立到webpackDevServer.config.js里，配置webpack开发服务功能，服务于webpack-dev-server  内部封装了一个express 
    devServer:{} 


   其他：runtime 和 manifest
}

```

- webpack构建流程
``` 

```

- webpack 和 rollup 有什么相同和不同点

- webpack哪里负责压缩js，哪里负责压缩css

``` 
分别是：
uglifyjs-webpack-plugin
optimize-css-assets-webpack-plugin

```
- webpack生态圈
``` 
HMR配置本地热更新
Express搭建本地开发环境
Babel配置ES2015
ESlint检查代码格式
Tree-shaking去除无用的代码

```

- webpack 原理和机制
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
函数式编程中有组合的概念, 函数式编程一般的实现方式是从右往左
```

- loader的原理

``` 

```

- webpack的代码分割
``` 
Code Splitting 一般需要做这些事情：

为 Vendor 单独打包（Vendor 指第三方的库或者公共的基础组件，因为 Vendor 的变化比较少，单独打包利于缓存）
为 Manifest （Webpack 的 Runtime 代码）单独打包
为不同入口的公共业务代码打包（同理，也是为了缓存和加载速度）
为异步加载的代码打一个公共的包

```

- webpack执行的过程

```
初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。
编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。
```



- webpack的分割配置
``` 
SplitChunksPlugin，并通过内置的optimization配置段进行配置

默认只对两种情况进行分割：一是异步加载的module，二是被其他chunk引用次数大于等于2的module
默认生产chunk最小为30k
默认有两个cacheGroup，一个为vendors用于处理第三方依赖库；一个是default(处理当module被引用等于或超过2次时情况)

```


- babel 原理
- babel 怎么转化 class extend 的
- babel 怎么配置
- babel编译原理，抽象语法树，babel把ES6转成ES5或者ES3之类的原理是什么，有没有去研究。

```
babel-core：babel转译器本身，提供了babel的转译API，如babel.transform等，用于对代码进行转译。

->ES6代码输入
->babylon 将 ES6/ES7 代码解析成 AST  // 代码在 “编译”（解释型语言在运行时也有编译的过程） 的过程中，都会生成一种树状的中间状态，这就是 AST
->babel-traverse 对 AST 进行遍历转译，得到新的 AST
->babel-generator 根据AST转换成 ES5

```
- async 经过 babel 处理后的代码看过吗
``` 
async是ES7出的语法糖，转换后肯定就是generator。

```




- 假如有2个团队，一个团队想用另一个团队的一个类库，并且还是想在用到的时候才加进来，怎么办？
``` 
webpack中的externals（外部扩展）去配置一个cmd的异步引入
这样的话：防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
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

6.UglifyJsPlugin

现在也不需要使用这个plugin了，只需要使用optimization.minimize为true就行，production mode下面自动为true

optimization.minimizer可以配置你自己的压缩程序

```

- webpack4.0，5.0做了什么更新

webpack的loader和plugin的原理
``` 


plugin的原理:

Compiler 和 Compilation
在开发 Plugin 时最常用的两个对象就是 Compiler 和 Compilation，它们是 Plugin 和 Webpack 之间的桥梁。 Compiler 和 Compilation 的含义如下：

Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options， loaders， plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例；
Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象。
Compiler 和 Compilation 的区别在于：Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译。

```


- webpack的css-loader原理讲一下
- webpack 中的 loader 是如何实现的？

- Loader处理Scss为例子
``` 
以处理 SCSS 文件为例：

SCSS 源代码会先交给 sass-loader 把 SCSS 转换成 CSS；
把 sass-loader 输出的 CSS 交给 css-loader 处理，找出 CSS 中依赖的资源、压缩 CSS 等；
把 css-loader 输出的 CSS 交给 style-loader 处理，转换成通过脚本加载的 JavaScript 代码；
可以看出以上的处理过程需要有顺序的链式执行，先 sass-loader 再 css-loader 再 style-loader。

```




- webpack里面的插件是怎么实现的
- 实现webpack的vconsole的插件

- 如何编写loaders和plugins







- webpack 打包优化
- 最后可以在聊聊webpack的优化，例如babel-loader的优化，gzip压缩等等
- webpack配置用到webpack.optimize.UglifyJsPlugin这个插件，有没有觉得压缩速度很慢，有什么办法提升速度
- 描述一下npm run dev / npm run build执行的是哪些文件
- webpack如何找到依赖关系的
``` 
webpack 递归地构建一个依赖图，这个依赖图包含着应用程序所需的每个模块，然后将所有这些模块打包为少量的 bundle
```
- webpack打包的整个过程
- webpack是按照什么进行分chunk打包的？
- 抽取公共文件是怎么配置的
- import { Button } from 'antd'，打包的时候只打包button，分模块加载，是怎么做到的
``` 
通过 babel-plugin-import 配置处理。

{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css"
    }]
  ]
}
```
说说hash、chunkhash和contenthash的区别？
- babel的stage-1，stage-2，stage-3？
- webpack.then原理
- require懒加载
- max-chunk啥的
- module、chunk和bundle区别
``` 
module 就是没有被编译之前的代码，通过 webpack 的根据文件引用关系生成 chunk 文件，webpack 处理好 chunk 文件后，生成运行在浏览器中的代码 bundle

Bundle是由多个不同的模块生成，bundles是最终打包出来的源文件版本。

```
- webpack如何优化编译速度
- Webpack 打包出来的文件如何拆包？


- webpack的dll
- webpack的scop hosting
- webpack用过吗？摇树treeshaking是什么，什么场景下用过？
``` 
就是清理无用的代码。

实现条件：
使用ES2015模块语法（即import和export）。
包括支持死代码删除的缩小器。例如，UglifyJSPlugin

默认使用UglifyJSPlugin的时候就会删除无用代码
另外webpack配置中的wbpack.prod.js中只需要设置 mode: 'production', 生产环境会默认打开。

```




