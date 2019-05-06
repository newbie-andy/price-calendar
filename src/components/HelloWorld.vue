<template>
  <div id="calendar">
    <calendar-header 
      @changeDate="changeNumber"
      :year="currentDate.year" 
      :month="currentDate.month"></calendar-header>
    <calendar-body
      :calendar-base="calendarData"></calendar-body>
    <calendar-footer></calendar-footer>
  </div>
</template>

<script>
import mixin from './mixin'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'
import CalendarFooter from './CalendarFooter'
export default {
  name: 'YXCalendar',
  mixins: [mixin],
  data () {
    return {}
  },
  mounted() {
    this.initDate(2019, 7)
  },
  components: {
    CalendarHeader,
    CalendarBody,
    CalendarFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #calendar {
    margin: 0 auto;
    width: 500px;
    user-select: none;
  }
</style>
