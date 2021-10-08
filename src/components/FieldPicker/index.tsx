import VantField, { VantFieldProps } from '@vant/weapp/lib/field'
import VantPicker, { PickerChange, PickerConfirm, VantPickerProps } from '@vant/weapp/lib/picker'
import VantPopup from '@vant/weapp/lib/popup'
import * as React from 'react'
import { useState } from 'react'
import { View } from 'remax/wechat'
import styles from './index.scss'

type FieldPickerProps = {
  value: string | number | null | undefined
  optionKey?: string
  onPickerConfirm?: (e: WechatMiniprogram.CustomEvent<PickerConfirm>) => void
  onPickerChange?: (e: WechatMiniprogram.CustomEvent<PickerChange>) => void
  onPickerCancel?: () => void
} & Omit<
  VantFieldProps,
  | 'value'
  | 'bindinput'
  | 'bindchange'
  | 'bindconfirm'
  | 'bindclickicon'
  | 'bindfocus'
  | 'bindblur'
  | 'bindclear'
  | 'bindclickinput'
  | 'bindlinechange'
  | 'bindkeyboardheightchange'
> &
  Omit<VantPickerProps, 'bindconfirm' | 'bindchange' | 'bindcancel'>

const FieldPicker: React.FC<FieldPickerProps> = (props) => {
  const [visible, setVisible] = useState<boolean>(false)
  const {
    value,
    label,
    optionKey = 'id',
    columns,
    onPickerConfirm,
    onPickerChange,
    onPickerCancel
  } = props
  return (
    <View>
      <VantField
        label={label}
        border
        bind:click-input={() => {
          setVisible(true)
        }}
        bind:click-icon={() => {
          setVisible(true)
        }}
        right-icon="arrow">
        <View slot="input">
          {value === undefined || value === null || value === '' ? (
            <View className={styles.placeholder}>请选择{label}</View>
          ) : (
            <View className={styles.label}>
              {columns?.find((item: any) => item[optionKey] === value)?.text}
            </View>
          )}
        </View>
      </VantField>
      <VantPopup show={visible} position="bottom">
        <VantPicker
          columns={columns}
          showToolbar
          bindconfirm={(e) => {
            setVisible(false)
            onPickerConfirm && onPickerConfirm(e)
          }}
          bindcancel={() => {
            setVisible(false)
            onPickerCancel && onPickerCancel()
          }}
          bindchange={(e) => {
            onPickerChange && onPickerChange(e)
          }}></VantPicker>
      </VantPopup>
    </View>
  )
}

export default FieldPicker
