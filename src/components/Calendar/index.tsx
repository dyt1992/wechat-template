import { genId } from '@/utils'
import dayjs from 'dayjs'
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { View } from 'remax/wechat'
import styles from './index.scss'

type CalendarDay = {
  key: string
  currMonth: boolean
  day?: number
  date?: string
  selected?: boolean
}

type CalendarProps = {
  value?: string
  mode?: 'single' | 'multi'
  customClass?: string
  defaultSelect?: string | string[]
  onSelect?: (date: string) => void
  onUnselect?: (date: string) => void
}

const Calendar: React.FC<CalendarProps> = (props) => {
  const { value, mode = 'single', customClass, defaultSelect, onSelect, onUnselect } = props

  const [yearMonth, setYearMonth] = useState<string>()
  const [monthDay, setMonthDay] = useState<CalendarDay[]>()

  useEffect(() => {
    const datetime = dayjs(value)
    setYearMonth(datetime.format('YYYY-MM'))

    const monthDay = []
    const monthFirstDay = datetime.startOf('month')
    const days = datetime.daysInMonth()
    const weekday = monthFirstDay.day()
    const year = datetime.year()
    const month = datetime.month() + 1
    for (let i = 0; i < weekday; i++) {
      monthDay.push({ currMonth: false, key: genId() })
    }
    for (let i = 0; i < days; i++) {
      const currDay = dayjs(`${year}-${month}-${i + 1}`)
      const curDayStr = currDay.format('YYYY-MM-DD')
      const data: CalendarDay = {
        currMonth: true,
        day: i + 1,
        key: genId(),
        date: curDayStr
      }

      if (typeof defaultSelect === 'string') {
        data.selected = curDayStr === defaultSelect
      } else if (Array.isArray(defaultSelect)) {
        data.selected = defaultSelect.includes(curDayStr)
      }
      monthDay.push(data)
    }
    setMonthDay(monthDay)
  }, [value, defaultSelect])

  return (
    <View className={`${styles.calendar} ${customClass || ''}`}>
      <View className={styles['calendar-title']}>{yearMonth}</View>
      <View className={styles['calendar-weekdays']}>
        <View className={styles['calendar-weekday']}>日</View>
        <View className={styles['calendar-weekday']}>一</View>
        <View className={styles['calendar-weekday']}>二</View>
        <View className={styles['calendar-weekday']}>三</View>
        <View className={styles['calendar-weekday']}>四</View>
        <View className={styles['calendar-weekday']}>五</View>
        <View className={styles['calendar-weekday']}>六</View>
      </View>
      <View className={styles['calendar-days']}>
        {monthDay?.map((item) => {
          return (
            <View
              className={styles['calendar-day']}
              key={item.key}
              onClick={() => {
                if (!item.currMonth) {
                  return false
                }
                if (item.selected) {
                  onUnselect && onUnselect(item?.date as string)
                } else {
                  onSelect && onSelect(item?.date as string)
                }
                const data = { ...item, selected: !item.selected }
                if (mode === 'single') {
                  if (item.selected) {
                    const index = monthDay.findIndex((ele) => ele.key === item.key)
                    if (index !== -1) {
                      const prev = monthDay.slice(0, index)
                      const post = monthDay.slice(index + 1)
                      setMonthDay([...prev, data, ...post])
                    }
                  } else {
                    const monthDayClone = JSON.parse(JSON.stringify(monthDay)) as CalendarDay[]
                    let selected = monthDayClone.find((item) => item.selected === true)
                    if (selected) {
                      selected.selected = false
                    }
                    const target = monthDayClone.find((ele) => item.key === ele.key)
                    if (target) {
                      target.selected = !target.selected
                    }
                    setMonthDay(monthDayClone)
                  }
                } else if (mode === 'multi') {
                  const index = monthDay.findIndex((ele) => ele.key === item.key)
                  if (index !== -1) {
                    const prev = monthDay.slice(0, index)
                    const post = monthDay.slice(index + 1)
                    setMonthDay([...prev, data, ...post])
                  }
                }
              }}>
              <View
                className={`${styles['calendar-day__label']} ${
                  item.selected ? styles.active : ''
                }`}>
                {item.currMonth ? item.day : ''}
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default Calendar
