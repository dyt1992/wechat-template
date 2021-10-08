import VantDivider from '@vant/weapp/lib/divider'
import VantLoading from '@vant/weapp/lib/loading'
import * as React from 'react'
import { ScrollView } from 'remax/wechat'
import styles from './index.scss'

type LoadMoreProps = {
  fetchNextPage: () => void
  isFetchingNextPage: boolean
  hasNextPage?: boolean
  customClass: string
}

const LoadMore: React.FC<LoadMoreProps> = (props) => {
  const { customClass, isFetchingNextPage, hasNextPage, fetchNextPage, children } = props

  const finallClass = `${customClass} ${styles.container}`

  return (
    <ScrollView
      className={finallClass}
      scrollY={true}
      showScrollbar={false}
      enhanced={true}
      onScrollToLower={() => {
        if (hasNextPage) {
          fetchNextPage()
        }
      }}>
      {children}
      <VantDivider customStyle={'height:36px;margin:0px'} contentPosition="center">
        {isFetchingNextPage ? (
          <VantLoading size="18px">正在加载</VantLoading>
        ) : hasNextPage ? (
          '加载更多'
        ) : (
          '没有更多'
        )}
      </VantDivider>
    </ScrollView>
  )
}

export default LoadMore
