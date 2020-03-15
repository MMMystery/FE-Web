// 考查定义一个函数，函数内部是一个匿名函数。

const plusFor = (name,count=0)=> {
  return () => `为${name}+${++count}s`
}

// const plusFor = (name,count=0)=>()=>
//  `为${name}+${++count}s`
// );


