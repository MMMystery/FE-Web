// 考查dom的各种属性和操作，这里考察的是dom的classList和className属性。

const addClass = (dom, name) => {
  dom.classList.add(name)
}
const removeClass = (dom, name) => {
  dom.classList.remove(name)
}
const hasClass = (dom, name) => {
  return dom.classList.contains(name)
}


