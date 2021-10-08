import { ComponentType } from 'react'

export type ColumnType1 = { values?: string[]; defaultIndex?: number } & Record<string, any>
export type ColumnType2 = { text?: string; disabled?: boolean } & Record<string, any>

export type PickerConfirm = {
  index: number
  value: ColumnType1 | ColumnType2 | string
}

export type PickerChange = {
  index: number
  value: ColumnType1 | ColumnType2 | string
}

export type VantPickerProps = {
  /** 对象数组，配置每一列显示的数据 */
  columns: ColumnType1[] | ColumnType2[]
  /** 是否显示顶部栏 */
  showToolbar?: boolean
  /** 顶部栏位置，可选值为bottom */
  toolbarPosition?: string
  /** 顶部栏标题 */
  title?: string
  /** 是否显示加载状态 */
  loading?: boolean
  /** 选项对象中，文字对应的key */
  valueKey?: string
  /** 选项高度 */
  itemHeight?: number
  /** 确认按钮文字 */
  confirmButtonText?: string
  /** 取消按钮文字 */
  cancelButtonText?: string
  /** 可见的选项个数 */
  visibleItemCount?: number
  /** 单列选择器的默认选中项索引，多列选择器请参考下方的Columns配置 */
  defaultIndex?: number

  bindconfirm?: (e: WechatMiniprogram.CustomEvent<PickerConfirm>) => void
  bindcancel?: () => void
  bindchange?: (e: WechatMiniprogram.CustomEvent<PickerChange>) => void
}

declare const VantPicker: ComponentType<VantPickerProps>
export default VantPicker
