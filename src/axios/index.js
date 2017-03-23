import axios from 'axios'

const URL = window.location.href
let baseUrl = ''

if (URL.indexOf('production') > 0) {
  baseUrl = 'production'
} else if (URL.indexOf('test') > 0) {
  baseUrl = 'test'
} else {
  baseUrl = 'https://api.i5sesol.com/cgi'
}

let url = baseUrl + '?r=' + Math.random()
export function AxiosHelper (postData, callback) {
  axios.post(url, postData)
  .then(data => {
    // 异常处理
    // 正常回调
    callback(data.data)
  })
  .catch(data => {
    console.error('error occured!!')
  })
}
