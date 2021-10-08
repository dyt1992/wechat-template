import { ComponentType } from 'react'

export type VantTabsProps = {
  /** 样式风格，可选值为card */
  type?: 'line' | 'card'
  /** 标签主题色 */
  color?: string
  /** 当前选中标签的标识符 */
  active?: string | number
  /** 动画时间，单位秒 */
  duration?: number
  /** 底部条宽度，默认单位px */
  lineWidth?: string | number
  /** 底部条高度，默认单位px */
  lineHeight?: string | number
  /** 是否开启切换标签内容时的转场动画 */
  animated?: boolean
  /** 是否展示外边框，仅在 line 风格下生效 */
  border?: boolean
  /** 是否省略过长的标题文字 */
  ellipsis?: boolean
  /** 是否使用粘性定位布局 */
  sticky?: boolean
  /** 是否开启手势滑动切换 */
  swipeable?: boolean
  /** 是否开启标签页内容延迟渲染 */
  lazyRender?: boolean
  /** 粘性定位布局下与顶部的最小距离，单位px */
  offsetTop?: number
  /** 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 */
  swipeThreshold?: number
  /** 标题选中态颜色 */
  titleActiveColor?: string
  /** 标题默认态颜色 */
  titleInactiveColor?: string
  /** zIndex 层级 */
  zIndex?: number

  bindclick?: (
    e: WechatMiniprogram.CustomEvent<{ name: string; title: string }>
  ) => void
  bindchange?: (
    e: WechatMiniprogram.CustomEvent<{ name: string; title: string }>
  ) => void
  binddisabled?: (
    e: WechatMiniprogram.CustomEvent<{ name: string; title: string }>
  ) => void
  bindscroll?: (
    e: WechatMiniprogram.CustomEvent<{ scrollTop: number; isFixed: boolean }>
  ) => void

  customClass?: string
  navClass?: string
  tabClass?: string
  tabActiveClass?: string
}

declare const VantTabs: ComponentType<VantTabsProps>
export default VantTabs
