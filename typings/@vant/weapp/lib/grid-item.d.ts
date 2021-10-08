import { ComponentType } from 'react'
export type VantGridItemProps = {
  text?: string // 文字
  icon?: string // 图标名称或图片链接，可选值见 Icon 组件
  iconColor?: string // 图标颜色
  iconPrefix?: string // 第三方图标前缀
  dot?: boolean // 是否显示图标右上角小红点
  badge?: string | number // 图标右上角徽标的内容
  url?: string // 点击后跳转的链接地址
  linkType?: string // 链接跳转类型，可选值为 redirectTo switchTab reLaunch

  customClass?: string
  contentClass?: string
  iconClass?: string
  textClass?: string

  bindclick?: () => void
}
declare const VantGridItem: ComponentType<VantGridItemProps>
export default VantGridItem
