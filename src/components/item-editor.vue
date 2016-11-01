<template>
  <bottom-sheet :open="open">
    <tag-select v-model="value.tags"></tag-select>
    <value-display v-model="value.value"></value-display>
    <keypad v-model="value.value" v-on:complete="complete"></keypad>
  </bottom-sheet>
</template>
<script>
import valueDisplay from './value-display'
import bottomSheet from './bottom-sheet'
import keypad from './keypad'
import tagSelect from './tag-select'

export default {
  components: {
    tagSelect,
    valueDisplay,
    bottomSheet,
    keypad
  },

  props: {
    open: {
      type: Boolean
    },

    value: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    complete () {
      this.$emit('complete')
    }
  }
}

</script>
<style lang="scss" scoped>
@import '../styles/theme';
.value-display {
  padding: 16px 0;
  color: white;
  justify-content: center;
  font-size: 10vw;  
}
</style>
