import { ComponentType } from 'react'

type FitType =
  | 'contain' //保持宽高缩放图片，使图片的长边能完全显示出来
  | 'cover' //保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
  | 'fill' //拉伸图片，使图片填满元素
  | 'widthFix' //缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
  | 'heightFix' //缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
  | 'none' //保持图片原有尺寸

export type VantImageProps = {
  /** 图片链接 */
  src?: string
  /** 图片填充模式 */
  fit?: FitType
  /** 替代文本 */
  alt?: string
  /** 宽度，默认单位为px */
  width?: string | number
  /** 高度，默认单位为px */
  height?: string | number
  /** 圆角大小，默认单位为px */
  radius?: string | number
  /** 是否显示为圆形 */
  round?: boolean
  /** 是否懒加载 */
  lazyLoad?: boolean
  /** 是否展示图片加载失败提示 */
  showError?: boolean
  /** 是否展示图片加载中提示 */
  showLoading?: boolean
  /** 是否使用 error 插槽 */
  useErrorSlot?: boolean
  /** 是否使用 loading 插槽 */
  useLoadingSlot?: boolean
  /** 是否开启长按图片显示识别小程序码菜单 */
  showMenuByLongpress?: boolean

  customClass?: string
  imageClass?: string
  loadingClass?: string
  errorClass?: string

  bindclick?: () => void
  bindload?: () => void
  binderror?: () => void
}
declare const VantImage: ComponentType<VantImageProps>
export default VantImage
