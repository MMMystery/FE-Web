// 考查Promise的resolve

const pause = async (time) => {
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,time)
  })
}
