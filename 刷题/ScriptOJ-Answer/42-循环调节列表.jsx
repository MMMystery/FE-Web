// 点击 UP 按钮会使得该 li 元素在列表中上升一个位置，点击 DOWN 按钮会使得该 li 元素下降一个位置。点击最后的元素的 DOWN 按钮会使得元素回到第一个位置，点击第一个元素的 UP 按钮会使其回到最后的位置。

const initAdjustableList = () =>{
  $('.up').click(function(){
    let li = $(this).parent();
    li.prev().html()!=undefined?li.prev().before(li):li.parent().append(li);
  })
  $('.down').click(function(){
    let li = $(this).parent();
    li.next().html()!=undefined?li.next().after(li):li.parent().prepend(li);
  })
}
