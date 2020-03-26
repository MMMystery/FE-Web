// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如， （5，3，7，2，4，6，8）    中，按结点数值大小顺序第三小结点的值为4。



// 中序遍历就是它的排序好的顺序。
function KthNode(pRoot, k) {
  if (!pRoot || k < 0) {
    return null;
  }
  var count = 0;
  function dfs(pRoot, k) {
    if(pRoot!==null){
      var node = dfs(pRoot.left, k);
      if(node!==null){return node;}
      count++;
      if(count==k){return pRoot;}

      node = dfs(pRoot.right, k);
      if(node!==null){return node;}
    }
    return null;
  }

  return dfs(pRoot, k);
}
