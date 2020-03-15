// 考查数组插入的方法，这个处理方式非常妙。


const injectSections = (items, sections) => {
  for (let k of sections) {
    items[k.index] = [k.content, items[k.index]];
  }
  console.log(items)
  return [].concat(...items);
}

