
- CSS盒模型
```
CSS盒模型就是在网页设计中经常用到的CSS技术所使用的一种思维模型。CSS 假定所有的HTML 文档元素都生成了一个描述该元素在HTML文档布局中所占空间的矩形元素框，可以形象地将其看作是一个盒子。CSS 围绕这些盒子产生了一种“盒子模型”概念，通过定义一系列与盒子相关的属性，可以极大地丰富和促进各个盒子乃至整个HTML文档的表现效果和布局结构。
CSS盒模型可以看成是由从内到外的四个部分构成，即内容区（content）、内边距(padding)、边框(border)和外边距(margin)。内容区是盒子模型的中心，呈现盒子的主要信息内容；内边距是内容区和边框之间的空间；边框是环绕内容区和内边距的边界；外边距位于盒子的最外围，是添加在边框外周围的空间。

根据计算宽高的区域我们可以将其分为IE盒模型和W3C标准盒模型，可以通过box-sizing来进行设置：

content-box：W3C标准盒模型
border-box：IE盒模型
```
![](https://user-gold-cdn.xitu.io/2019/11/22/16e930e04e31efa6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

区别：

```
W3C标准盒模型：width(宽度) = content(内容宽度)
```
```
IE盒模型：width(宽度) = content(内容宽度) + padding(内边距) + border(边框)
```

- BFC


- CSS3中transition和animation的属性
    transition(过渡动画)
    animation(关键帧动画)


- 清除浮动的方式及优缺点

``` 
额外标签法(在最后一个浮动元素的后面新加一个标签如<div class="clear"></div>，并在其CSS样式中设置clear: both;)


优点：简单，通俗易懂，写少量代码，兼容性好
缺点：额外增加无语义html元素，代码语义化差，后期维护成本大


给父级设置高度


优点：简单，写少量代码，容易掌握
缺点：不够灵活，只适用于高度固定的布局


触发父级BFC(如给父元素设置overflow:hidden，特别注意的是：在IE6中还需要触发hasLayout，例如给父元素设置zoom:1。原理是触发父级BFC后，父元素在计算高度时，浮动的子元素也会参与计算)


优点：简单，代码简洁
缺点：设置overflow:hidden容易造成不会自动换行导致超出的尺寸被隐藏掉，无法显示要溢出的元素


使用after伪元素，常见的写法如下：

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
复制代码
优点：符合闭合浮动思想，结构语义化正确
缺点：代码量多，因为IE6-7下不支持after伪元素，需要额外写zoom:1来触发hasLayout

```

+ 水平居中
```
若是行内元素，则直接给其父元素设置text-align: center即可
若是块级元素，则直接给该元素设置margin: 0 auto即可


使用flex布局的方式，可以轻松实现水平居中，即使子元素中存在浮动元素也同样适用
.parent {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

使用绝对定位的方式，再配合CSS3新增的transform属性

.child {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
}
复制代码
使用绝对定位的方式，再配合负值的margin-left(此方法需要固定宽度)

.child {
    position: absolute;
    left: 50%;
    width: 200px; // 假定宽度为200px
    margin-left: -100px; // 负值的绝对值为宽度的一半
}
复制代码
使用绝对定位的方式，再配合left:0;right:0;margin:0 auto;(此方法需要固定宽度)

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
若元素是单行文本，则直接给该元素设置line-height等于其父元素的高度
若元素是行内块级元素，可以配合使用display:inline-block;vertical-align:middle和一个伪元素来让内容块居中

使用flex布局的方式，可以轻松实现垂直居中，即使子元素中存在浮动元素也同样适用


.parent {
    display: flex;
    align-items: center;
}

复制代码
使用绝对定位的方式，再配合CSS3新增的transform属性

.child {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}
复制代码
使用绝对定位的方式，再配合负值的margin-top(此方法需要固定高度)

.child {
    position: absolute;
    top: 50%;
    height: 200px; // 假定高度为200px
    margin-top: -100px; // 负值的绝对值为高度的一半
}
复制代码
使用绝对定位的方式，再配合top:0;bottom:0;margin:auto 0;(此方法需要固定高度)

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
使用flex布局的方式同样可以轻松实现水平垂直居中

// flex 2012年版本写法
.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

// flex 2009年版本写法
.parent {
    display: box;
    box-pack: center;
    box-align: center;
}
复制代码
使用绝对定位的方式，再配合CSS3新增的transform属性

.child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

使用绝对定位的方式，再配合使用负值的margin-top和负值的margin-left(此方法需要同时固定宽度和高度)

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

- 三栏布局
```
绝对定位的方式
flex布局的方式
双飞翼布局
圣杯布局
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

- link与@import的区别
```
从属关系区别：
@import是CSS提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS，Rel连接属性，设置浏览器资源提示符preload、prefetch等。

加载顺序区别：
HTML文档在解析的过程当中，如果遇到link标签，则会立即发起获取CSS文件资源的请求；@import引入的CSS将在页面加载完毕后才会被加载。
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
    //display: grid;
    //grid-template-columns: repeat(auto-fill, 226px);
    //grid-column-gap: 32px;
    //grid-row-gap: 24px;;
```