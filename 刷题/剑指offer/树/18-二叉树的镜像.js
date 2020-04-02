// 操作给定的二叉树，将其变换为源二叉树的镜像。 二叉树节点交换



function Mirror(root)
{
  if(!root){
    return null;
  }
  var temp = root.right;
  root.right = root.left;
  root.left = temp;
  if(root.left){
    Mirror(root.left)
  }
  if(root.right){
    Mirror(root.right)
  }
  return root;
}
