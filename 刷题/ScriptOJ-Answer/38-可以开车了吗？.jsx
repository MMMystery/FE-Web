// 考查回调，promise

const driveCustomers = (...fns) => {
  let names = [];
  fns.map((fn)=>{
    fn((name)=>{
      names.push(name)
      if(names.length === fns.length) {
        drive(names)
      }
    })
  })
}


// const driveCustomers = async (...fns) => {
//   let names = [];
//   let promises =fns.map((fn)=>{
//     return new Promise ((resolve, reject) => {
//       fn((name) =>{
//         names.push(name);
//         resolve();
//       })
//     })
//   })
//   await Promise.all(promises)
//   drive(names)
// }