import { ComponentType } from 'react'

export type VantSearchProps = {
  /** 在表单内提交时的标识符 */
  name?: string
  /** 搜索框左侧文本 */
  label?: string
  /** 形状，可选值为 round */
  shape?: 'round'
  /** 当前输入的值 */
  value?: string | number
  /** 搜索框背景色 */
  background?: string
  /** 是否在搜索框右侧显示取消按钮 */
  showAction?: boolean
  /** 取消按钮文字 */
  actionText?: boolean
  /** 获取焦点 */
  focus?: boolean
  /** 是否将输入内容标红 */
  error?: boolean
  /** 是否禁用输入框 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 是否启用清除控件 */
  clearable?: boolean
  /** 最大输入长度，设置为 1 的时候不限制最大长度 */
  maxlength?: number
  /** 是否使用 action slot */
  useActionSlot?: boolean
  /** 输入框为空时占位符 */
  placeholder?: string
  /** 指定占位符的样式 */
  placeholderStyle?: string
  /** 输入框内容对齐方式，可选值为 center right */
  inputAlign?: string
  /** 是否使用输入框左侧图标 slot */
  useLeftIconSlot?: boolean
  /** 是否使用输入框右侧图标 slot */
  useRightIconSlot?: boolean
  /** 输入框左侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 useLeftIconSlot，则该属性无效） */
  leftIcon?: string
  /** 输入框右侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 useRightIconSlot，则该属性无效） */
  rightIcon?: string

  customClass?: string
  fieldClass?: string
  inputClass?: string
  cancelClass?: string

  bindsearch?: (e: WechatMiniprogram.CustomEvent2<string>) => void
  bindchange?: (e: WechatMiniprogram.CustomEvent2<string>) => void
  bindcancel?: () => void
  bindfocus?: () => void
  bindblur?: () => void
  bindclear?: () => void
  'bind:click-input'?: () => void
}

declare const VantSearch: ComponentType<VantSearchProps>
export default VantSearch
