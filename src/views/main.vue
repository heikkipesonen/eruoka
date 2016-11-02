<template>
  <view-area>
    <Chart v-model="value" class="main-chart"></Chart>
  </view-area>
</template>
<script>
import viewArea from '../components/view'
import Chart from '../components/chart'

export default {
  components: {
    Chart,
    viewArea
  },

  data () {
    return {
      value: 75
    }
  }
}
</script>
<style lang="scss" scoped>
.main-chart {
  padding: 16px;
  color: white;
}
</style>
