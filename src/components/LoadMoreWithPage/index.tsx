import { usePageEvent } from '@remax/macro'
import VantDivider from '@vant/weapp/lib/divider'
import VantLoading from '@vant/weapp/lib/loading'
import * as React from 'react'

type LoadMoreWithPageProps = {
  fetchNextPage: () => void
  isFetchingNextPage: boolean
  hasNextPage?: boolean
}

const LoadMoreWithPage: React.FC<LoadMoreWithPageProps> = (props) => {
  const { isFetchingNextPage, hasNextPage, fetchNextPage, children } = props

  usePageEvent('onReachBottom', () => {
    if (hasNextPage) {
      fetchNextPage()
    }
  })

  return (
    <>
      {children}
      <VantDivider
        customStyle={'height:36px;margin:0px'}
        contentPosition="center">
        {isFetchingNextPage ? (
          <VantLoading size="18px">正在加载</VantLoading>
        ) : hasNextPage ? (
          '加载更多'
        ) : (
          '没有更多'
        )}
      </VantDivider>
    </>
  )
}

export default LoadMoreWithPage
