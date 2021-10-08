import * as React from 'react'
import { switchTab } from '@remax/wechat'
import VantButton from '@vant/weapp/lib/button'
import VantEmpty from '@vant/weapp/lib/empty'

export default () => {
  return (
    <VantEmpty image="error" description="描述文字">
      <VantButton
        size="small"
        type="primary"
        bindclick={() => {
          switchTab({ url: '/pages/home/index' })
        }}>
        返回首页
      </VantButton>
    </VantEmpty>
  )
}
