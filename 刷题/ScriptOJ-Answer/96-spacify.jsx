// 考查原型，给字符串原型增加自定义方法。


String.prototype.spacify = function(){
  return this.split("").join(" ")
}

