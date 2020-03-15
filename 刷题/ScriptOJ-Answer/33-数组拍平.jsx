// 考察数组判断，函数递归。

const flatten = (arr, newArr = []) => {
  arr.forEach(item => Array.isArray(item) ? flatten(item, newArr) : newArr.push(item))
  return newArr;
}
