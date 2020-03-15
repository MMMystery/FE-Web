// 考查Math.random(),排重

const uniqueNums = (n) => {
  let arr = [];
  while(arr.length !== n) { // 这里不用for语句是因为要保证数组长度一定为n
    let randomNum = Math.round(Math.random() * 30 + 2);
    if(!arr.includes(randomNum)){
      arr.push(randomNum)
    }
  }
  return arr;
}



const uniqueNums = (n) => {
  let set = new Set()
  while(set.size < n) {
    set.add(Math.floor(2 + Math.random()*31))
  }
  return [...set]
}
