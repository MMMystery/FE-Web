// 题目描述
// 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
// 示例1
// 输入
// 复制
// 'abc123'
// 输出
// 复制
// true

function containsNumber(str) {
  for(var i=0;i<str.length;i++){
    if(Number(str[i])){
      return true;
    }
  }
  return false;
}
