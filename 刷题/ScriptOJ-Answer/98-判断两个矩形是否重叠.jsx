// 考查逻辑处理


const isOverlap = (rect1, rect2) => {
  let minX1 = rect1.x;
  let maxX1 = rect1.x + rect1.width;
  let minY1 = rect1.y;
  let maxY1 = rect1.y + rect1.height;
  let minX2 = rect2.x;
  let maxX2 = rect2.x + rect2.width;
  let minY2 = rect2.y;
  let maxY2 = rect2.y + rect2.height;
  if (minX2 > maxX1 || maxX2 < minX1 || minY2 > maxY1 || maxY2 < minY1) {
    return false;
  }
  return true;
}

