// 考查dom操作和逻辑

function initCheckBox() {
  /* TODO */
  let all = document.getElementById('check-all');
  let itemArr = document.getElementsByClassName('check-item');
  all.onclick = function () {
    for (let v of itemArr) {
      v.checked = all.checked;
    }
  }
  for (let v of itemArr) {
    v.onclick = function () {
      isAllCheck() ? all.checked = true : all.checked = false;
    }
  }

  let isAllCheck = () => {
    let count = 0;
    for (let v of itemArr) {
      if (v.checked) {
        count++
      }
    }
    if (count == itemArr.length) {
      return true;
    }
    return false;
  }
}

