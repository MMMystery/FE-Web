// 考查逻辑处理

const safeGet = (data, path) => {
  let pathArr = path.split('.');
  let temp = data;
  for(let i of pathArr) {
    if(temp[i]) {
      temp = temp[i]
    } else {
      return undefined;
    }
  }
  return temp;
}
