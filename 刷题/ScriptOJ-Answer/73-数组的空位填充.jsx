

/*
请你完成一个函数 fillEmpty，它接受一个数组作为参数，可以把数组里面的所有空位都设置为 'Hello'，例如：

 const a = [, , null, undefined, 'OK', ,]
fillEmpty(a)
// a 变成 ['Hello', 'Hello', null, undefined, 'OK', 'Hello']

*/

// 使用in
const fillEmpty = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) {
      arr[i] = "Hello";
    }
  }
  return arr;
};
