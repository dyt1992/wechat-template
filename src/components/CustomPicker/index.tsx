import { useEffect } from 'react'
import VantIcon from '@vant/weapp/lib/icon'
import * as React from 'react'
import { useState } from 'react'
import { Picker, PickerProps, View, Text } from 'remax/wechat'
import styles from './index.scss'

type FieldPickerProps = {
  selectedValue: string | number
  selectKey?: string
  onCancel?: () => void
  onChange?: (value: string) => void
  onColumnChange?: () => void
} & Omit<PickerProps, 'onCancel' | 'onChange' | 'onColumnChange'>
const FieldPicker: React.FC<FieldPickerProps> = (props) => {
  const [value, setValue] = useState<any>()
  const {
    selectedValue,
    selectKey = 'id',
    mode = 'selector',
    range,
    rangeKey = 'text',
    onCancel: handleCancel,
    onChange: handleChange,
    onColumnChange: handleColumnChange
  } = props

  useEffect(() => {
    if (selectedValue && range && range.length) {
      const index = range?.findIndex((item) => item[selectKey] == selectedValue)
      if (index !== -1 && index !== value) {
        setValue(index?.toString())
      }
    }
  }, [selectedValue, range])

  return (
    <Picker
      mode={mode}
      value={value}
      range={range}
      rangeKey={rangeKey}
      onCancel={handleCancel}
      onChange={(e) => {
        setValue(e.detail.value)
        handleChange && handleChange(range && range[e.detail.value][selectKey])
      }}
      onColumnChange={handleColumnChange}>
      <View className={styles.picker}>
        <View className={styles['picker-content']}>
          {value === undefined ? (
            <Text>请选择</Text>
          ) : (
            range && range.length && range[value][rangeKey]
          )}
        </View>
        <VantIcon
          class-prefix="van-icon"
          name="play"
          size="24px"
          color="#dbdbdb"
          customClass={styles['picker-action']}
        />
      </View>
    </Picker>
  )
}

export default FieldPicker
