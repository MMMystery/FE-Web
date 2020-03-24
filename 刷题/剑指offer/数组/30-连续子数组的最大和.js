/*
* HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)*/




function FindGreatestSumOfSubArray(array)
{
  if(array.length<=0){
    return 0;
  }
  var curMax = array[0];
  var max = array[0];
  for(var i=1; i<array.length; i++){
    curMax = curMax<0?array[i] : curMax+array[i]; // 当前最大值是负数的话，直接选后面的值开始计算了。是正数的话继续加后面的值。
    max = curMax>max? curMax : max; // 每次都要保存最大值，有更大的值就更新
  }
  return max;
}
