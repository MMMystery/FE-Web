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

- HTML中attribute和property的区别是什么？
``` 
<input id="the-input" type="typo" value="Name:" /> // 在页面加载后,我们在这个input中输入 "Jack"

attribute 是我们在 html 代码中经常看到的键值对

// attribute still remains the original value
input.getAttribute('id') // the-input
input.getAttribute('type') // typo
input.getAttribute('value') // Name:


property 是 attribute 对应的 DOM 节点的 对象属性 (Object field)
// property is a different story
input.id // the-input
input.type //  text
input.value // Jack


attribute是dom元素在文档中作为html标签拥有的属性；
property就是dom元素在js中作为对象拥有的属性。
对于html的标准属性来说，attribute和property是同步的，是会自动更新的
但是对于自定义的属性来说，他们是不同步的

```

- html一个标签input的type属性，要求十个
``` 
text
button
checkbox
radio
file
email
number
time
color
week
url
image
password
submit

```

- 预加载
```  
<link rel="preload" href="http://example.com">
预加载可以一定程度上降低首屏的加载时间，因为可以将一些不影响首屏但重要的文件延后加载，唯一缺点就是兼容性不好
```

- 预渲染
``` 
<link rel="prerender" href="http://poetries.com">
预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染
```

- src和href的区别

``` 

src是指向外部资源的位置，指向的内容会嵌入到文档中当前标签所在的位置，在请求src资源时会将其指向的资源下载并应用到文档内，如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，知道将该资源加载、编译、执行完毕，所以一般js脚本会放在底部而不是头部。
href是指网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
```

- rel="noopener"` 应在什么场景下使用，为什么？
``` 
rel="noopener" 是 <a> 超链接标签的一个属性。他可以禁止打开的新页面中使用 window.opener 属性，这样一来打开的新页面就不能通过 window.opener 去操作你的页面。

因此 rel="noopener" 应在打开新页面的场景下使用，否则就会导致严重的安全漏洞。如新页面可以通过 window.opener.location = newURL 将你的页面导航至任何网址。


```

- 重绘重排的原理，如果DOM下100个节点更新那会重排100次吗？

``` 
重排触发情况：

添加或删除可见的DOM元素
元素位置改变
元素本身的尺寸发生改变
内容改变
页面渲染器初始化
浏览器窗口大小发生改变

如果是每次都是单独设值的方式是会的，可以改为成一个对象一次性修改，减少重排次数。

现在可以用虚拟dom比较一次性进行更新替换。

另外的优化方案：
利用DocumentFragment对象：DocumentFragment对象不包含在真实的文档流之中，因此对其修改不会触发热reflow和repaint。DocumentFragment对象是一个无父节点的最小化文档对象，是一个轻量级的存储一段包含多个节点的文档结构。当将该对象插入DOM树时，其通常会将其子孙节点一并插入。可以使用createDocumentFragment创建该对象，然后使用appendChild等方法插入到DOM树。

```

- 说一下HTML5 drag api
```  
参考回答：
  dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。
  darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
  
  dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
  
  dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
  
  dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
  
  drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
  
  dragend：事件主体是被拖放元素，在整个拖放操作结束时触发
```
