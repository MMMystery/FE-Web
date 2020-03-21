/*题目描述
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39*/



function Fibonacci(n)
{
  var a=1, b=1;
  var temp;
  if(n <= 0) return 0;
  for(var i=2; i<n+1; i++){
    temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}
