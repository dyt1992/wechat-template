import { ComponentType } from 'react'

export type VantSwitchProps = {
  /** 在表单内提交时的标识符 */
  name?: string
  /** 开关选中状态 */
  checked?: any
  /** 是否为加载状态 */
  loading?: boolean
  /** 是否为禁用状态 */
  disabled?: boolean
  /** 开关尺寸 */
  size?: string
  /** 打开时的背景色 */
  activeColor?: string
  /** 关闭时的背景色 */
  inactiveColor?: string
  /** 打开时的值 */
  activeValue?: any
  /** 关闭时的值 */
  inactiveValue?: any

  customClass?: string
  nodeClass?: string

  bindchange?: (e: WechatMiniprogram.CustomEvent2<boolean>) => void
}

declare const VantSwitch: ComponentType<VantSwitchProps>
export default VantSwitch
