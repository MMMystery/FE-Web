// 考查Math.max和splice，indexOf

class PriorityQueue {
  constructor() {
    this.arr = [];
  }

  add(v) {
    this.arr.push(v)
  }

  remove() {
    let num = Math.max(...this.arr);
    this.arr.splice(this.arr.indexOf(num), 1);
    return num;
  }
}
