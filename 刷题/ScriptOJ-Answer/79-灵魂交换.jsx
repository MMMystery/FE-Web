// 考查Object.getPrototypeOf()和Object.setPrototypeOf();

const exchange = (a, b) => {
  const aProto = Object.getPrototypeOf(a);
  const bProto = Object.getPrototypeOf(b);
  Object.setPrototypeOf(a, bProto)
  Object.setPrototypeOf(b, aProto)
}
