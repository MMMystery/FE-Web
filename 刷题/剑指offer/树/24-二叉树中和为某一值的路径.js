// 输入一颗二叉树的根节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)


// 递归先序遍历树， 把结点加入路径。
//      若该结点是叶子结点则比较当前路径和是否等于期待和。
//     弹出结点，每一轮递归返回到父结点时，当前路径也应该回退一个结点

function FindPath(root, expectNumber) {
  var temp = [];
  // var found = false;
  var result = [];
  dfs(root, 0);
  return result;

  function dfs(root, sum) {
    // debugger;s
    if (!root) {
      return;
    }
    temp.push(root.val);
    sum += root.val;
    if ((root.left == null) && (root.right == null) && sum === expectNumber) {
      result.push(temp.concat());
    }
    if (root.left) {
      dfs(root.left, sum);
    }
    if (root.right) {
      dfs(root.right, sum);
    }
    temp.pop();
    return;
  }
}
