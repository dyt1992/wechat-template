import { ComponentType } from 'react'

export type VantCheckboxProps = {
  /** // 标识 Checkbox 名称 */
  name?: string
  /** // 形状，可选值为 round square */
  shape?: string
  /** // 是否为选中状态 */
  value?: boolean
  /** // 是否禁用单选框 */
  disabled?: boolean
  /** // 是否禁用单选框内容点击 */
  labelDisabled?: boolean
  /** // 文本位置，可选值为 left */
  labelPosition?: string
  /** // 是否使用 icon slot */
  useIconSlot?: boolean
  /** // 选中状态颜色 */
  checkedColor?: string
  /** // icon 大小 */
  iconSize?: string | number

  customClass?: string
  iconClass?: string
  labelClass?: string

  bindchange?: (e: WechatMiniprogram.CustomEvent2<boolean>) => void
}

declare const VantCheckbox: ComponentType<VantCheckboxProps>
export default VantCheckbox
