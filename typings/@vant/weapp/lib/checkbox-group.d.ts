import { ComponentType } from 'react'

export type VantCheckboxGroupProps = {
  /** 在表单内提交时的标识符 */
  name?: string
  /** 所有选中项的 name */
  value?: string[]
  /** 是否禁用所有单选框 */
  disabled?: boolean
  /** 设置最大可选数 */
  max?: number
  /** 排列方向，可选值为 horizontal */
  direction?: string

  bindchange?: (e: WechatMiniprogram.CustomEvent2<string[]>) => void
}

declare const VantCheckboxGroup: ComponentType<VantCheckboxGroupProps>
export default VantCheckboxGroup
