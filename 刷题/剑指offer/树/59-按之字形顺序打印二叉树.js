/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {

  if (!pRoot) {
    return [];
  }
  var result = [];
  var queue = [];
  queue.push(pRoot);
  var FLAG = false;
  while (queue.length > 0) {
    var tempArr = [];
    var len = queue.length; // 这个len一定要独立去设置。
    for (var i = 0; i < len; i++) {
      var node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (FLAG) {
        tempArr.unshift(node.val);
      } else {
        tempArr.push(node.val);
      }
    }
    FLAG = !FLAG;
    result.push(tempArr);
  }
  return result;
}
