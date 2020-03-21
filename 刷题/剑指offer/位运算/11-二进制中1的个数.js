// 题目描述
// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。



function NumberOf1(n)
{
  if(n < 0){
    n = n >>> 0;
  }
  var count = 0;
  var arr = n.toString(2).split("")
  for(var i=0; i<arr.length; i++){
    if(arr[i]==="1"){
      count++;
    }
  }
  return count;
}
