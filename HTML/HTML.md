- 说说常用的 meta 标签
``` 
一、SEO相关：

1.页面关键词
<meta name="keywords" content="页面关键词（例如：音乐、下载、娱乐、新闻）" />
2.页面描述
<meta name="description" content="想要描述的内容" />
3.搜索引擎索引方式
　　<meta name="robots" content="index,follow" />
　　<!--
　　all：文件将被检索，且页面上的链接可以被查询；
　　none：文件将不被检索，且页面上的链接不可以被查询；
　　index：文件将被检索；
　　follow：页面上的链接可以被查询；
　　noindex：文件将不被检索；
　　nofollow：页面上的链接不可以被查询。
　　-->
4.页面重定向和刷新
<meta http-equiv="refresh" content="0;url=" />
5.设置作者
<meta name="author" content="振礼硕晨" /> 

二、移动设备相关：
1.viewport
<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
   initial-scale：初始的缩放比例
   minimum-scale：允许用户缩放到的最小比例
   maximum-scale：允许用户缩放到的最大比例
   user-scalable：用户是否可以手动缩放


2.WebApp全屏模式
<!-- 启用 WebApp 全屏模式 -->
<meta name="apple-mobile-web-app-capable" content="yes" /> 

3.隐藏状态栏/设置状态栏颜色
<!-- 隐藏状态栏/设置状态栏颜色，只有在开启WebApp全屏模式时才生效 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />


4.添加到主屏后的标题
<meta name="apple-mobile-web-app-title" content="标题">

5.忽略数字自动识别为电话号码
<meta content="telephone=no" name="format-detection" />

6.忽略识别邮箱
<meta content="email=no" name="format-detection" />


三、网页相关：
1.申明网页的编码
<meta charset='utf-8' />
2.优先使用 IE 最新版本和 Chrome
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta http-equiv="X-UA-Compatible" content="IE=6" ><!-- 使用IE6 -->
<meta http-equiv="X-UA-Compatible" content="IE=7" ><!-- 使用IE7 -->
<meta http-equiv="X-UA-Compatible" content="IE=8" ><!-- 使用IE8 -->

3.禁止浏览器从本地计算机的缓存中访问页面内容
// 这样设定，访问者将无法脱机浏览。
<meta http-equiv="Pragma" content="no-cache">

4.站点适配
主要用于PC-手机页的对应关系。
format:[wml|xhtml|html5]根据手机页的协议语言，选择其中一种
url:代表当前PC页所对应的手机页URL，两者必须是一一对应关系。
<meta name="mobile-agent"content="format=[wml|xhtml|html5]; url=url">

5.转码申明
用百度打开网页可能会对其进行转码（比如贴广告），避免转码可添加如下meta。
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

-  async, defer以及何时使用data-*。

```
async和defer
	1	<script src="script.js"></script> 没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
	2	<script async src="script.js"></script> 有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。
	3	<script defer src="myscript.js"></script> 有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。
    
    如果有多个defer脚本，会按照顺序下载解析。而多个async脚本下载与解析的顺序是不一定的，所以如果脚本之间有依赖关系不要用async

data-*
用于存储页面或应用程序的私有自定义数据

```


- 网页内容高度


``` 
页可见区域宽： document.body.clientWidth;
网页可见区域高： document.body.clientHeight;
网页可见区域宽： document.body.offsetWidth (包括边线的宽);
网页可见区域高： document.body.offsetHeight (包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高： document.body.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;
屏幕可用工作区高度： window.screen.availHeight;
浏览器可视高区域高度：window.innerHeight


```

- 加载流程
```
document.ready等价于DOMContentLoaded：表示文档结构已经加载完成（不包含图片等非文字媒体文件）
window.onload：表示页面包含图片等文件在内的所有元素都加载完成

```


- link与@import的区别
```
从属关系区别：
@import是CSS提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS，Rel连接属性，设置浏览器资源提示符preload、prefetch等。

加载顺序区别：
HTML文档在解析的过程当中，如果遇到link标签，则会立即发起获取CSS文件资源的请求；@import引入的CSS将在页面加载完毕后才会被加载。
```


- Label的作用是什么？是怎么用的？
``` 

label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

<label for="Name">Number:</label>
<input type=“text“name="Name" id="Name"/>

<label>Date:<input type="text" name="B"/></label>

```
- 实现页面加载进度条
- script标签属性
- HTML中attribute和property的区别是什么？
- html一个标签input的type属性，要求十个
- src和href的区别

``` 

src是指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在的位置，在请求src资源时会将其指向的资源下载并应用到文档内，如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，知道将该资源加载、编译、执行完毕，所以一般js脚本会放在底部而不是头部。
href是指网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
```