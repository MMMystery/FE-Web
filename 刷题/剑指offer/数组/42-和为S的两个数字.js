


//方法一：采用双重遍历找到第一组满足条件的两个数即为乘积最小两个数
function FindNumbersWithSum(array, sum) {
  var result = [];
  var flag = false;
  for (var i = 0; i < array.length; i++) {
    if (flag == true) {
      break;
    }

    for (var j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == sum) {
        result.push(array[i], array[j]);
        flag = true;
        break;
      }
    }
  }
  return result;
}

//方法二：从数组两端向中间查找满足条件的两个数
function FindNumbersWithSum(array, sum) {
  // write code here
  var start = 0;
  var end = array.length - 1;
  while (start < end) {
    if (array[start] + array[end] > sum) {
      end--;
    } else if (array[start] + array[end] < sum) {
      start++;
    } else {
      return [array[start], array[end]];
    }
  }
  return [];
}
