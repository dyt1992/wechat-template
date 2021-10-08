import { ComponentType } from 'react'

export type VantPopupProps = {
  /** 是否显示弹出层 */
  show?: boolean
  /** zIndex 层级 */
  zIndex?: number
  /** 是否显示遮罩层 */
  overlay?: boolean
  /** 弹出位置，可选值为 top bottom right left */
  position?: 'top' | 'bottom' | 'right' | 'left'
  /** 动画时长，单位为毫秒 */
  duration?: number | object
  /** 是否显示圆角 */
  round?: boolean
  /** 自定义弹出层样式 */
  customStyle?: string
  /** 自定义遮罩层样式 */
  overlayStyle?: string
  /** 是否在点击遮罩层后关闭 */
  closeOnClickOverlay?: boolean
  /** 是否显示关闭图标 */
  closeable?: boolean
  /** 关闭图标名称或图片链接 */
  closeIcon?: string
  /** 是否为 iPhoneX 留出底部安全距离 */
  safeAreaInsetBottom?: boolean
  /** 是否留出顶部安全距离（状态栏高度） */
  safeAreaInsetTop?: boolean

  bindclose?: () => void
  'bind:click-overlay'?: () => void
  'bind:before-enter'?: () => void
  bindenter?: () => void
  'bind:after-enter'?: () => void
  'bind:before-leave'?: () => void
  bindleave?: () => void
  'bind:after-leave'?: () => void

  customClass?: string
}

declare const VantPopup: ComponentType<VantPopupProps>
export default VantPopup
