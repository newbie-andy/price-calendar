<template>
  <div class="calendar-body">
    <div class="week-header">
      <div 
        class="week-header-item" 
        v-for="(item, index) in calendarBase.labels.columnNames"
        :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarBody',
  props: {
    calendarBase: {
      type: Object
    }
  },
  computed: {
    calendarBaseRender  () {
      this.calendarBase
    }
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
  .calendar-body {
    width: 100%;
    background: #ccc;
  }
  .week-header {
    display: flex;
    justify-content: space-around;
  }
  .week-header-item {
    padding: 6px 0
  }
</style>
