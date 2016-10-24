<template>
  <view-area>
    <value-display :model="value"></value-display>
    <keypad v-model="value"></keypad>
  </view-area>
</template>
<script>
import viewArea from '../components/view'
import valueDisplay from '../components/value-display'
import keypad from '../components/keypad'

export default {
  components: {
    viewArea,
    valueDisplay,
    keypad
  },

  data () {
    return {
      value: 0
    }
  },

  methods: {
    addValue (kissa) {
      console.log(kissa)
    }
  }
}
</script>
<style lang="scss">

</style>
