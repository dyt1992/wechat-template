import { ComponentType } from 'react'

type confirmButtonOpenType =
  /** 打开 APP 时，向 APP 传递的参数 */
  | 'app-parameter'
  /** 是否显示弹窗 */
  | 'show'
  /** 会话来源 */
  | 'session-from'
  /** 客服消息子商户 id */
  | 'business-id'
  /** 会话内消息卡片标题 */
  | 'send-message-title'
  /** 会话内消息卡片点击跳转小程序路径 */
  | 'send-message-path'
  /** sendMessageImg */
  | 'send-message-img'
  /** 显示会话内消息卡片 */
  | 'show-message-card'

export type VantDialogProps = {
  /** 使用dialog方法时必传 用于selector */
  id?: string
  /** 是否显示弹窗 */
  show?: boolean
  /** 标题 */
  title?: string
  /** 弹窗宽度，默认单位为px */
  width?: string | number
  /** 文本内容，支持通过\n换行 */
  message?: string
  /** 样式风格，可选值为roundButton */
  theme?: string
  /** 内容对齐方式，可选值为left right */
  messageAlign?: string
  /** zIndex 层级 */
  zIndex?: number
  /** 自定义类名，dialog 在自定义组件内时无效 */
  className?: string
  /** 自定义样式 */
  customStyle?: string
  /** 是否展示确认按钮 */
  showConfirmButton?: boolean
  /** 是否展示取消按钮 */
  showCancelButton?: boolean
  /** 确认按钮的文案 */
  confirmButtonText?: string
  /** 取消按钮的文案 */
  cancelButtonText?: string
  /** 确认按钮的字体颜色 */
  confirmButtonColor?: string
  /** 取消按钮的字体颜色 */
  cancelButtonColor?: string
  /** 是否展示遮罩层 */
  overlay?: boolean
  /** 自定义遮罩层样式 */
  overlayStyle?: object
  /** 点击遮罩层时是否关闭弹窗 */
  closeOnClickOverlay?: boolean
  /** 是否使用自定义内容的插槽 */
  useSlot?: boolean
  /** 是否使用自定义标题的插槽 */
  useTitleSlot?: boolean
  /** 已废弃，将在 2.0.0 移除，请使用 beforeClose 属性代替 */
  asyncClose?: boolean
  /** 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise */
  beforeClose?: (action: any) => boolean | Promise<any>
  /** 动画名称，可选值为fade */
  transition?: string
  /** 确认按钮的微信开放能力，具体支持可参考 微信官方文档 */
  confirmButtonOpenType?: confirmButtonOpenType

  bindclose?: () => void
  bindconfirm?: () => void
  bindcancel?: () => void
  bindgetuserinfo?: () => void
  bindcontact?: () => void
  bindgetphonenumber?: () => void
  binderror?: () => void
  bindopensetting?: () => void
}

declare const VantDialog: ComponentType<VantDialogProps>
export default VantDialog
