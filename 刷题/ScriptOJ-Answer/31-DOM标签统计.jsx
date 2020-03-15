// 考查new Set方法，获取所有节点，Array.from。

const getPageTags = () => {
  let arr = [];
  Array.from(document.getElementsByTagName('*')).map((item) =>{
    arr.push(item.tagName.toLowerCase())
  })
  return [...new Set(arr)]
}
