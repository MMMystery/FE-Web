// 完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五。

const toChineseNum = (num) => {
  let unit = ["", "十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千", "万"];
  let chn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let str = num.toString();
  let arr = [];
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) { // 倒叙来转译，这样就知道它是第几位。
    arr.unshift(chn[str[i]] + unit[count]); // 反向拼接
    count++;
  }
  let newStr = arr.join('');
  return newStr.replace(/(零[千百十])+/g, '零').replace(/零+(?=万)/g, '').replace(/零+$/, '');
};
