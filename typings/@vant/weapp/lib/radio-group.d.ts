import { ComponentType } from 'react'

export type VantRadioGroupProps = {
  /** 在表单内提交时的标识符 */
  name?: string
  /** 当前选中项的标识符 */
  value?: any
  /** 是否禁用所有单选框 */
  disabled?: boolean
  /** 排列方向，可选值为 horizontal */
  direction?: 'vertical' | 'horizontal'

  bindchange?: (e: WechatMiniprogram.RadioGroupChange) => void
}

declare const VantRadioGroup: ComponentType<VantRadioGroupProps>
export default VantRadioGroup
