/*输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
输入描述:
输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。*/


function Permutation(str)
{
  var result = [];
  if(str.length==1){
    result.push(str)
  }else{
    var obj=[];
    for(var i=0;i<str.length;i++){
      var temp = str[i]; // 拿出一个字符
      if(!obj[temp]){
        var newStr = str.slice(0,i) + str.slice(i+1, str.length); // 然后拼接剩余字符，递归重复上述步骤。即可得到以i开头总共有多少排列的方式。
        var arr = Permutation(newStr);
        for(var j=0; j<arr.length; j++){
          result.push(temp + arr[j]);
        }
        obj[temp] = true;
      }
    }
  }

  return result;
}
