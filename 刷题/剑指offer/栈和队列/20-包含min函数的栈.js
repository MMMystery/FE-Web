/*
* 题目描述
定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。*/



var stack = [];
function push(node){
  stack.push(node);
}
function pop(){
  return stack.pop();
}
function top(){
  return stack[stack.length - 1];
}
function min(){
  return Math.min.apply(null, stack);
}
