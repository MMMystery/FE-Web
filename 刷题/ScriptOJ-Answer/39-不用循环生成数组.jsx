// 完成 arrWithoutLoop 函数，它会被传入一个整数 n 作为参数，返回一个长度为 n 的数组，数组中每个元素的值等于它的下标。arrWithoutLoop 中不能使用循环控制结构。

const arrWithoutLoop = n =>{
    return [...Array(n)].map((item,index)=>index)
}
或者
const arrWithoutLoop = n => [...Array(n).keys()]
