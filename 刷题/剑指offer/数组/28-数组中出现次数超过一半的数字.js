


function MoreThanHalfNum_Solution(numbers)
{
  // write code here
  var arr = [];
  for(var i = 0; i < numbers.length; i++){
    if(arr[numbers[i]]){
      arr[numbers[i]]++;
    }else{
      arr[numbers[i]] = 1;
    }
  }

  for(var i = 0; i < arr.length; i++){
    if(arr[i] > Math.floor(numbers.length/2)){
      return i;
    }
  }
  return 0;
}
