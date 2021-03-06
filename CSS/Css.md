
- CSS盒模型
```
CSS盒模型就是在网页设计中经常用到的CSS技术所使用的一种思维模型。CSS 假定所有的HTML 文档元素都生成了一个描述该元素在HTML文档布局中所占空间的矩形元素框，可以形象地将其看作是一个盒子。CSS 围绕这些盒子产生了一种“盒子模型”概念，通过定义一系列与盒子相关的属性，可以极大地丰富和促进各个盒子乃至整个HTML文档的表现效果和布局结构。
CSS盒模型可以看成是由从内到外的四个部分构成，即内容区（content）、内边距(padding)、边框(border)和外边距(margin)。内容区是盒子模型的中心，呈现盒子的主要信息内容；内边距是内容区和边框之间的空间；边框是环绕内容区和内边距的边界；外边距位于盒子的最外围，是添加在边框外周围的空间。

根据计算宽高的区域我们可以将其分为IE盒模型和W3C标准盒模型，可以通过box-sizing来进行设置：

box-sizing:content-box：W3C标准盒模型
box-sizing:border-box：IE盒模型
```
![](https://user-gold-cdn.xitu.io/2019/11/22/16e930e04e31efa6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

区别：

```
W3C标准盒模型：width(宽度) = content(内容宽度)
```
```
IE盒模型：width(宽度) = content(内容宽度) + padding(内边距) + border(边框)


盒模型对块级元素的行内元素影响一样吗？ 行内元素设置paddingtop之后的内容和其他行内元素的内容是什么关系？


平时开发用的是什么盒子模型?
```

- CSS3新特性

```
transition：过渡动画
animation：帧动画

transform：旋转、缩放、移动或者倾斜
gradient：渐变
shadow：阴影
border-radius：圆角
```

- css常用选择器

```
通配符：*
ID选择器：#ID
类选择器：.class
元素选择器：p、a    等
后代选择器：p span、div a   等
伪类选择器：a:hover 等
属性选择器：input[type="text"]  等

id选择器(#myid)
类选择器(.myclass)
标签选择器(div, h1,p)
相邻选择器（h1 + p）
子选择器(ul > li)
后代选择器(li a)
通配符选择器(*)
属性选择器(a[rel="external"])
伪类选择器(a:hover, li:nth-child)


!important > 行内样式 > ID选择器 > 类选择器 > 标签选择器 > 通配符选择器

行内样式，权值为1000
ID选择器，权值为0100
类，伪类和属性选择器，权值为0010
标签选择器和伪元素选择器，权值为0001
通配符、子选择器、相邻选择器等，权值为0000
继承的样式没有权值
```
- Css优先级红蓝色问题
```
引用的时候同级的话是同优先级的，真正是看样式表里的一个先手顺序是否。后面的会覆盖前面的。
```
- 伪元素和伪类

```
伪类像类选择器一样给已存在某个元素添加额外的样式；伪元素则是给自己虚拟的元素添加样式。
伪类和选择器之间用一个冒号隔开，伪元素则是两个冒号隔

伪元素是真的有元素

伪类： :hover :active :visited //伪类是添加类 
伪元素： ::after  ::before  //伪元素是添加元素

CSS有哪些伪类，实现选择偶数个对象元素的伪类是什么？

```

- 介绍css3中position有哪些属性

```
relative
absolute  //相对于 static 定位以外的第一个父元素进行定位。相对于父元素的外边框定位
fixed // 浏览器窗口进行定位
static // 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明
sticky // 粘性定位 结合了position:relative 和 position:fixed 两种定位功能于一体的特殊定位。当元素在屏幕内，表现为relative，就要滚出显示器屏幕的时候，表现为fixed。适用于滚动吸顶效果
inherit // 规定应该从父元素继承 position 属性的值。

```

- 列出 display 的值，并说明他们的作用

```
none
line
line-block
block
table // 作为块级表格来显示
line-table
table-cell 作为一个表格单元格显示（类似 <td> 和 <th>）
inherit // 从父元素继承
等等一些其他不常用的

```

- BFC

```

BFC就是页面上的一个隔离的独立容器，它是页面中的一块渲染区域，有自己的渲染规则，容器里面的子元素不会影响到外面的元素
因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。

如何创建BFC
1、浮动元素（float不取值为none）
2、绝对定位元素（position是absolute或fixed）
3、display的值是inline-block、table-cell、flex、table-caption或者inline-flex
4、overflow的值不是visible

用处：1.利用BFC避免margin重叠 2.清除浮动 3.用于处理布局

属于同一个BFC的两个相邻的Box会发生margin重叠，所以我们可以设置，两个不同的BFC，也就是我们可以让把第二个p用div包起来，然后激活它使其成为一个BFC


```
- IFC——行内格式化上下文

```
（1）创建方式：

和BFC相比，它的创建方式是被动的、隐式的，是由所包含的子元素来创建：只有在一个区域内仅包含可水平排列的元素时才会生成，这些子元素可以是文本、inline-level元素或inline-block-level元素。

（2）特性：

IFC内部的元素，按从左到右、从上到下的顺序排布；
IFC内部的每个元素，都可以通过设置vertical-align属性，来调整在垂直方向上的对齐；
包含这些内部元素的矩形区域，形成的每一行，被称为line box（行框）。

```


- 清除浮动的方式及优缺点

```
1.额外标签法(在最后一个浮动元素的后面新加一个标签如<div class="clear"></div>，并在其CSS样式中设置clear: both;)


优点：简单，通俗易懂，写少量代码，兼容性好
缺点：额外增加无语义html元素，代码语义化差，后期维护成本大


2.给父级设置高度


优点：简单，写少量代码，容易掌握
缺点：不够灵活，只适用于高度固定的布局


3.触发父级BFC(如给父元素设置overflow:hidden，例如给父元素设置zoom:1。原理是触发父级BFC后，父元素在计算高度时，浮动的子元素也会参与计算)


优点：简单，代码简洁
缺点：设置overflow:hidden容易造成不会自动换行导致超出的尺寸被隐藏掉，无法显示要溢出的元素


4.使用after伪元素，常见的写法如下：

 .clearfix::after {
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    clear: both;
    visibility:hidden;
    font-size: 0;
 }

 .clearfix {
    // 注意此处是为了兼容IE6和IE7浏览器，即触发hasLayout
    zoom: 1;
 }

```



- 水平居中

```
1.常用：
若是行内元素，则直接给其父元素设置text-align: center即可
若是块级元素，则直接给该元素设置margin: 0 auto即可


2.使用flex布局的方式，可以轻松实现水平居中，即使子元素中存在浮动元素也同样适用
.parent {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

3.使用绝对定位的方式，再配合CSS3新增的transform属性

.child {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}

4.使用绝对定位的方式，再配合负值的margin-left(此方法需要固定宽度)

.child {
    position: absolute;
    left: 50%;
    width: 200px; // 假定宽度为200px
    margin-left: -100px; // 负值的绝对值为宽度的一半
}
5.使用绝对定位的方式，再配合left:0;right:0;margin:0 auto;(此方法需要固定宽度)

.child {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 200px; // 假定宽度为200px
}
```


- 垂直居中

```
1.常用：
若元素是单行文本，则直接给该元素设置line-height等于其父元素的高度
若元素是行内块级元素，可以配合使用display:inline-block;vertical-align:middle和一个伪元素来让内容块居中

2.使用flex布局的方式，可以轻松实现垂直居中，即使子元素中存在浮动元素也同样适用


.parent {
    display: flex;
    align-items: center;
}

3.使用绝对定位的方式，再配合CSS3新增的transform属性

.child {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}
4.使用绝对定位的方式，再配合负值的margin-top(此方法需要固定高度)

.child {
    position: absolute;
    top: 50%;
    height: 200px; // 假定高度为200px
    margin-top: -100px; // 负值的绝对值为高度的一半
}
5.使用绝对定位的方式，再配合top:0;bottom:0;margin:auto 0;(此方法需要固定高度)

.child {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 200px; // 假定高度为200px
}
```

- 水平垂直居中
```
1.使用flex布局的方式同样可以轻松实现水平垂直居中

.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

2.使用绝对定位的方式，再配合CSS3新增的transform属性

.child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

3.使用绝对定位的方式，再配合使用负值的margin-top和负值的margin-left(此方法需要同时固定宽度和高度)

.child {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -50px; // 负值的绝对值为高度的一半
    margin-left: -100px; // 负值的绝对值为宽度的一半
    width: 200px; // 假定宽度为200px
    height: 100px; // 假定高度为100px
}

```

- 三栏布局 (如果要求中间的要优先加载，则把中间div块放在前面的就会优先加载)

```
-----------float布局的方式
缺点：
1.这种方法要将中间栏放在最后，因为如果将中间栏放在中间，并且没有对自身进行浮动的话，会占据文档中的位置，导致右边栏并不能完全和左边栏平齐。
2.脱离了文档流，需要父元素设置高度，要么就要清除浮动。不然会有塌陷
<div class="main">
    <div class="left">左</div>
    <div class="right">右</div>
    <div class="center">中</div>
</div>
.center{
    margin-left: 300px;
    margin-right: 300px;
    background-color: #4990E2;
}
.left{
    float: left;
    width: 300px;
    height: 100px;
    background: #631D9F;
}
.right{
    float: right;
    width: 300px;
    height: 100px;
    background: red;
}

------------绝对定位的方式（主体内容可以优先加载）
缺点：脱离了文档流，依赖于left和right的高度，如果两边栏的高度不够，中间的内容区域的高度也会被压缩。
<div class="main">
    <div class="center">中</div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
.center{
    position: absolute;
    top: 0;
    bottom:0;
    left: 300px;
    right: 300px;
    background-color: blue;
}
.left{
    position: absolute;
    left: 0;
    top: 0;
    width: 300px;
    background-color: red;
}
.right{
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    background-color: #3A2CAC;
}

------------flex布局的方式（主体内容可以优先加载）
<div class="main">
    <div class="center">中</div>
    <div class="left">左</div>
    <div class="right">右</div>
</div>
.main {
    display: flex;
    justify-content: space-between;
}
.left{
    order: 1;
    width: 400px;
    background-color: red;
}
.center{
    order: 2;
    flex: 1;
    background-color: blue;
}
.right{
    order: 3;
    background-color: red;
    width: 400px;
}
------------table布局
缺点：中间的center区域不能优先渲染。
<div class="container">
    <div class="column left">left</div>
    <div class="column center">center</div>
    <div class="column right">right</div>
  </div>
.column {
  display: table-cell;
  height: 100px;
  min-height: 100px;
}
.left {
  width: 200px;
  min-width: 200px;
  background: #ffbbff;
}
.center {
  width: 100%;
  background: #bfefff;
}
.right {
  width: 150px;
  min-width: 150px;
  background: #eeee00;
}

------------grid布局
缺点：兼容性问题，中间的center区域不能优先渲染。
1.给container设置为display：grid
2.设置三栏的高度：grid-template-rows：100px
3.设置三栏的宽度，中间自适应，两边固定：grid-template-columns：200px auto 200px；
.container {
    display: grid;
    width: 100%;
    grid-template-rows: 100px;
    grid-template-columns: 200px auto 200px;
}

------------圣杯布局（主体内容可以优先加载）
缺点：缺点是三栏高度不统一，而且center是在container的padding中，宽度小的时候会出现混乱，所以最好给body设置一个最小宽度
<div class="container">
    <div class="column center">center</div>
    <div class="column left">left</div>
    <div class="column right">right</div>
</div>
.container {
  padding-left: 200px;
  padding-right: 150px;
}
.column {
  position: relative;
  float: left;
}
.left {
  right: 200px;
  margin-left: -100%;
  width: 200px;
  background: #ffbbff;
}
.center {
  width: 100%;
  background: #bfefff;
}
.right {
  left: 150px;
  margin-left: -150px;
  width: 150px;
  background: #eeee00;
}

------------双飞翼布局（主体内容可以优先加载）
优点：主体内容可以优先加载
<div class="container">
    <div class="column center">
        <div class="center-inner">center</div>
    </div>
    <div class="column left">left</div>
    <div class="column right">right</div>
</div>

.column {
    float: left;
}
.left {
    margin-left: -100%;
    width: 200px;
    background: #ffbbff;
}
.center {
    width: 100%;
}
.center-inner {
    margin-left: 200px;
    margin-right: 150px;
    background: #bfefff;
}
.right {
    margin-left: -150px;
    width: 150px;
    background: #eeee00;
}



链接：https://www.jianshu.com/p/81ef7e7094e8
圣杯布局和双飞翼布局的区别：

圣杯布局，为了中间div内容不被遮挡，将中间div设置了左右padding-left和padding-right后，将左右两个div用相对布局position: relative并分别配合right和left属性，以便左右两栏div移动后不遮挡中间div。
双飞翼布局，为了中间div内容不被遮挡，直接在中间div内部创建子div用于放置内容，在该子div里用margin-left和margin-right为左右两栏div留出位置。


```

- 实现左右两边贴边的九宫格

```
.card:nth-child(3n+3) {
  margin-right: 0
}
.card:not(:nth-child(3n+3)) {
  margin: 24px 32px 0 0;
}
// 考虑兼容性，使用nth-child的方式。

flex的方式



grid的方式
{
display: grid;
grid-template-columns: repeat(auto-fill, 226px);
grid-column-gap: 32px;
grid-row-gap: 24px;
}
```


- flex布局

```
flex-direction //主轴方向
flex-wrap // 轴线如何换行 nowrap|wrap|wrap-reverse|initial|inherit;
flex-flow //上述两者的简写

justify-content  //主轴的对齐方式 flex-start|flex-end|center|space-between|space-around|initial|inherit;
align-items // 交叉轴的对齐方式

align-content // 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用


flex:1 // flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性 默认值：0 1 auto
flex: 1 1 0;

flex-grow用于设置各item项目将相对于其他灵活的项目进行扩展的量
flex-shrink用于设置item项目将相对于其他灵活的项目进行收缩的量。
flex-basis用于设置项目的长度

```
- grid布局


- CSS3中transition和animation的属性

```
transition(过渡动画)
    transition-property: 设定哪个css属性来过渡
    transition-duration:设定过渡时长
    transition-timing-function:设定速度曲线
    transition-delay:设定何时开始
animation(关键帧动画)
    animation-name	指定要绑定到选择器的关键帧的名称(关键帧另外定义)
    animation-duration	动画指定需要多少秒或毫秒完成
    animation-timing-function	设置动画将如何完成一个周期
    animation-delay	设置动画在启动前的延迟间隔。
    animation-iteration-count	定义动画的播放次数。
    animation-direction	方向
    animation-fill-mode: 禁止模式

使用css实现一个持续的动画效果

animation:mymove 5s infinite;
@keyframes mymove {
from {top:0px;}
to {top:200px;}
}


关键帧动画动画如何暂停？如要暂停动画，就要用到animation-play-state这个属性。

animation-play-state属性有两个值：
paused: 暂停动画;
running: 继续播放动画;
```


- 怎么样使一个 div 居中于浏览器中间

```
    div{

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
     }
```




- 如何实现一个最大的正方形

```
 section {
    width:100%;
    padding-bottom: 100%;
    background: #333;
}
```


- 手写圆、半圆、三角形、梯形、平行四边形、椭圆形、扇形、贪吃蛇蛇头、五角星、箭头，圆环
```

  .div{
  width:100px;
  height:100px
  border-radius: 50px
  background: red;
  }

  // 左半圆
  .div{
    width:100px;
    height:100px
    border-radius: 50px 0 0 50px;
    background: red;
    }

    .div {
      width:0;
      height:0;
      border-top: 50px solid transparent;
        border-bottom: 50px solid transparent;
        border-right: 50px solid red;
    }

    // 梯形
    {
        width: 120px;
        height: 0px;
        border-bottom:120px solid red ;
        border-right: 60px solid transparent;
        border-left: 60px solid transparent;
    }

    // 平行四边形
    {
            width: 0px;
            height: 0px;
            border:100px solid red ;
            transform: skew(30deg);
    }
    // 椭圆形
    {
        width: 200px;
        height: 50px;
        border:1px solid red;
        border-radius:100px;
        }

        // 扇形

        {
                width: 0px;
                height: 0px;
                border-radius: 50%;
                border :140px solid transparent;
                border-bottom:140px solid red;
        }

      // 贪吃蛇蛇头
      {
              width: 0px;
              height: 0px;
              border-radius: 50%;
              border:140px solid red;
              border-right :140px solid transparent;
      }

// 圆环
.demo{
        width : 160px;
        height : 160px;
        border: 20px solid green;
        border-radius : 50%;
    }

  ```
- 实现一个朝左的三角形
```

.content {
  width:0;
  height:0;
  border:10px;
  border-color: transparent #3366ff transparent transparent;
  }
```




- css实现单行截取，多行截取，省略标记(...)

```
单行：
div{
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;

}

多行：
div {
 overflow: hidden;
 text-overflow:ellipsis;

 display: -webkit-box;
 -webkit-line-clamp: 2;
 -webkit-box-orient: vertical;

}

```
- 实现控制100个字超出则显示...
```
s.length > 100 ? "...展开" : "";
```

- 关于css3里阴影的一些知识

```
box-shadow:阴影水平偏移值（可取正负值）； 阴影垂直偏移值（可取正负值）；阴影模糊值；阴影颜色
box-shadow:2px 2px 5px #333333

```




- 用css3写一个环形进度条
``` 
先实现一个右半圆环，然后加入旋转动画，左半圆环也是同理。（理解实现方式即可）
.circle__right {
  width : 200px;
  height : 200px;
  border: 12px solid transparent;
  border-top: 12px solid #bfd1ff;
  border-right: 12px solid #bfd1ff;
  border-radius : 50%;
  transform: rotate(-135deg);
  animation: circle__right 3s linear infinite;
}
@keyframes circle__right {
  50% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
  }
}


```

- css禁用鼠标事件
```
cursor: not-allow;
```
- css禁止选中
```
user-select: none;
```
- 渐变
```
background-image: linear-gradient(rgba(0,0,0,.2) 50%, transparent 0);

```

- css实现自适应的正方形

```
1.
.div {
    width: 100%;
    height: 100vw;
    background: red;
}
2.
.div {
    width: 100%;
    height: 0;
    padding-bottom: 100%; // 用padding-top也行，不过会把文字挤出去
}
3.
.placeholder {
  width: 100%;
  overflow: hidden; // 关键触发BFC不然折叠了
}

.placeholder:after {
  content: '';
  display: block;
  margin-top: 100%; /* margin 百分比相对父元素宽度计算 */
}

```
- CSS实现宽度自适应100%，宽高16:9的比例的矩形。（和画自适应的正方形很像）

```
div{
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: red;
}
```

- 使用纯CSS实现曲线运动（贝塞尔曲线）

```
transition: all 500ms cubic-bezier(0.250, 0.100, 0.250, 1.000);
用animation也可以

```
- 画一条0.5px的直线

```

1. meta viewport 方式（这样的话原来的1px就变成0.5px了，只在移动端才能看到效果）

<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>


2. 采用transform: scale()的方式

height: 1px;
transform: scaleY(0.5); 缩放

3. 采用阴影
  height: 1px;
  background: none;
  box-shadow: 0 0.5px 0 #000;

4. 采用border-image的方式，需要自己制作一个0.5px的图片

5. 利用hr标签，设置元素属性为0.5px

```



- a标签下划线去除：
```
text-decoration：none

```
- 实现一个下划线
```
和text-decoration里的underline不一样，答案：用box-shadow
```

- 关于行内元素的顶线，中线，基线，底线
```
顶线：中文汉字的的上端沿；
中线：横过英文字母x的中间的线；
基线（base line）并不是汉字文字的下端沿，而是英文字母“x”的下端沿；
底线：中文汉字的下端沿；

vertical-align有下面这些值

baseline： 基线对齐；
sub： 下标显示；
super： 上标显示；
top： 顶端对齐；
text-top： 文本的顶端对齐；
middle： 中部对齐；  //没有研究透的属性
bottom： 底端对齐；
text-bottom：   文本的底端对齐；
```

- 在网页中的应该使用奇数还是偶数的字体？为什么呢？
```
偶数字号相对更容易和 web 设计的其他部分构成比例关系
为了对称的字体用偶数显得更均衡

```
- 怎么让Chrome支持小于12px 的文字？
```
transform:scale(0.8)进行缩放或者使用图片
```

- 让页面里的字体变清晰，变细用CSS怎么做？

```
-webkit-font-smoothing: antialiased;
```


- rem与em,px， dpi，逻辑像素与物理像素的区别

```
rem是根据根元素html font-size计算，而em是根据父级的font-size计算

rem：相对于根元素html的font-size，假如html为font-size：12px，那么，在其当中的div设置为font-size：2rem,就是当中的div为24px
em：相对于父元素计算，假如某个p元素为font-size:12px,在它内部有个span标签，设置font-size：2em,那么，这时候的span字体大小为：12*2=24px

物理像素和逻辑像素，如何获取


```



- 什么是CSS 预处理器 / 后处理器？

```
预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，
  还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。

后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
  是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。

```
- less和sass区别




- outline和border的区别
```
而 outline 是针对链接、表单控件和ImageMap等元素设计，outline 的效果将随元素的 focus 而自动出现，相应的由 blur 而自动消失。
也就是说是outline就是获取焦点后在周围显示出的轮廓
```
- 手写图片瀑布流效果

```
TODO

```
- 一段字符从后台动态返回，长度不确定，要求显示一行就居中，两行就左对齐，三行就结尾显示'...'
- 什么css可以减少重绘
```
改成css对象的形式一次性加入就只触发一次重绘了
比如：
.clickStyle
        {
            background: red;
            color: green;
            font-size: 36px;
        }

```

- 写一个媒体查询
- calc属性使用
```
运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；
calc()函数支持 "+", "-", "*", "/" 运算；
```
- z-index 一定是数越大层级越在上面吗
```
一、定义：

z-index 只适用于元素有定位的情况，表示层级 数值越大 层级越高 展示的位置越靠前。

二、用法：

1、同级关系：

    z-index值较大的元素将叠加在z-index值较小的元素之上 （值可以为负数）

    z-index值相同时 按照文档流顺序排列

2、父子关系：

   如果设置了父元素的z-index，那么子元素无论是否设置z-index都和父元素一致，会在父元素上方

3、同级元素下的子元素关系

  同级元素的z-index生效，那么其子元素覆盖关系由父元素决定，

 （父元素z-index值大的覆盖父元素z-index值小的   子元素在各自父元素的上方）

```
- 哪些可以导致3d加速
```
.cube {
   -webkit-transform: translate3d(250px,250px,250px)
   rotate3d(250px,250px,250px,-120deg)
   scale3d(0.5, 0.5, 0.5);
}
```
- 识别是否是retina屏幕并适配
```
1.retian.js
2. image-set
  background-image: url('img/logo.jpg');
  background-image: -webkit-image-set(url(pic.png) 1x, url(pic@2x.png) 2x);
  background-image: -moz-image-set(url(pic.png) 1x,url(images/pic@2x.png) 2x);
  background-image: -ms-image-set(url(pic.png) 1x,url(images/pic@2x.png) 2x);
  background-image: -o-image-set(url(url(pic.png) 1x,url(images/pic@2x.png) 2x);
3.
  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
         only screen and (min--moz-device-pixel-ratio: 1.5), /* 注意这里的写法比较特殊 */
         only screen and (-o-min-device-pixel-ratio: 3/2),
         only screen and (min-device-pixel-ratio: 1.5) {
   .logo {
           background-image: url('img/logo@2x.jpg');
           background-size: 400px 200px; width: 400px; height: 200px;
       }
  }

```

- visibility:hidden，display:none，opacity（visibility:hidden，opacity点击是否触发事件）
```
display:none隐藏后不占据额外空间，它会产生回流和重绘，而visibility:hidden和opacity:0元素虽然隐藏了，但它们仍然占据着空间，它们俩只会引起页面重绘。

值得注意的是：
visibility:hidden;的元素不会触发绑定的事件。
opacity:0;的元素会触发绑定的事件，例如点击会触发click函数。


```
- 1vw等于多少
```
在PC端，视口指的是在PC端，指的是浏览器的可视区域；

而在移动端，它涉及3个视口：Layout Viewport（布局视口），Visual Viewport（视觉视口），Ideal Viewport（理想视口）。

1.vw：1vw等于视口宽度的1%。

2.vh：1vh等于视口高度的1%。

3.vmin：选取vw和vh中最小的那个。

4.vmax：选取vw和vh中最大的那个。
```
- 实现一个布局，item可以随着容器宽度作出伸缩窗口弹性自适应（item的最小宽度为200px）

- css: 图片自适应撑满容器，但不改变比例
- css: 容器自适应宽高，但比例不变

- 动画实现div无限旋转
- querySelector和querySelectorAll
```
querySelector查询出来的是符合条件的第一个
querySelectorAll查询出来的是一个数组
```
- display:inline-block元素和父元素上下存在间隙，产生原因及解决方案
- 百分比padding，margin是根据什么值计算的以及百分比translate是根据什么值计算的
```
margin、padding的百分比是按照父元素的宽度来计算的
transform中translate，如果传入百分比参数，计算是分别根据自身的宽高来进行的

```

- 容器高度是宽度的两倍 多种写法
- 手撕代码实现 一个带有阴影和高亮的按钮 并且垂直水平居中
- css:如何在一行上三等分三个盒子
```
flex: 1或者都设置33.33%都行
```
- 行内元素对齐***作：顶对齐、底对齐
- 手写css3动画实现从左到右移动30px
- p元素嵌套div标签
- css4新特性？
```
包含元素选择器 :has
不包含元素选择器 :not
块级样式scoped // 样式仅在内部生效
calc函数
```
- css3 实现幻灯片
- 背景色会覆盖border吗
```
会延伸到border。记得设背景图把border圆角给遮挡了。
背景色外延到边框色，使边框色的灰度无效。

解决方法：
background-clip: // 规定背景的绘制区域
    border-box	背景被裁剪到边框盒。
    padding-box	背景被裁剪到内边距框。
    content-box	背景被裁剪到内容框。

```
- 谈谈css预处理器机制
- postcss配置
- media-query用过吗？
- css选择器“+”和“~”的区别
```
最大的区别是’+’指紧跟在后面的某同级元素，而’~’是匹配同级所有。
‘+’是指紧跟在后面的某同级元素
‘~’是指某些同级元素

```
- 简述一下 `@media` 的媒体类型
```
@media 是可根据一个或多个基于媒体特征、媒体类型等条件来使用样式的规则。其包含以下四种媒体类型：

all：适用于所有设备，默认选项
print：仅适用于打印设备
screen：仅适用于台式机、平板电脑、手机等屏幕
speech：仅适用于屏幕阅读器
```
- 使用 flexbox，创建一个 3 列布局，其中每列占据容器的 col- {n} / 12 比率
```
<style lang="scss">
.row {
  display: flex;
  &__col {
    ...
    &--2 {
      flex: 2
    }
    &--7 {
      flex: 7
    }
    &--3 {
      flex: 3
    }
  }
}
</style>
<div class="row">
  <div class="row__col row__col--2"></div>
  <div class="row__col row__col--7"></div>
  <div class="row__col row__col--4"></div>
</div>

```
- 修改样式 style="width:480px!important;”为300px
```
 1.css方法 max-width:300px;
 2.覆盖其样式； transform: scale(0.625)；按比例缩放图片；
 3.js方法 document.getElementsByTagName("img")[0].setAttribute("style","width:300px!important;")

```

- 一个div的放大镜图标的实现（提示用伪元素）
- 实现矩形，水平垂直居中，且宽高比为 2:1
- Css 写一个正方形，大小是父级的一半
- 当子元素的最大高度为100px，父元素的height设置为auto，父元素的实际高度是多少？原理是什么？
- CSS 中解决浮动中高度塌陷的方案有哪些？
```
  解题思路
  
  可以先概括解决高度塌陷问题的两种类型：clear 属性 和 BFC 法
  然后可以介绍两种类型的具体方案：
  追加元素并设置 clear 属性
  使用 CSS 样式插入伪元素
  Bootstrap 的解决高度塌陷方案（BFC）
  可能追加的面试题（详见参考链接）
  
  高度塌陷产生的原因是什么？
  clear 属性清除浮动的原理是什么？
  采用 BFC 解决高度塌陷和clear 属性清除浮动相比的优势是什么？
   ```
- CSS 魔术师 Houdini
- CSS WorkFlow
