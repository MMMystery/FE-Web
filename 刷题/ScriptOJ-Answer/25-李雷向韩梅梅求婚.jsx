// 考查创建一个Promise以及promise的resolve和reject。

const proposeToMissHan = (isOK) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {isOK ? resolve('ok') : reject('no')},20)
  });
}


