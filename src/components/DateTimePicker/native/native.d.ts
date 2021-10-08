import { ComponentType } from 'react'

export type VantNativeDatetimePickerProps = {
  value?: string | number // 当前选中值
  type?: 'date' | 'time' | 'yearMonth' // 类型，可选值为 date time yearMonth不建议动态修改
  minDate?: number // 可选的最小时间，精确到分钟
  maxDate?: number // 可选的最大时间，精确到分钟
  minHour?: number // 可选的最小小时，针对 time 类型
  maxHour?: number // 可选的最大小时，针对 time 类型
  minMinute?: number // 可选的最小分钟，针对 time 类型
  maxMinute?: number // 可选的最大分钟，针对 time 类型
  filterWay?: {
    type: 'minute'
    step: number
  }
  formatter?: (type: string, value: string | number) => string | number // 选项格式化函数
  title?: string // 顶部栏标题
  showToolbar?: boolean // 是否显示顶部栏
  loading?: boolean // 是否显示加载状态
  itemHeight?: number // 选项高度
  confirmButtonText?: string // 确认按钮文字
  cancelButtonText?: string // 取消按钮文字
  visibleItemCount?: number // 可见的选项个数

  /** 选中项样式类 */
  activeClass?: string
  /** 顶部栏样式类 */
  toolbarClass?: string
  /** 列样式类 */
  columnClass?: string

  bindinput?: (e: WechatMiniprogram.CustomEvent2<string | number>) => void
  bindchange?: (e: WechatMiniprogram.CustomEvent2<any>) => void
  bindconfirm?: (e: WechatMiniprogram.CustomEvent2<string | number>) => void
  bindcancel?: () => void
}

declare const VantNativeDatetimePicker: ComponentType<VantNativeDatetimePickerProps>
export default VantNativeDatetimePicker
