
// 请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。
// 输出描述:
//   如果当前字符流没有存在出现一次的字符，返回#字符。




var map;
function Init()
{
  map = {}
}
//Insert one char from stringstream
function Insert(ch)
{
  if(!map[ch]){
    map[ch] = 1;
  }else{
    map[ch]++;
  }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
  for (var key in map) {
    if (map[key] === 1) { // key只出现一次
      return key
    }
  }
  return '#'
}
