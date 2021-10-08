import { ComponentType } from 'react'
export type VantLoadingProps = {
  /** 颜色 */
  color?: string
  /** 类型，可选值为 spinner */
  type?: string
  /** 加载图标大小，默认单位为 px */
  size?: string | number
  /** 文字大小，默认单位为为 px */
  textSize?: string | number
  /** 是否垂直排列图标和文字内容 */
  vertical?: boolean
}
declare const VantLoading: ComponentType<VantLoadingProps>
export default VantLoading
