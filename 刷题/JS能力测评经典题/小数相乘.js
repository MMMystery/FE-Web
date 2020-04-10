// 题目描述
// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
// 示例1
// 输入
// 复制
// 3, 0.0001
// 输出
// 复制
// 0.0003

function multiply(a, b) {
  var stra = a.toString();
  var strb = b.toString();
  var len = Math.max(stra.length - stra.indexOf('.') - 1, strb.length - strb.indexOf('.') - 1);
  //
  return parseFloat(a * b).toFixed(len); //toFixed意识是精确到第几位
}
