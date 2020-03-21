// 输入一个链表，反转链表后，输出新链表的表头。

/*这题还未理解*/


function ReverseList(pHead) {
  if (pHead === null) {
    return null;
  }
  let pre = null;
  let next = null;
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
