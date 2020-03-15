// 考查数组拍平，使用递归来拍平。另外考察generator函数以及里面的yield


function *flatten2 (arr) {
  for(let item of arr) {
    Array.isArray(item) ? yield *flatten2(item) : yield item
  }
}
