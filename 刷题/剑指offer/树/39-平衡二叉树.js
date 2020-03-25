// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。


// 当节点数目一定，保持树的左右两端保持平衡，树的查找效率最高。这种左右子树的高度相差不超过 1 的树为平衡二叉树。


function IsBalanced_Solution(pRoot) {
  if (pRoot == null) {
    return true;
  }
  if (Math.abs(TreeDepth(pRoot.left) - TreeDepth(pRoot.right)) > 1) {
    return false;
  } else {
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
  }
}

function TreeDepth(pRoot) { // 计算出深度。
  if (pRoot == null) {
    return 0;
  }
  var left = 1, right = 1;
  left += TreeDepth(pRoot.left);
  right += TreeDepth(pRoot.right);
  return Math.max(left, right);
}



function IsBalanced_Solution(pRoot) {
  if (!pRoot) {
    return true;
  }

  function maxDepth(root) { // 计算左子树或者右子树最大深度。
    if (root == null) {
      return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }

  return Math.abs(maxDepth(pRoot.left) - maxDepth(pRoot.right)) <= 1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}
