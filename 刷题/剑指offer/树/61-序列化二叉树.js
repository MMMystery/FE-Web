// 请实现两个函数，分别用来序列化和反序列化二叉树
//
// 二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），以 ！ 表示一个结点值的结束（value!）。
//
// 二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。

function Serialize(pRoot) //连续遍历输出val序列
{
  if(!pRoot){
    return "#";
  }
  var arr = [];
  serializeCore(pRoot);
  return arr.join(",");
  function serializeCore(node){
    if(!node){
      arr.push("#");
      return
    }
    arr.push(node.val);
    serializeCore(node.left);
    serializeCore(node.right);
  }
}
function Deserialize(s)
{
  if(!s || s.length < 1){
    return null;
  }
  var arr = s.split(",");
  return DeserializeCore();
  function DeserializeCore(){
    var val = arr.shift(),
      node = null;
    if(val != "#"){
      node = new TreeNode(val);
      node.left = DeserializeCore();
      node.right = DeserializeCore();
    }
    return node;
  }
}
