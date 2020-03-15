// 考查简单算法，斐波拉契数列，也就是前面的元素叠加。

const climbStairs = (n) => {
  // 其实就是斐波拉契数列
  let count = [];
  count[0] = 0;
  count[1] = 1;
  count[2] = 2;
  for(let i = 3; i <= n; i++){
    count[i] = count[i-2] + count[i-1];
  }
  return count[n];
}
