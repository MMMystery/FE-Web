// 考查getAttribute获取指定属性名的属性值以及节点的children.

const getChildAttributes = (el, attr) =>{
  let arr=[];
  [...el.children].map((item)=>{
    arr.push(item.getAttribute(attr))
  })
  return arr;
}

