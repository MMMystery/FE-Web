/*
完成 is 函数，它接受两个参数，你返回 true 和 false 来表示这两个参数是否有 相同的值。例如：

is('foo', 'foo');     // true
is(window, window);   // true

is('foo', 'bar');     // false
is([], []);           // false

var test = { a: 1 };
is(test, test);       // true

is(null, null);       // true

is(0, -0);            // false
is(-0, -0);           // true
is(NaN, 0/0);         // true
* */


const is = (x,y) => Object.is(x, y);  // 内部实现其实就是下面那个函数那样

function is(x, y) {
  if (x === y) { // Steps 1-5, 7-10  // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}


