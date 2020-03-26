// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。

var arr = [];
function Insert(num)
{
  arr.push(num);
  arr.sort(function(a,b){
    return a - b;
  })
  return arr;
}
function GetMedian(){
  var mid = Math.floor(arr.length/2);
  if(arr.length%2==0){
    return (arr[mid]+arr[mid-1])/2
  }else{
    return arr[mid];
  }
}
