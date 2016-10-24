<template>
  <div class="value-display">
    {{ viewValue }}
  </div>
</template>
<script>
export default {
  props: {
    model: {
      type: Number,
      default () {
        return 0
      }
    }
  },

  computed: {
    viewValue () {
      return this.model.toFixed(2).replace('.', ',')
    }
  }
}
</script>
<style lang="scss" scoped>
  .value-display {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10vw;
  }
</style>
