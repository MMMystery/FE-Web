


// 通俗易懂的解释：
// 首先从丑数的定义我们知道，一个丑数的因子只有2,3,5，那么丑数p = 2 ^ x * 3 ^ y * 5 ^ z，换句话说一个丑数一定由另一个丑数乘以2或者乘以3或者乘以5得到，那么我们从1开始乘以2,3,5，就得到2,3,5三个丑数，在从这三个丑数出发乘以2,3,5就得到4，6,10,6，9,15,10,15,25九个丑数，我们发现这种方***得到重复的丑数，而且我们题目要求第N个丑数，这样的方法得到的丑数也是无序的。那么我们可以维护三个队列：
// （1）丑数数组： 1
// 乘以2的队列：2
// 乘以3的队列：3
// 乘以5的队列：5
// 选择三个队列头最小的数2加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
// （2）丑数数组：1,2
// 乘以2的队列：4
// 乘以3的队列：3，6
// 乘以5的队列：5，10
// 选择三个队列头最小的数3加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
// （3）丑数数组：1,2,3
// 乘以2的队列：4,6
// 乘以3的队列：6,9
// 乘以5的队列：5,10,15

function GetUglyNumber_Solution(index) {
  if (index === 0) return 0;
  var uglyNum = [1];
  var factor2 = 0, factor3 = 0, factor5 = 0;
  for (var i = 1; i < index; i++) {
    uglyNum[i] = Math.min(uglyNum[factor2] * 2, uglyNum[factor3] * 3, uglyNum[factor5] * 5);
    if (uglyNum[i] === uglyNum[factor2] * 2) factor2++; // 指针+1；
    if (uglyNum[i] === uglyNum[factor3] * 3) factor3++;
    if (uglyNum[i] === uglyNum[factor5] * 5) factor5++;
  }
  return uglyNum[index - 1];
}
