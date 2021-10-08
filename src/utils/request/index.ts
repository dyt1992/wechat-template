import axios from 'axios'
import wxAdapter from './adapter'
import { getStorageSync, showToast } from 'remax/wechat'
import { getUserInfo } from '@/utils/sessionStorage'
import md5 from 'js-md5'

// create an axios instance
const instance = axios.create({
  baseURL: process.env.REMAX_APP_BASE_API,
  timeout: 30000, // request timeout,
  adapter: wxAdapter
})

const slat = 'IqUCTp3CmbRUPD'

// request interceptor
instance.interceptors.request.use(
  (config) => {
    const userInfo = getUserInfo()
    if (userInfo.session_id) {
      config.headers.token = userInfo.session_id
    }
    config.headers.timestamp = new Date().getTime().toString()
    let data: Record<string, string> = {}
    if (config.method?.toUpperCase() == 'GET') {
      data = config.params || {}
    } else {
      data = deepClone2(config.data || {})
    }
    data.token = userInfo.session_id
    data.timestamp = config.headers.timestamp
    let resultData = jsonSort(data)
    resultData += slat
    config.headers.sign = md5(resultData)
    return config
  },
  (error) => Promise.reject(error)
)

// response interceptor
instance.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    if (response.data.code !== '00000') {
      showToast({
        title: response.data.msg || '服务器出错',
        icon: 'none'
      })
      return Promise.reject(new Error(`${response.data.msg || '服务器出错'}`))
    }
    return response.data
  },
  (error) => {
    showToast({
      title: '服务器出错',
      icon: 'none'
    })
    return Promise.reject(error)
  }
)

function jsonSort(jsonObj: { [x: string]: string | number | boolean }) {
  let arr = []
  for (var key in jsonObj) {
    if (key != 'sign') {
      arr.push(key)
    }
  }
  arr.sort()
  let str = ''
  for (var i in arr) {
    if (typeof jsonObj[arr[i]] == 'object') {
      jsonObj[arr[i]] = JSON.stringify(jsonObj[arr[i]])
    }

    if (jsonObj[arr[i]] == undefined || jsonObj[arr[i]] == null) {
      jsonObj[arr[i]] = ''
    }
    str += arr[i] + '=' + encodeURIComponent(jsonObj[arr[i]]) + '&'
  }
  return str.substr(0, str.length - 1)
}

//深拷贝
function deepClone2(obj: any) {
  let _obj = JSON.stringify(obj)
  return JSON.parse(_obj)
}

export default instance
