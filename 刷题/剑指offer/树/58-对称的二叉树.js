/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  if (!pRoot) {
    return true;
  }
  return check(pRoot, pRoot);

  function check(node1, node2) {
    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2) {
      return false;
    }

    if (node1.val != node2.val) {
      return false;
    }
    return check(node1.left, node2.right) && check(node1.right, node2.left);
  }
}
