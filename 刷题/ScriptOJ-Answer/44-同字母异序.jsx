// 考查字符串转数组然后排序再组装。

const isAnagram = (str1, str2) => {
  // 先拆分成数组排好序，然后再组装为字符串作比较
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
