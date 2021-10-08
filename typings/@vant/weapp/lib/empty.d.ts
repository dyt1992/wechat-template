import { ComponentType } from 'react'

export type VantEmptyProps = {
  /** 图片类型，可选值为 error network search，支持传入图片 URL */
  image?: string
  /** 图片下方的描述文字 */
  description?: string
}

declare const VantEmpty: ComponentType<VantEmptyProps>
export default VantEmpty
