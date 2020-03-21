// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。


function printListFromTailToHead(head) {
  var arr = [];
  var temp = head;
  while (temp) {
    arr.push(temp.val);
    temp=temp.next;
  }
  return arr.reverse();
}
