// 考查new Proxy

const autoBind = (ToBindClass) => new Proxy(ToBindClass, {
  construct: function(F, args) {
    let inst = new F(...args)
    return new Proxy(inst, {
      get: function(target, prop) {
        if(typeof target[prop] === 'function') {
          return target[prop].bind(target)
        }
        return target[prop]
      }
    })
  }
})
