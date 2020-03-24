//从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 其实就是树的广度优先遍历

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
  if (!root) {
    return false;
  }
  var queue = [];
  queue.push(root);
  var res = [];
  while (queue && queue.length > 0) {
    var temp = queue.shift();
    res.push(temp.val);
    if (temp.left) { // 左子树存在则加入左子树
      queue.push(temp.left);
    }
    if (temp.right) { // 右子树存在则加入右子树
      queue.push(temp.right);
    }
  }
  return res;

}
