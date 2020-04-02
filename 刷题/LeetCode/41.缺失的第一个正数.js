// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
//
//  
//
// 示例 1:
//
// 输入: [1,2,0]
// 输出: 3
// 示例 2:
//
// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:
//
// 输入: [7,8,9,11,12]
// 输出: 1
//
//
// 提示：
//
// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

var firstMissingPositive = function (nums) {
  for (let i = 1; i <= nums.length + 1; i++) {
    if (nums.indexOf(i) === -1) {
      return i;
    }
  }
};



var firstMissingPositive = function (nums) {
  let num = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == num) {
      num++;
      i = -1;
    }
    if (i == nums.length - 1) break;
  }
  return num;
};
