<template>
  <div class="value-display">
    {{ viewValue }}
  </div>
</template>
<script>
export default {
  props: {
    decimals: {
      type: Number,
      default () {
        return 2
      }
    },

    value: {
      type: Number,
      default () {
        return 0
      }
    }
  },

  computed: {
    viewValue () {
      return this.value.toFixed(this.decimals).replace('.', ',')
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
    font-weight: 100;
  }
</style>
