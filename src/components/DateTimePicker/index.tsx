import { VantDatetimePickerProps } from '@vant/weapp/lib/datetime-picker'

import VantNativeDatetimePicker from './native/native'

import VantPopup from '@vant/weapp/lib/popup'
import * as React from 'react'
import { useState } from 'react'
import { View } from 'remax/wechat'

type FieldPickerProps = {
  filterWay?: {
    type: 'minute'
    step: number
  }
  onPickerConfirm?: (e: WechatMiniprogram.CustomEvent2<string | number>) => void
  onPickerChange?: (e: WechatMiniprogram.CustomEvent2<any>) => void
  onPickerCancel?: () => void
} & Omit<VantDatetimePickerProps, 'bindconfirm' | 'bindchange' | 'bindcancel'>

const FieldPicker: React.FC<FieldPickerProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(false)
  const {
    value,
    type,
    children,
    filterWay,
    minHour = 0,
    maxHour = 23,
    onPickerConfirm,
    onPickerChange,
    onPickerCancel
  } = props

  return (
    <View>
      <View
        onClick={() => {
          setVisible(true)
        }}>
        {children}
      </View>
      <VantPopup show={visible} position="bottom">
        <VantNativeDatetimePicker
          value={value}
          type={type}
          filterWay={filterWay}
          minHour={minHour}
          maxHour={maxHour}
          bindconfirm={(e: any) => {
            setVisible(false)
            onPickerConfirm && onPickerConfirm(e)
          }}
          bindchange={(e: any) => {
            onPickerChange && onPickerChange(e)
          }}
          bindcancel={() => {
            setVisible(false)
            onPickerCancel && onPickerCancel()
          }}
        />
      </VantPopup>
    </View>
  )
}

export default FieldPicker
