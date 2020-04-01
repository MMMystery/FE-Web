// 树的最大深度：该题目来自 Leetcode，题目需要求出一颗二叉树的最大深度

var maxDepth = function(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
