// 考查数据结构处理，主要是逻辑思维。

const parseData = ({ rows, metaData }) =>
  rows.map(v => {
    const newObj = {}
    for (let i in v) {
      newObj[metaData[i].name] = v[i]
    }
    return newObj
  })
