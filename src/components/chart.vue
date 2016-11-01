<template>
  <div class="chart-wrapper" ref="wrapper">
    <svg width="100%" height="100%">
      <circle cx="50%" cy="50%"></circle>
      <path fill="none" stroke-width="10" d="M 28.31104964906389 11.297002318178432 A 26.5 26.5 0 1 0 36.5 10"></path>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number
    }
  },

  computed: {

  },

  mounted () {
    console.log(this.$refs.wrapper)
  }
}
</script>
<style scoped lang="scss">

.chart-wrapper {
  position: relative;
  height: 0;
  padding-bottom: 100%;
  background-color: #0d0;
}

svg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

circle {
  r: 35%;
  stroke-width: 20px;
  stroke: white;
  fill: transparent;
}
</style>
