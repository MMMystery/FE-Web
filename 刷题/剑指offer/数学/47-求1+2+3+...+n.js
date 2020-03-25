// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。


function Sum_Solution(n) {
  return (1 + n) * (n / 2); // 利用数学公式
}

// 递归相加
function Sum_Solution(n) {
  var res = n;
  (n > 0) && (res += Sum_Solution(n - 1));
  return res;
}
