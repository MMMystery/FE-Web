// 完成函数 commafy，它接受一个数字作为参数，返回一个字符串，可以把整数部分从右到左每三位数添加一个逗号，如：12000000.11 转化为 12,000,000.11。

function commafy (num) {
  let arr = num.toString().split('.');
  return arr[0] == '-0' ? '-0' : (Number(arr[0])).toLocaleString().concat(arr[1]?('.'+arr[1]):''); // 利用api里的toLocaleString()函数
}

function commafy2 (num) {
}
