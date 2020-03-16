/*
* 完成函数 centerPad 可以让一个字符串居中包裹在指定的可重复填充的字符串中间，例如：

centerPad('Hello', 13, 'abc') // => 'abcaHelloabca'
centerPad('Gook Luck!', 30, '*~') // => '*~*~*~*~*~Gook Luck!*~*~*~*~*~'
第一个参数为被包裹字符串，第二个参数为最终的字符串长度，第三个参数为用来填充的字符。

如果字符串无法完全居中，那么让字符串偏左，例如：

centerPad('Hello', 10, 'abc') // => 'abHelloabc'
如果第二个参数传入的字符串长度比原来长度要短，直接返回原有字符串即可，例如：

centerPad('Hello', 1, 'abc') // => 'Hello'
请你完成 centerPad 函数。
*
* */


const centerPad = (str, len, pad) => {
  // 如果第二个参数传入的字符串长度比原来长度要短，直接返回原有字符串即可
  if (len < str.length) return str

  const start = Math.floor((len - str.length) / 2)
  return str.padStart(start + str.length, pad).padEnd(len, pad)
}


'abc'.padStart(10, "foo");  // "foofoofabc"
