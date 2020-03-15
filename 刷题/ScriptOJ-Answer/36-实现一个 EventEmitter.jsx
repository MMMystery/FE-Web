// 考查实现一个观察者模式。

class EventEmitter {
  constructor(){
    this.events = {};
  }
  on(eventName, callback){
    if(!this.events[eventName]){
      this.events[eventName] = [];
    }
    if(callback){
      this.events[eventName].push(callback);
    }
  }
  emit(eventName,...params){
    let e = this.events[eventName]
    e.forEach((item) => {
      item(...params)
    })
  }
  off (eventName, func) {
    let e = this.events[eventName]
    let index = 0
    if (e) {
      index = e.findIndex((item) => item === func)
    }
    e.splice(index, 1)
  }
}

