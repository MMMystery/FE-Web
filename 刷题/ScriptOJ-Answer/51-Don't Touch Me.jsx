/*
Tomy 非常敏感，不喜欢别人碰他的东西。一旦有人碰他就会大喊 Don't Touch Me.。

完成 tomy 这个对象，禁止对 tomy 的内容进行修改（增加、修改、删除）。一旦有人对 tomy 进行任何的修改，都用 console.log 打印 Don't Touch Me.。
* */


// 需要使用Proxy，不能使用Object.defineProperty，因为Object.defineProperty只能拦截对已经存在的属性的修改和读取，但是不能拦截定义时不存在的属性

const tomy = new Proxy({}, {
  set(target, key, value) {
    console.log("Don't Touch Me.")
  },
  defineProperty(target, prop, descriptor) {
    console.log("Don't Touch Me.")
  },
  deleteProperty(target, prop) {
    console.log("Don't Touch Me.")
  },
})
