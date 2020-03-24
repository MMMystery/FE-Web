
//输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。



function GetLeastNumbers_Solution(input, k)
{
  if(!input || input.length < k){
    return [];
  }

  var temp = input.sort(function(a,b){
    return a-b;
  });

  return temp.slice(0,k)
}
