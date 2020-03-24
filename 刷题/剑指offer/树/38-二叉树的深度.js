
//递归写法
function TreeDepth(pRoot) {
  if (pRoot == null) {
    return 0;
  }
  var nLeft = TreeDepth(pRoot.left);
  var nRight = TreeDepth(pRoot.right);
  return nLeft > nRight ? nLeft + 1 : nRight + 1;
  // return Math.max(left,right)
}
