
- webpack 打包原理
- Webpack热更新实现原理
- 用过哪些loader和plugin,plugin与loader的区别
- loader的执行顺序为什么是后写的先执行
- webpack执行的过程

初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。
编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。