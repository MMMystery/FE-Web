/*题目描述
在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。*/

function Find(target, array) {
  var row = array.length - 1;
  var col = 0;
  while (row >= 0 && col <= (array[0].length - 1)){
    if (target < array[row][col]) {
      row--;
    } else if (target > array[row][col]) {
      col++;
    } else {
      return true;
    }
  }
}
