import { VantComponent } from '@vant/weapp/lib/common/component'
import { pickerProps } from '@vant/weapp/lib/picker/shared'

const currentYear = new Date().getFullYear()

const defaultFormatter = (type, value) => value

VantComponent({
  classes: ['active-class', 'toolbar-class', 'column-class'],

  props: {
    ...pickerProps,
    value: {
      type: null
    },
    filterWay: null,
    type: {
      type: String
    },
    showToolbar: {
      type: Boolean,
      value: true
    },
    formatter: {
      type: null,
      value: defaultFormatter
    },
    minDate: {
      type: Number,
      value: new Date(currentYear - 10, 0, 1).getTime()
    },
    maxDate: {
      type: Number,
      value: new Date(currentYear + 10, 11, 31).getTime()
    },
    minHour: {
      type: Number,
      value: 0
    },
    maxHour: {
      type: Number,
      value: 23
    },
    minMinute: {
      type: Number,
      value: 0
    },
    maxMinute: {
      type: Number,
      value: 59
    }
  },
  data: {
    filter: null
  },
  created() {
    if (this.data.filterWay) {
      const that = this
      this.setData({
        filter: function (type, options) {
          if (type === that.data.filterWay.type) {
            return options.filter(
              (option) => option % that.data.filterWay.step === 0
            )
          }
          return options
        }
      })
    }
  },
  methods: {
    onchange(e) {
      this.$emit('change', e)
    },
    onCancel() {
      this.$emit('cancel')
    },

    onConfirm(e) {
      this.$emit('confirm', e.detail)
    }
  }
})
