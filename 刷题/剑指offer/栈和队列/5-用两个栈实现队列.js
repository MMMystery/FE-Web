// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

/*用两个栈实现一个队列的功能?要求给出算法和思路!

  <分析>：

入队：将元素进栈A

出队：判断栈B是否为空，如果为空，则将栈A中所有元素pop，并push进栈B，栈B出栈；

 如果不为空，栈B直接出栈。*/

let Stack1 = [];
let Stack2 = [];

function push(node) {
  Stack1.push(node);
}

function pop() {
  if (Stack2.length === 0) {
    while (Stack1.length) {
      Stack2.push(Stack1.pop());
    }
  }
  return Stack2.pop();
}




/*用两个队列实现一个栈的功能?要求给出算法和思路!

<分析>：

入栈：将元素进队列A

出栈：判断队列A中元素的个数是否为1，如果等于1，则出队列，否则将队列A中的元素   以此出队列并放入队列B，直到队列A中的元素留下一个，然后队列A出队列，再把   队列B中的元素出队列以此放入队列A中。*/

let Queue1 = [];
let Queue2 = [];

function push(node) {
  Queue1.push(node);
}

function pop() {
  if(Queue1.length === 0){
    Queue1.push(Queue2.pop())
  }else{
    while(Queue1>1){
      Queue2.push(Queue1.pop());
    }
    Queue1.pop();
  }
}


