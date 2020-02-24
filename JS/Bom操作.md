window.screen对象：包含有关用户屏幕的信息

- 怎么获取屏幕宽度

window.location对象：用于获得当前页面的地址(URL)，并把浏览器重定向到新的页面
                origin: "https://www.baidu.com"
                protocol: "https:"
                host: "www.baidu.com"
                hostname: "www.baidu.com"
                port: ""
                pathname: "/s"
                search: "?wd=document.onload&rsv_spt=1&rsv_iqid=0xe24ae7cc005536ad&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&oq=window.onload%25E5%2592%258Cdocument.onload&inputT=253&rsv_t=0777xez%2Bpk339EzHJ%2BdlK0oJ4p7uA6UrUwKPbkOMBR37R1fdsNFZ%2BaiKGzV0wCMRrH6K&rsv_pq=8967f1b20095b02d&rsv_sug3=46&rsv_sug2=0&rsv_sug4=253"
                hash: ""
                href: "https://www.baidu.com/

window.history对象：浏览历史的前进后退等,

window.navigator对象：常常用来获取浏览器信息、是否移动端访问等等
                userAgent -- 浏览器版本信息
                language
                appName
                appVersion
                cookieEnabled -- 返回浏览器是否支持(启用)cookie




- 怎么获取一个元素到视图顶部的距离
- getBoundingClientRect获取的top和offsetTop获取的top区别
``` 
getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。getBoundingClientRect是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）

页面中的元素的offsetLeft是离其最近的已经定位的元素，如果没有就相对于body元素计算
```
- ul标签里有五个li标签，把第五个li标签移到第一个li标签和第二个li标签中间，怎么做
