import { ComponentType } from 'react'

export type VantTagProps = {
  /** 类型，可选值为 primary success danger warning */
  type?: 'primary' | 'success' | 'danger' | ' warning'
  /** 大小, 可选值为 large medium */
  size?: 'large' | 'medium'
  /** 标签颜色 */
  color?: string
  /** 是否为空心样式 */
  plain?: boolean
  /** 是否为圆角样式 */
  round?: boolean
  /** 是否为标记样式 */
  mark?: boolean
  /** 文本颜色，优先级高于 color 属性 */
  textColor?: string
  /** 是否为可关闭标签 */
  closeable?: boolean

  customClass?: string

  bindclose?: () => void
  bindclick?: () => void
}

declare const VantTag: ComponentType<VantTagProps>
export default VantTag
