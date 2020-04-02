var threeSum = function(nums) {
  let res = []
  for (let i = 0; i < nums.length - 2; i++) { // 每个人
    for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
      for (let k = j + 1; k < nums.length; k++) { // 去问剩下的每个人
        if (nums[i] + nums[j] + nums[k] === 0) { // 我们是不是可以一起组队
          res.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return res
}



var threeSum = function(nums) {
  var result = [];
  var len = nums.length;
  if(nums == null || len < 3){
    return result;
  }
  // 从小到大排序
  nums.sort((a,b) => a-b);
  // 第一个数从0开始遍历，作为三数第一个数的位置
  for(var i = 0;i < len;i++){
    // 题意是三数之后为0，大于0则当前位置肯定不存在解
    if(nums[i] > 0){
      break;
    }
    // 第一个数后面中有两个数如果相同且有解时，则此解一定会重复，因此事先跳过直接进入下一个i位置的遍历
    if(i > 0 && nums[i] == nums[i-1]){
      continue;
    }
    // 另外两个数的指针位置
    var L = i + 1;
    var R = len - 1;
    // 更新移动指针位置，夹逼求解
    while(L < R){
      var sum = nums[i] + nums[L] + nums[R];
      // 有解
      if(sum == 0){
        result.push([nums[i],nums[L],nums[R]]);
        // 更新指针位置
        // 同上面的continue状态解题，区别是要不断更新直到符合时
        while(nums[L] == nums[L+1]){
          L++;
        }
        while(nums[R] == nums[R-1]){
          R--;
        }
        // 夹逼
        L++;
        R--;
      }else if(sum < 0){
        L++;
      }else{
        R--;
      }
    }
  }
  return result;
};

