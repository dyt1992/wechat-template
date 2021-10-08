import { ComponentType } from 'react'

export type VantTabProps = {
  /** 标签名称，作为匹配的标识符 */
  name?: string | number
  /** 标题 */
  title?: string
  /** 是否禁用标签 */
  disabled?: boolean
  /** 是否显示小红点 */
  dot?: boolean
  /** 图标右上角提示信息 */
  info?: string | number
  /** 自定义标题样式 */
  titleStyle?: string
}

declare const VantTab: ComponentType<VantTabProps>
export default VantTab
