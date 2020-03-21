// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。


function Merge(pHead1, pHead2)
{
  if(!pHead1){
    return pHead2;
  }
  if(!pHead2){
    return pHead1;
  }
  var temp;
  if(pHead1.val<pHead2.val){
    temp = pHead1;
    temp.next = Merge(pHead1.next, pHead2);
  }else{
    temp = pHead2;
    temp.next = Merge(pHead1, pHead2.next);
  }
  return temp;
}
