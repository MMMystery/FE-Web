// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字


function FindNumsAppearOnce(array)
{
  var arr = [];
  for(var i=0;i<array.length;i++){
    if(array.indexOf(array[i])===array.lastIndexOf(array[i])){
      arr.push(array[i]);
    }
  }
  return arr;
}


// 先排序，然后前后比较
function FindNumsAppearOnce(array)
{
  var result = [];
  array.sort(function(x,y){return x-y})

  for (var i = 1; i < array.length; i++){


    if(array[i] != array[i+1] && array[i] != array[i-1]){
      result.push(array[i])
    }


    if(result.length == 2){
      return result
    }
  }
}
