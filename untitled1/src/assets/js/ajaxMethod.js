function ajaxMethod (url, fnSucc, fnFaild) {
  var xhr = new XMLHttpRequest()
  url = url + '?' + new Date().getTime()
  xhr.open('GET', url, true)
  xhr.send()
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        fnSucc(xhr.responseText)
      } else {
        if (fnFaild) {
          fnFaild(xhr.statusText)
        }
      }
    }
  }
}
export {
  ajaxMethod
}
