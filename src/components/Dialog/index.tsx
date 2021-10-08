import { View } from '@remax/wechat'
import VantButton from '@vant/weapp/lib/button'
import VantIcon from '@vant/weapp/lib/icon'
import VantPopup from '@vant/weapp/lib/popup'
import * as React from 'react'
import styles from './index.scss'

type DialogProps = {
  visible: boolean
  width?: string
  cancelText?: string
  okText?: string
  action?: React.ReactNode
  showClose?: boolean
  onClose?: () => void
  onSubmit?: () => void
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    children,
    visible,
    cancelText = '取消 ',
    okText = '确定',
    width = '570rpx',
    action,
    showClose = true,
    onClose: handleClose,
    onSubmit: handleSubmit
  } = props

  return (
    <VantPopup customClass={styles.popup} customStyle={`width:${width}`} show={visible}>
      {showClose ? (
        <VantIcon
          customClass={styles.close}
          class-prefix="van-icon"
          name="close"
          size="24px"
          color="#dbdbdb"
          bindclick={() => {
            handleClose && handleClose()
          }}
        />
      ) : (
        <></>
      )}

      <View className={styles.content}>{children}</View>
      {action !== undefined ? (
        action
      ) : (
        <View className={styles.action}>
          <View>
            <VantButton
              customClass={styles['action-cancel']}
              size="small"
              type="primary"
              block
              round
              bindclick={() => {
                handleClose && handleClose()
              }}>
              {cancelText}
            </VantButton>
          </View>
          <View>
            <VantButton
              customClass={styles['action-submit']}
              size="small"
              type="primary"
              block
              round
              bindclick={async () => {
                handleSubmit && handleSubmit()
              }}>
              {okText}
            </VantButton>
          </View>
        </View>
      )}
    </VantPopup>
  )
}

export default Dialog
