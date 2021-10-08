import { ComponentType } from 'react'

export type VantDividerProps = {
  /** 虚线 */
  dashed?: boolean
  /** 细线 */
  hairline?: boolean
  /** 文本位置，left center right */
  contentPosition?: 'left' | 'center' | 'right'
  /** 自定义样式 */
  customStyle?: string
}

declare const VantDivider: ComponentType<VantDividerProps>
export default VantDivider
