import { ComponentType } from 'react'

type File = {
  file?: {
    size?: number
    type?: string
    url?: string
    thumb?: string
  }
  index?: number
  name?: string
  callback?: (res: boolean) => void
}

export type VantUploaderProps = {
  /** 标识符，可以在回调函数的第二项参数中获取 */
  name?: string | number
  /** 接受的文件类型, 可选值为all media image file video */
  accept?: string
  /** 所选的图片的尺寸, 当accept为image类型时设置所选图片的尺寸可选值为original compressed */
  sizeType?: string[]
  /** 预览图和上传区域的尺寸，默认单位为px */
  previewSize?: string | number
  /** 是否在上传完成后展示预览图 */
  previewImage?: boolean
  /** 是否在点击预览图后展示全屏图片预览 */
  previewFullImage?: boolean
  /** 是否开启图片多选，部分安卓机型不支持 */
  multiple?: boolean
  /** 是否禁用文件上传 */
  disabled?: boolean
  /** 是否展示文件上传按钮 */
  showUpload?: boolean
  /** 是否展示删除按钮 */
  deletable?: boolean
  /** 图片或者视频选取模式，当accept为image类型时设置capture可选值为camera可以直接调起摄像头 */
  capture?: string | string[]
  /** 文件大小限制，单位为byte */
  maxSize?: number
  /** 文件上传数量限制 */
  maxCount?: number
  /** 上传区域文字提示 */
  uploadText?: string
  /** 预览图裁剪模式，可选值参考小程序image组件的mode属性 */
  imageFit?: string
  /** 是否开启文件读取前事件 */
  useBeforeRead?: boolean
  /** 当 accept 为 video 时生效，可选值为 back front */
  camera?: string
  /** 当 accept 为 video 时生效，是否压缩视频，默认为true */
  compressed?: boolean
  /** 当 accept 为 video 时生效，拍摄视频最长拍摄时间，单位秒 */
  maxDuration?: number
  /** 上传区域图标，可选值见 Icon 组件 */
  uploadIcon?: string

  'bind:before-read'?: (e: WechatMiniprogram.CustomEvent<File>) => void
  'bind:after-read'?: (e: WechatMiniprogram.CustomEvent<File>) => void
  bindoversize?: () => void
  'bind:click-preview'?: (e: WechatMiniprogram.CustomEvent<File>) => void
  binddelete?: (e: WechatMiniprogram.CustomEvent<File>) => void
}

declare const VantUploader: ComponentType<VantUploaderProps>
export default VantUploader
