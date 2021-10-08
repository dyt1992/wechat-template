import { View } from '@remax/wechat'
import * as React from 'react'
import styles from './index.scss'

export default () => {
  return (
    <View className={styles['van-empty']}>
      <View className={styles['van-empty__description']}>暂无数据</View>
    </View>
  )
}
