import Schema, { ValidateError } from 'async-validator'
import { showToast } from 'remax/wechat'

export function toChinesNum(num: number | string): string {
  let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  let unit = ['', '十', '百', '千', '万']
  if (typeof num === 'string') {
    num = parseInt(num)
  }
  const getWan = (temp: string | number) => {
    let strArr = temp.toString().split('').reverse()
    let newNum = ''
    for (var i = 0; i < strArr.length; i++) {
      newNum =
        (i == 0 && strArr[i] === '0'
          ? ''
          : i > 0 && strArr[i] === '0' && strArr[i - 1] === '0'
          ? ''
          : changeNum[parseInt(strArr[i])] + (strArr[i] === '0' ? unit[0] : unit[i])) + newNum
    }
    return newNum
  }
  const overWan = Math.floor(num / 10000)
  const noWan = num % 10000
  let noWanStr = noWan.toString()
  if (noWan.toString().length < 4) noWanStr = '0' + noWan
  return overWan ? getWan(overWan) + '万' + getWan(noWanStr) : getWan(num)
}

export const validatorUtil = (validator: Schema, target: Record<string, unknown>) => {
  return validator.validate(target).catch((error) => {
    const err = error.errors as ValidateError[]
    if (err && err.length) {
      showToast({
        title: err[0].message || '',
        icon: 'error'
      })
    }
    return Promise.reject()
  })
}

export const genId = () => {
  return Math.random().toString(16).slice(6)
}

