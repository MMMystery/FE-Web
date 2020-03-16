/*
* 最新的 Javascript 标准规定了六种基本数据类型(number, null, undefined, string, boolean, symbol) 和基于 Object 衍生的其它原生数据类型，写出 type 函数，它传入一个参数，返回它的数据类型（用小写字母），比如: type(new Date)，返回 date。
* */

const type = (obj) => {
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase(); //本来是'[object Boolean]' 截取掉前面的 'boolean',
}

const type = (obj) => {
  let dataType = {
    '[object Null]' : 'null',
    '[object Undefined]' : 'undefined',
    '[object Boolean]' : 'boolean',
    '[object Number]' : 'number',
    '[object String]' : 'string',
    '[object Function]' : 'function',
    '[object Array]' : 'array',
    '[object Date]' : 'date',
    '[object RegExp]' : 'regexp',
    '[object Object]' : 'object',
    '[object Symbol]' : 'symbol',
    '[object Map]' : 'map',
    '[object Set]' : 'set',
    '[object Int8Array]' : 'int8array',
    '[object Error]' : 'error'
  }
  return  dataType[Object.prototype.toString.call(obj)]
}
