import { ComponentType } from 'react'
export type VantIconProps = {
  /** 图标名称或图片链接 */
  name?: string
  /** 是否显示图标右上角小红点 */
  dot?: boolean
  /** 图标右上角文字提示 */
  info?: string | number
  /** 图标颜色 */
  color?: string
  /** 图标大小，如20px，2em，默认单位为px */
  size?: string | number
  /** 自定义样式 */
  customStyle?: string
  /** 类名前缀 */
  classPrefix?: string

  bindclick?: () => void

  customClass?: string
}
declare const VantIcon: ComponentType<VantIconProps>
export default VantIcon
