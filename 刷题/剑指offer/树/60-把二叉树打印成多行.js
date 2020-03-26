// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。


function Print(pRoot)
{
  if(!pRoot){
    return []
  }
  var result = [];
  var queue = [];
  queue.push(pRoot)
  while(queue.length>0){
    var len = queue.length;
    var tempArr = [];
    for(var i=0; i<len; i++){
      var node = queue.shift();
      if(node.left){
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
      tempArr.push(node.val); // push当前行每个节点
    }
    result.push(tempArr); // 一行一行push进去
  }
  return result;
}
