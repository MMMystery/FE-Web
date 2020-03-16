// 请写出一个函数 initArray ，接受两个参数 m 和 n，返回一个数组，它的长度是 m，每个值都是 n。 不可以使用循环

const initArray = (m, n) => {
  return Array(m).fill(n)
}


const initArray = (m, n) => {
  let arr = []

  const fn = (m) => {
    if (m > 0) {
      arr.push(n)
      return fn(m-1)
    }
  }
  fn(m)
  return arr
}
