import { View } from '@remax/wechat'
import VantButton from '@vant/weapp/lib/button'
import VantIcon from '@vant/weapp/lib/icon'
import VantPopup from '@vant/weapp/lib/popup'
import * as React from 'react'
import { useState } from 'react'
import styles from './index.scss'

type DialogProps = {
  trigger: React.ReactNode
  width?: string
  cancelText?: string
  okText?: string
  onSubmit?: () => Promise<boolean>
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    children,
    trigger,
    cancelText = '取消 ',
    okText = '确定',
    width = '570rpx',
    onSubmit: handleSubmit
  } = props
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <View
        onClick={() => {
          setVisible(true)
        }}>
        {trigger}
      </View>
      <VantPopup customClass={styles.popup} customStyle={`width:${width}`} show={visible}>
        <VantIcon
          customClass={styles.close}
          class-prefix="van-icon"
          name="close"
          size="24px"
          color="#dbdbdb"
          bindclick={() => {
            setVisible(false)
          }}
        />
        <View className={styles.content}>{children}</View>
        <View className={styles.action}>
          <View>
            <VantButton
              customClass={styles['action-cancel']}
              size="small"
              type="primary"
              block
              round
              bindclick={() => {
                setVisible(false)
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
                if (handleSubmit) {
                  const res = await handleSubmit()
                  if (res) {
                    setVisible(false)
                  }
                }
              }}>
              {okText}
            </VantButton>
          </View>
        </View>
      </VantPopup>
    </>
  )
}

export default Dialog
