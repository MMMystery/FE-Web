// 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。

function jumpFloor(number)
{
  if(number == 1){
    return 1;
  }else if(number == 2){
    return 2;
  }else {
    return jumpFloor(number-1) + jumpFloor(number-2)
  }
}


function jumpFloor(number){
  if(number < 1){
    return 0;
  }
  if(number === 1){
    return 1;
  }
  if(number === 2){
    return 2;
  }
  var temp = 0, a = 1, b = 2;
  for(var i = 3; i <= number; i++){
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}
