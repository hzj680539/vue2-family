import axios from 'axios'

const URL = window.location.href
var baseUrl = ''

if (URL.indexOf('production') > 0) {
  baseUrl = 'production'
} else if (URL.indexOf('test') > 0) {
  baseUrl = 'test'
} else {
  baseUrl = 'https://api.i5sesol.com/cgi'
}

function AxiosHelper (postData, callback) {
  axios({
    method: 'post',
    baseURL: baseUrl + '?r=' + Math.random(),
    data: postData
  }).then((data) => {
    console.info('data', data)
    callback()
  }).catch((data) => {
    console.error('error', data)
  })
}

AxiosHelper.prototype.constructor = AxiosHelper

export default AxiosHelper
