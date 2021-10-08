import { ComponentType } from 'react'

export type VantCellGroupProps = {
  /** 分组标题 */
  title?: string
  /** 是否展示为圆角卡片风格 */
  inset?: boolean
  /** 是否显示外边框 */
  border?: boolean

  customClass?: string
}

declare const VantCellGroup: ComponentType<VantCellGroupProps>
export default VantCellGroup
