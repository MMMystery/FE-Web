/*
* 完成一个类 Box，实例化的时候给它传入一个数组。Box 的实例支持 for...of 操作，可以把初始化的时候传给 Box 的数组内容遍历出来：

const box = new Box(['book', 'money', 'toy'])
for (let stuff of box) {
  console.log(stuff) // => 依次打印 'book', 'money', 'toy'
}
你不能在 constructor 里面直接返回数组。

请你完成 Box 类。
* */
class Box {
  constructor(arr) {
    this[Symbol.iterator] = function* (){
      let len = arr.length, i = 0
      while (i < len) {
        yield arr[i++]
      }
    }
  }
}
