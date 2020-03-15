// 考查模拟socket事件监听，发送。

function initNotification () {
  socket.on('new notification', function(n) {
    document.title = `（${n} 条消息）ScriptOJ`;
  })
  $('#mark-read').on('click', () => {
    socket.emit('mark all read', () => {
      document.title = "ScriptOJ";
    })
  })
}
