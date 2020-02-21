- DOM加载顺序
```  
1、解析HTML结构。

2、加载外部脚本和样式表文件。

3、解析并执行脚本代码。

4、构造HTML DOM模型。

5、加载图片等外部文件。

6、页面加载完毕。

```

- attribute 属性节点

```
优势:  用.和[]的形式无法操作元素的自定义属性 getAttribute可以操作元素的自定义属性


el.hasAttribute(名称)- 检查属性是否存在
el.getAttribute(名称)- 获取属性的值
el.setAttribute(名称, 值)- 设置一个属性
el.removeAttribute(名称)- 移除属性


element.setAttribute('class','classNewValue');//修改属性值
等价于：
var attr = document.createAttribute('class'); 
         attr.value = 'classNewValue';
         element.setAttributeNode(attr);


```


- 常用dom操作的方法

``` 

1.常用的查找节点的方法有：
document.getElementById('id属性值');返回拥有指定id的对象的引用
document.getElementsByClassName('class属性值');返回拥有指定class的对象集合
document.getElementsByTagName('标签名');返回拥有指定标签名的对象集合
document.getElementsByName('name属性值'); 返回拥有指定名称的对象结合
document/element.querySelector('CSS选择器'); 仅返回第一个匹配的元素
document/element.querySelectorAll('CSS选择器'); 返回所有匹配的元素
document.documentElement; 获取页面中的HTML标签
document.body; 获取页面中的BODY标签
document.all['']; 获取页面中的所有元素节点的对象集合型

2.常用的新建节点的方法有：
document.createElement('元素名');创建新的元素节点
document.createAttribute('属性名');创建新的属性节点
document.createTextNode('文本内容');创建新的文本节点
document.createComment('注释节点'); 创建新的注释节点
document.createDocumentFragment( ); 创建文档片段节点

3.删除节点

parentNode.removeChild( existingChild );删除已有的子节点，返回值为删除节点
element.removeAttribute('属性名');删除具有指定属性名称的属性，无返回值
element.removeAttributeNode( attrNode );删除指定属性，返回值为删除的属性

4.修改节点

parentNode.replaceChild( newChild, existingChild );用新节点替换父节点中已有的子节点
element.setAttributeNode( attributeName );若原元素已有该节点，此操作能达到修改该属性值的目的
element.setAttribute( attributeName, attributeValue );若原元素已有该节点，此操作能达到修改该属性值的目的

5.插入节点

parent.appendChild( element/txt/comment/fragment );向父节点的最后一个子节点后追加新节点
parent.insertBefore( newChild, existingChild );向父节点的某个特定子节点之前插入新节点
element.setAttributeNode( attributeName );给元素增加属性节点
element.setAttribute( attributeName, attributeValue );给元素增加指定属性，并设定属性值


6.设置样式

ele.style.styleName = styleValue;设置ele元素的CSS样式

```
- innerHTML和innerText的区别
- DOM事件中target和currentTarget的区别
``` 
主要看事件绑定在父元素身上还是目标元素身上。

相等的时候：
当事件处理程序直接绑定在目标元素上，此时e.target===e.currentTarget，e.target ===this

不相等的时候：
当事件处理程序绑定在目标元素的父节点上时，currentTarget会指向绑定的父元素，而target依旧指向目标元素
```
- DOM事件的绑定的几种方式
  说了三种，然后说了一些冒泡，默认事件，以及DOM2，DOM3级的一些标准。
  
- 获取页面所有图片的src，得注意css部分的获取，有个dom方法，但我当时没想到说按行读文件
- 输出页面所有标签以及数量
- 手写dom的深度遍历
- 如何监听页面所有的点击事件（有阻止冒泡的怎么办）
- 创建一个元素，插入到document.body中，然后2秒之后删除这个元素
  