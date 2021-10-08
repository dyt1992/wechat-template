import { ComponentType } from 'react'

export type VantButtonProps = {
  /** 标识符 */
  id?: string
  /** 按钮类型，可选值为 primary info warning danger */
  type?: string
  /** 按钮尺寸，可选值为 normal large small mini */
  size?: string
  /** 按钮颜色，支持传入linearGradient渐变色 */
  color?: string
  /** 左侧图标名称或图片链接，可选值见 Icon 组件 */
  icon?: string
  /** 图标类名前缀，同 Icon 组件的 classPrefix 属性 */
  classPrefix?: string
  /** 是否为朴素按钮 */
  plain?: boolean
  /** 是否为块级元素 */
  block?: boolean
  /** 是否为圆形按钮 */
  round?: boolean
  /** 是否为方形按钮 */
  square?: boolean
  /** 是否禁用按钮 */
  disabled?: boolean
  /** 是否使用 0.5px 边框 */
  hairline?: boolean
  /** 是否显示为加载状态 */
  loading?: boolean
  /** 加载状态提示文字 */
  loadingText?: string
  /** 加载状态图标类型，可选值为 spinner */
  loadingType?: string
  /** 加载图标大小 */
  loadingSize?: string
  /** 自定义样式 */
  customStyle?: string
  /** 微信开放能力，具体支持可参考 微信官方文档 */
  openType?:
    | 'contact'
    | 'share'
    | 'getPhoneNumber'
    | 'getUserInfo'
    | 'launchApp'
    | 'openSetting'
    | 'feedback'
  /** 打开 APP 时，向 APP 传递的参数 */
  appParameter?: string
  /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文 */
  lang?: string
  /** 会话来源 */
  sessionFrom?: string
  /** 客服消息子商户 id */
  businessId?: number
  /** 会话内消息卡片标题 */
  sendMessageTitle?: string
  /** 会话内消息卡片点击跳转小程序路径 */
  sendMessagePath?: string
  /** sendMessageImg */
  sendMessageImg?: string
  /** 显示会话内消息卡片 */
  showMessageCard?: string
  /** 按钮 dataset，openType 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值 */
  dataset?: any
  /** 用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件 */
  formType?: string

  customClass?: string
  loadingClass?: string

  bindclick?: () => void
  bindgetuserinfo?: (
    e: WechatMiniprogram.CustomEvent<WechatMiniprogram.GetUserProfileSuccessCallbackResult>
  ) => void
  bindcontact?: (e: WechatMiniprogram.ButtonContact) => void
  bindgetphonenumber?: (e: WechatMiniprogram.ButtonGetPhoneNumber) => void
  binderror?: (e: WechatMiniprogram.ButtonError) => void
  bindopensetting?: (e: WechatMiniprogram.ButtonOpenSetting) => void
}

declare const VantButton: ComponentType<VantButtonProps>
export default VantButton
