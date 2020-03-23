// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）



/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  if (pRoot1 == null || pRoot2 == null) {
    return false;
  }
  if (doesTree1HaveTree2(pRoot1, pRoot2)) {
    return true;
  } else {
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2); //直到找到根节点相等的点，或者树遍历完；
  }
}

function doesTree1HaveTree2(node1, node2) {

  //如果Tree2已经遍历完了都能对应的上，返回true
  if (node2 == null) {
    return true;
  }
  //如果Tree2还没有遍历完，Tree1却遍历完了。返回false
  if (node1 == null) {
    return false;
  }
  if (node1.val === node2.val) { //如果跟节点相等了，那么就去看是比较左子树和右子树是否相等。
    return doesTree1HaveTree2(node1.left, node2.left) && doesTree1HaveTree2(node1.right, node2.right)
  } else {
    return false;
  }
}
