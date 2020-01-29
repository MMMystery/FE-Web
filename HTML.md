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
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>

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