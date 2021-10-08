import { request } from 'remax/wechat'
import type { AxiosRequestConfig } from 'axios'

const settle = require('axios/lib/core/settle')
const createError = require('axios/lib/core/createError')

export default function wxAdapter(
  config: AxiosRequestConfig & Record<string, unknown>
) {
  return new Promise(function dispatchWxRequest(resolve, reject) {
    const finalConfig: WechatMiniprogram.RequestOption &
      Record<string, unknown> = { url: '' }
    finalConfig.url = `${config.baseURL}${config.url}`
    finalConfig.method = config?.method?.toLocaleUpperCase() as any
    if (finalConfig.method === 'GET') {
      finalConfig.data = config.params
    } else {
      finalConfig.data = config.data
    }
    finalConfig.header = config.headers
    const rarelyUse = [
      'dataType',
      'responseType',
      'enableHttp2',
      'enableQuic',
      'enableCache',
      'enableHttpDNS',
      'httpDNSServiceId'
    ]
    rarelyUse.forEach((item) => {
      if (config[item] !== undefined) {
        finalConfig[item] = config[item]
      }
    })
    request(finalConfig)
      .then((res) => {
        const response = {
          data: res.data,
          status: res.statusCode,
          statusText: '',
          headers: res.header,
          config: config,
          request: null
        }
        settle(resolve, reject, response)
      })
      .catch((err) => {
        console.log(err)
        reject(createError('网络错误', config, null, request))
      })
  })
}
