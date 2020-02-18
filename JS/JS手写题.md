- 实现promise
``` 


```

- 实现promise.all

``` 
function isPromise(obj) {       // 这个方法是为了判断不是promise的时候直接返回。
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';  
}

const myPromiseAll = (arr)=>{
    let result = [];
    return new Promise((resolve,reject)=>{
        for(let i = 0;i < arr.length;i++){
            if(isPromise(arr[i])){
                arr[i].then((data)=>{
                    result[i] = data;
                    if(result.length === arr.length){
                        resolve(result)
                    }
                },reject)
            }else{
                result[i] = arr[i];
            }
        }    
    })
}

```
- 实现一个JS函数柯里化
- sum(2, 3)实现sum(2)(3)的效果

- async/await 实现
- reduce 实现
- Iterator遍历器实现
- Thunk函数实现（结合Generator实现异步）

- 实现promise.all的polyfill
- 实现promise.retry
- 实现promise.race

``` 
TODO

```
- 手写reduce或者filter的polyfill
- 手写parseInt的实现
- 用reduce实现map的功能
- 手写indexOf的实现
- cookie封装
- promise封装ajax
``` 
var  myNewAjax=function(url){
  return new Promise(function(resolve,reject){
      var xhr = new XMLHttpRequest();
      xhr.open('get',url);
      xhr.send(data);
      xhr.onreadystatechange=function(){
           if(xhr.status==200&&readyState==4){
                var json=JSON.parse(xhr.responseText);
                resolve(json)
           }else if(xhr.readyState==4&&xhr.status!=200){
                reject('error');
           }
      }
  })
}


```
- 写一个尾递归
- 手动实现Array.reduce()
- 大数相加
- 纯js写一个动画，5s由快到慢，速度自定义
- 写一个curry函数，其实就是add(1,2,3) 改成 add(1)(2,3)
- 手写发布订阅的EventEmitter类
- new Queue().task(1000,()=>console.log(1)).task(2000,()=>console.log(2)).task(3000,()=>console.log(3)).start()实现该函数，start()后等1秒输出1，再等2秒2，再等3秒3.
- ab-cd-ef=》ab-Cd-Ef（来个简单的题（你菜给你来个简单的嘤嘤嘤））
- [1,2,3,4,6,7,9,13,15]=>['1->4',6->7,'9','13','15']实现一下