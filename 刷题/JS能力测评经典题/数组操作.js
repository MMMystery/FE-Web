/*在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
输入
  [1, 2, 3, 4], 'z', 2
输出
  [1, 2, 'z', 3, 4]*/

//利用slice+concat
function insert(arr, item, index) {
  return arr.slice(0,index).concat(item,arr.slice(index));
}
//利用concat +splice
function insert(arr, item, index) {
  var newArr=arr.concat();
  newArr.splice(index,0,item);
  return newArr;
}
//利用slice+splice
function insert(arr, item, index) {
  var newArr=arr.slice(0);
  newArr.splice(index,0,item);
  return newArr;
}
//利用push.apply+splice
function insert(arr, item, index) {
  var newArr=[];
  [].push.apply(newArr, arr);
  newArr.splice(index,0,item);
  return newArr;
}
//普通的迭代拷贝
function insert(arr, item, index) {
  var newArr=[];
  for(var i=0;i<arr.length;i++){
    newArr.push(arr[i]);
  }
  newArr.splice(index,0,item);
  return newArr;
}
