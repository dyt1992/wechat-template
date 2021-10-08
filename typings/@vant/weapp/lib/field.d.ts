import { ComponentType } from 'react'
export type VantFieldProps = {
  /** 在表单内提交时的标识符 */
  name?: string
  /** 输入框左侧文本 */
  label?: string
  /** 单元格大小，可选值为 large */
  size?: string
  /** 当前输入的值 */
  value?: string | number
  /** 可设置为任意原生类型, 如number、idcard、textarea、digit */
  type?: string
  /** 如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性fixed为true */
  fixed?: boolean
  /** 获取焦点 */
  focus?: boolean
  /** 是否显示内边框 */
  border?: boolean
  /** 是否禁用输入框 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 是否启用清除控件 */
  clearable?: boolean
  /** 是否开启点击反馈 */
  clickable?: boolean
  /** 是否显示表单必填星号 */
  required?: boolean
  /** 是否使内容垂直居中 */
  center?: boolean
  /** 是否是密码类型 */
  password?: boolean
  /** 标题宽度 */
  titleWidth?: string
  /** 最大输入长度，设置为 -1 的时候不限制最大长度 */
  maxlength?: number
  /** 输入框为空时占位符 */
  placeholder?: string
  /** 指定 placeholder 的样式 */
  placeholderStyle?: string
  /** 自定义样式 */
  customStyle?: string
  /** 是否展示右侧箭头并开启点击反馈 */
  isLink?: boolean
  /** 箭头方向，可选值为 left up down */
  arrowDirection?: string
  /** 是否显示字数统计，需要设置maxlength属性 */
  showWordLimit?: boolean
  /** 是否将输入内容标红 */
  error?: boolean
  /** 底部错误提示文案，为空时不展示 */
  errorMessage?: string
  /** 底部错误提示文案对齐方式，可选值为 center right */
  errorMessageAlign?: string
  /** 输入框内容对齐方式，可选值为 center right */
  inputAlign?: string
  /** 是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px */
  autosize?: boolean | object
  /** 左侧图标名称或图片链接，可选值见 Icon 组件 */
  leftIcon?: string
  /** 右侧图标名称或图片链接，可选值见 Icon 组件 */
  rightIcon?: string
  /** 设置键盘右下角按钮的文字，仅在 type='text' 时生效 */
  confirmType?: string
  /** 点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效 */
  confirmHold?: boolean
  /** focus 时，点击页面的时候不收起键盘 */
  holdKeyboard?: boolean
  /** 输入框聚焦时底部与键盘的距离 */
  cursorSpacing?: number
  /** 键盘弹起时，是否自动上推页面 */
  adjustPosition?: boolean
  /** 是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效 */
  showConfirmBar?: boolean
  /** 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 */
  selectionStart?: number
  /** 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 */
  selectionEnd?: number
  /** 自动聚焦，拉起键盘 */
  autoFocus?: boolean
  /** 是否去掉 iOS 下的默认内边距，只对 textarea 有效 */
  disableDefaultPadding?: boolean
  /** 指定 focus 时的光标位置 */
  cursor?: number

  bindinput?: (e: WechatMiniprogram.CustomEvent2<string>) => void
  bindchange?: (e: WechatMiniprogram.CustomEvent2<string>) => void
  bindconfirm?: (e: WechatMiniprogram.CustomEvent2<string>) => void
  'bind:click-icon'?: () => void
  bindfocus?: (
    e: WechatMiniprogram.InputFocus | WechatMiniprogram.TextareaFocus
  ) => void
  bindblur?: (
    e: WechatMiniprogram.InputBlur | WechatMiniprogram.TextareaBlur
  ) => void
  bindclear?: () => void
  'bind:click-input'?: () => void
  bindlinechange?: (e: WechatMiniprogram.TextareaLineChange) => void
  bindkeyboardheightchange?: (
    e:
      | WechatMiniprogram.InputKeyboardHeightChange
      | WechatMiniprogram.TextareaKeyboardHeightChange
  ) => void
}
declare const VantField: ComponentType<VantFieldProps>
export default VantField
