<template>
  <view-area>
    <Chart v-model="value"></Chart>
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
      value: 10
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
