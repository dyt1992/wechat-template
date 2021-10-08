import { ComponentType } from 'react'
export type VantNavBarProps = {
  /** 标题 */
  title?: string
  /** 左侧文案 */
  leftText?: string
  /** 右侧文案 */
  rightText?: string
  /** 是否显示左侧箭头 */
  leftArrow?: boolean
  /** 是否固定在顶部 */
  fixed?: boolean
  /** 固定在顶部时是否开启占位 */
  placeholder?: boolean
  /** 是否显示下边框 */
  border?: boolean
  /** 元素 zIndex */
  zIndex?: number
  /** 根节点自定义样式 */
  customStyle?: string
  /** 是否留出顶部安全距离（状态栏高度） */
  safeAreaInsetTop?: boolean

  /** 根节点样式类 */
  customClass?: string
  /** 标题样式类 */
  titleClass?: string
}
declare const VantNavBar: ComponentType<VantNavBarProps>
export default VantNavBar
