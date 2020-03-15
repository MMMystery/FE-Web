// 考查字符串的处理

const extname = (filename) => {

  return filename.lastIndexOf('.') > 0 ? filename.slice(filename.lastIndexOf('.')) : '';
  // return filename.lastIndexOf('.') > 0 ? "."+filename.split(".").pop() : '';
}

