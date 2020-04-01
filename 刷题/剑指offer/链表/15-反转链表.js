// 输入一个链表，反转链表后，输出新链表的表头。

/*这题还未理解*/


function ReverseList(pHead) {
  if (pHead === null) {
    return null;
  }
  let pre = null;
  let next = null;
  // 判断当前节点是否为空
  // 不为空就先获取当前节点的下一节点
  // 然后把当前节点的 next 设为上一个节点
  // 然后把 current 设为下一个节点，pre 设为当前节点
  while (pHead !== null) {
    next = pHead.next;
    pHead.next = pre;
    pre = pHead;
    pHead = next;
  }
  return pre;
}


//借用数组的pop();
function ReverseList(pHead) {
  var node = pHead, arr = [];
  while (node != null) {
    arr.push(node.val);
    node = node.next;
  }
  node = pHead;
  while (node != null) {
    node.val = arr.pop();
    node = node.next;
  }
  return pHead;
}
