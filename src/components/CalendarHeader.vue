<template>
  <div class="calendar-header">
    <span 
      @click="changeDate('year', 'sub')"
      class="calendar-header-item cal-prev-year">上一年</span>
    <span 
      @click="changeDate('month', 'sub')"
      class="calendar-header-item cal-prev-month">上个月</span>
    <span class="calendar-header-item cur-select-header">
      {{ `${ showYear }年 ${ showMonth + 1 }月` }}
    </span>
    <span 
      @click="changeDate('month', 'plus')"
      class="calendar-header-item cal-next-month">下个月</span>
    <span 
      @click="changeDate('year', 'plus')"
      class="calendar-header-item cal-next-year">下一年</span>
  </div>
</template>

<script>
export default {
  name: 'CalendarHeader',
  props: {
    year: {
      type: Number,
      required: true,
      default: 0
    },
    month: {
      type: Number,
      required: true,
      default: 0
    },
  },
  data () {
    return {}
  },
  computed: {
    showYear() {
      return this.year
    },
    showMonth() {
      return this.month
    }
  },
  methods: {
    changeDate(dateType, dealType) {
      this.$emit('changeDate', dateType, dealType)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .calendar-header {
    display: flex;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 6px;
  }
  .cal-prev-year, .cal-prev-month, .cal-next-month, .cal-next-year {
    cursor: pointer;
  }
</style>
