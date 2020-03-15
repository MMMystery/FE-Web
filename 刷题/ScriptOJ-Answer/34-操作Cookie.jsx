// 考察cookie设置，销毁。设置有效期等。

const cookieJar = {
  set (name, value, days) {
    document.cookie=`${name}=${value};expires=${new Date(Date.now()+days*24*3600*1000)}`
  },
  get (name) {
    let cookie=document.cookie
    let reg=new RegExp(`${name}=([^;]+)`)
    var result=reg.exec(cookie)
    return result[1]
  },
  remove (name) {
    document.cookie=`${name}=outdate;expires=${new Date(Date.now()-36110000)}`
  }
}
