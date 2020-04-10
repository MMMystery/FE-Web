/*
* 题目描述
找出数组 arr 中重复出现过的元素
示例1
输入
[1, 2, 4, 4, 3, 3, 1, 5, 3]
输出
[1, 3, 4]*/


function duplicates(arr) {
  var newArr = [];
  arr.forEach((value, index) => {
    if (arr.indexOf(value) === index && arr.lastIndexOf(value) !== index) {
      newArr.push(value);
    }
  });
  return newArr;
}


// 下面这种的话会打印[4, 3, 1, 3]， 会有重复数字
function duplicates(arr) {
  var newArr = [];
  arr.forEach((value, index) => {
    if (arr.indexOf(value) !== index && arr.lastIndexOf(value)) {
      newArr.push(value);
    }
  });
  return newArr;
}
