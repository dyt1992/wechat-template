import { ComponentType } from 'react'
export type VantGridProps = {
  /** 列数 */
  columnNum?: number
  /** 图标大小，默认单位为px */
  iconSize?: string
  /** 格子之间的间距，默认单位为px */
  gutter?: string | number
  /** 是否显示边框 */
  border?: boolean
  /** 是否将格子内容居中显示 */
  center?: boolean
  /** 是否将格子固定为正方形 */
  square?: boolean
  /** 是否开启格子点击反馈 */
  clickable?: boolean
  /** 格子内容排列的方向，可选值为 horizontal */
  direction?: string
  /** 是否调换图标和文本的位置 */
  reverse?: boolean
  /** 是否使用自定义内容的插槽 */
  useSlot?: boolean

  customClass?: string
}
declare const VantGrid: ComponentType<VantGridProps>
export default VantGrid
