declare module '*.png'
declare module '*.css'
declare module '*.scss'
declare module '*.scss'

declare module 'axios/lib/core/createError'
declare module 'axios/lib/core/settle'
declare module 'cos-wx-sdk-v5'

declare module '@vant/weapp/lib/common/component'
declare module '@vant/weapp/lib/picker/shared'

declare namespace WechatMiniprogram {
  interface CustomEvent2<
    Detail,
    Mark extends IAnyObject = IAnyObject,
    CurrentTargetDataset extends IAnyObject = IAnyObject,
    TargetDataset extends IAnyObject = CurrentTargetDataset
  > extends BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
    /** 额外的信息 */
    detail: Detail
  }
}
