// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0
// 输入描述:
//   输入一个字符串,包括数字字母符号,可以为空
// 输出描述:
//   如果是合法的数值表达则返回该数字，否则返回0
// 输入
// +2147483647
// 1a33
// 输出
// 2147483647
// 0


function StrToInt(str)
{
  // write code here
  let result = str - 0;
  if(result != result  || !(result > -2147483649) || !(result < 2147483648) ){
    return 0;
  }
  return result;
}

