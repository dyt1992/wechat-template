import { ComponentType } from 'react'

export type VantRadioProps = {
  /** 标识符 */
  name?: string
  /** 形状，可选值为 square */
  shape?: string
  /** 是否为禁用状态 */
  disabled?: boolean
  /** 是否禁用文本内容点击 */
  labelDisabled?: boolean
  /** 文本位置，可选值为 left */
  labelPosition?: string
  /** 图标大小，默认单位为px */
  iconSize?: string | number
  /** 选中状态颜色 */
  checkedColor?: string
  /** 是否使用 icon 插槽 */
  useIconSlot?: boolean

  bindchange?: (e: WechatMiniprogram.RadioGroupChange) => void
}

declare const VantRadio: ComponentType<VantRadioProps>
export default VantRadio
