

function reConstructBinaryTree(pre, vin){
  if(pre.length == 0|| vin.length == 0){
    return null;
  }

  var root = pre[0]; // 前序遍历的第一位就是根节点
  var index = vin.indexOf(root); //查找根节点在中序遍历中的第几位，这样就清楚左子树多长，右子树多长。
  var vinLeft = vin.slice(0,index)
  var vinRight = vin.slice(index+1,vin.length);
  var preLeft = pre.slice(1,index+1);
  var preRight = pre.slice(index+1,pre.length);
  var node = new TreeNode(pre[0]);
  node.left = reConstructBinaryTree(preLeft,vinLeft);
  node.right = reConstructBinaryTree(preRight,vinRight);
  return node;

}
