- 4.ajax请求时，上传5M数据，服务端返回10M数据，一个页面有三条并行请求，为了用户体验，怎么知道当前用户进度百分比？
- 有什么方法能够遍历它自身的属性，而不是原型链的属性. 怎么去获得对象非原型链上的属性
``` 
hasOwnProperty

Object.key

```
- 假设浏览器上有一个页面，页面上有一个列表，我想向列表中插入1000个Dom元素，for循环1000次，每次插入一个，发现性能方面的问题，怎么优化
- toString方法的缺点
- 怎么让两个await并行执行
``` 
使用Promise.all()让多个await操作并行
```
- 大数相乘
- XMLHttpRequest和fetch的区别
``` 
但是同复杂的XMLHTTPRequest API相比，Fetch使用了Promise，这让它使用起来更加简洁，从而避免陷入“回调旋涡”
```
- 实现斐波那契数列并利用缓存进行优化（利用闭包），实现一个斐波那契数列实现输入第n项输出相应的值，优化这个函数，让被查找过的下标值下次再次访问的时候能够立马找到并输出
``` 

function fibonacci(n, map = {}){
if(n == 1 || n == 2){
map[n] = 1;
return 1;
}
if(!map[n]){
map[n] = fibonacci(n-1, map) + fibonacci(n-2, map)
}
return map[n];
}


闭包：
let fibonacci = function() {
    let temp = [0, 1];
    return function(n) {
        let result = temp[n];
        if(typeof result != 'number') {
            result = fibonacci(n - 1) + fibonacci(n - 2);
            temp[n] = result; // 将每次 fibonacci(n) 的值都缓存下来
        }
        return result;
    }
}(); // 外层立即执行

```
- JS 中字符串的存储方法，当声明一个字符串并给它赋值的时候内存会发生什么变化
- 做了一道笔试的变形题，找出字符串中第一个连续三个递增的数字并返回
- 手写实现几种继承
- 有序数组去重，但是要求在原数组上操作,返回新的数组长度。
``` 
// 使用快慢指针
function removeDuplicates(num)
{
    let slow = 0;
    let fast = 1;
    while (fast < num.length){
        if (num[fast] != num[slow])
        {
            slow++;
            num[slow] = num[fast];
        }
        fast++;
    }
    return slow+1;
}
removeDuplicates([0,0,1,1,1,2,2,3,3,4])

var removeDuplicates = function (nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[count] !== nums[i]) {
            count += 1;
            nums[count] = nums[i];
        }
    }
    return count+1;
}

```
- 编程题：对象扁平化【编程】(30min)
  { a: b: c: { d: 1 }, aa: 2, c: [1, 2] } => { 'a.b.c.d': 1, aa: 2, 'c[0]': 1, 'c[1]': 2 }

- js怎么冻结一个对象，既对象属性只读（Object.freeze、Object.defineProperty)
- es6引入了类，它和之前的构造函数有什么区别
- 做了一道笔试的变形题，找出字符串中第一个连续三个递增的数字并返回
- 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目， 以数组形式返回答案。
  换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
  
  示例 1：
  输入：nums = [8,1,2,2,3]
  输出：[4,0,1,1,3]
  解释：
  对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。
  对于 nums[1]=1 不存在比它小的数字。
  对于 nums[2]=2 存在一个比它小的数字：（1）。
  对于 nums[3]=2 存在一个比它小的数字：（1）。
  对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
  
  示例 2：
  输入：nums = [6,5,4,8]
  输出：[2,1,0,3]
  
  示例 3：
  输入：nums = [7,7,7,7]
  输出：[0,0,0,0] 问最优解
  
- 实现下面这道题中的machine函数

  function machine() {
   
   }
  machine('ygy').execute()
  // start ygy
  machine('ygy').do('eat').execute();
  // start ygy
  // ygy eat
  machine('ygy').wait(5).do('eat').execute();
  // start ygy
  // wait 5s（这里等待了5s）
  // ygy eat
  machine('ygy').waitFirst(5).do('eat').execute();
  // wait 5s
  // start ygy
  // ygy eat
``` 
  function machine(name) {
      return new Action(name)
  }
  const defer = (time, callback) => {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve(callback())
          }, time * 1000)
      })
  }
  class QueueItem {
      constructor(defer, callback) {
          this.defer = defer;
          this.callback = callback;
      }
  }
  class Action {
      queue = []
      constructor(name) {
          this.name = name;
          this.queue.push(new QueueItem(0, () => console.log(`start ${this.name}`)))
      }
      do(eat) {
          this.queue.push(new QueueItem(0, () => console.log(`${this.name} ${eat}`)))
          return this;
      }
      wait(time) {
          this.queue.push(new QueueItem(time, () => console.log(`wait ${time}s`)))
          return this;
      }
      waitFirst(time) {
          this.queue.unshift(new QueueItem(time, () => console.log(`wait ${time}s`)))
          return this;
      }
      async execute() {
          while(this.queue.length > 0) {
              const curItem = this.queue.shift();
              if (!curItem.defer) {
                  curItem.callback();
                  continue;
              }
              await defer(curItem.defer, curItem.callback)
          }
      }
  }
  
```

- 实现一个函数，可以按顺序获取到一个DOM节点下面所有的文本。 
- JS实现单向链表
``` 
//节点应用类型
function Node(data){
    this.data=data;
    this.next=null;
}

//链表引用类型
function List(){
    //哨兵节点
    this.head=new Node();
    this.size=0;
}

List.prototype={
    //在链表尾部添加节点
    add: function(data){
        var current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=new Node(data);

        this.size++;
    },

    //遍历链表，不对链表元素操作都可以调用此方法
    forEach: function(callback){
        for(var current=this.head.next;current!=null;current=current.next){
            callback(current.data);
        }
    },

    //打印链表中所有元素
    print: function(){
        this.forEach(function(item){
            console.log(item);
        })
    },

    //查找链表元素的位置
    indexOf: function(data){
        var pos=0;
        var current=this.head.next;
        while(current!=null){
            if(current.data===data){
                break;
            }
            current=current.next;
            pos++;
        }
        return pos;
    },

   /**
     * 在位置pos处插入节点值为data
     * 若成功则返回插入的值，若失败则返回null
     */
    insert: function(pos,data){
        if(pos<0 || pos>this.size-1){
            return null;
        }

        //插入位置的上一个节点
        var last=this.head;
        for(var i=0;i<pos;i++){
            last=last.next;
        }
        //保存下一个节点的引用
        var ready=last.next;
        last.next=new Node(data);
        last.next.next=ready;

        this.size++;
        return data;
    },

    /**
     * 删除指定位置的元素
     * 若成功则返回删除的值，若失败则返回null
     */
    removeAt: function(index){
        if(index<0 || index>this.size-1){
            return null;
        }

        var current=this.head.next;
        var last=this.head;
        for(var i=0;i<index;i++){
            last=current;
            current=current.next;
        }
        last.next=current.next;

        this.size--;
        return current.data;
    },

    //删除相应元素
    remove: function(data){
        var current=this.head.next;
        var last=this.head;
        while(current!=null){
            if(current.data===data){
                last.next=current.next;
                //已删除节点
                this.size--;
                break;
            }
            last=current;
            current=current.next;
        }
    }
};

```
- 输入任意数量的数组，输出它们的笛卡尔积
- 实现 memorize once 高阶函数

- 判断一个点是否在三角形内
- 实现 JS 函数式编程中的 compose 函数（可接收多个 function 用于组合，执行顺序从右到左，前函数的执行结果作为后函数的入参） function compose(){  } const add2 = num => num+2; const fn1 = compose(add2); console.log(fn1(3)); //执行后，打印 5 
const sum = (a,b) => a+b; const fn2 = compose(add2, sum); console.log(fn2(3,2)); //执行后，打印 7 

- 实现一个观察者模式 Observer 类。$on 注册监听事件，$emit 广播事件，$off 取消事件监听，注意 $off 可以取消监听指定的 handler 或所有指定事件。
const bus = new Observer();
const handler = function(name) { console.log(`hello ${name}`); };
bus.$on('customEvent', handler);
bus.$on('customEvent', handler.bind(this));
bus.$emit('customEvent', 'shopee');
bus.$off('customEvent', handler);
bus.$emit('customEvent', 'team');
// output:
// hello shopee
// hello shopee
// hello team
