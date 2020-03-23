// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.


// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
// 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix)
{
  var top=0;
  var bottom=matrix.length-1;
  var left=0;
  var right=matrix[0].length-1;
  var arr = [];
  var len = matrix.length * matrix[0].length;

  while(arr.length<len){
    for(var i = left; i <= right; i++){ // 从左到右一行走完，top+1；
      arr.push(matrix[top][i]);
    }
    top++;
    for(var i = top; i<= bottom; i++){ // 从上到下一行走完， right-1;
      arr.push(matrix[i][right])
    }
    right--;
    for(var i = right; i>= left; i--){ // 从右到左一行走完， bottom-1；
      arr.push(matrix[bottom][i])
    }
    bottom--;
    for(var i = bottom; i>= top; i--){ // 从下到上走完，left+1;
      arr.push(matrix[i][left])
    }
    left++;
  }
  return arr;

}
printMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
