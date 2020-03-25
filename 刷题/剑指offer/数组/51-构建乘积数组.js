

// 没看懂。。

function multiply(array)
{
  // write code here
  if(array.length==0){return 0}
  var b = []
  b[0] = 1
  for(let i=1;i<array.length;i++){
    b[i] = b[i-1] * array[i-1]
  }
  var temp = 1
  for(let i=array.length-2;i>=0;i--){
    temp = temp*array[i+1]
    b[i] = b[i] * temp
  }
  return b
}
