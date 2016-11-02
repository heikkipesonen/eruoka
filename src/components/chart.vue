<template>
  <div class="chart-wrapper">
    <div class="chart-inner-wrapper" ref="wrapper">
      <svg width="100%" height="100%" v-if="mounted">
          <circle :cx="chart.cx" :cy="chart.cy" :r="width/2 - strokeWidth" :stroke-width="strokeWidth"></circle>
          <path :d="chart.d" :stroke-width="strokeWidth"></path>
      </svg>

      <div class="label-wrapper">
        <h3>{{topLabel}}</h3>
        <h2>{{label}}</h2>
        <h3>{{bottomLabel}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default () {
        return 50
      }
    },

    max: {
      type: Number,
      default () {
        return 100
      }
    },

    min: {
      type: Number,
      default () {
        return 0
      }
    },

    strokeWidth: {
      type: Number,
      default () {
        return 30
      }
    },

    label: {
      type: String,
      default () {
        return 'label'
      }
    },

    topLabel: {
      type: String,
      default () {
        return 'label'
      }
    },

    bottomLabel: {
      type: String,
      default () {
        return 'label'
      }
    }
  },

  data () {
    return {
      width: 0,
      height: 0,
      mounted: false
    }
  },

  computed: {
    chart () {
      let min = this.min ? this.min : 0
      let max = this.max ? this.max : 100
      let range = max - min
      let value = this.value / range

      if (value > 0.9999999) {
        value = 0.9999999
      }

      let endAngle = value > 1 ? 1 : value < 0 ? 0 : value
      let startAngle = 0

      let center = this.width / 2
      let pathData = this.describeArc(center, center, center - this.strokeWidth, startAngle, endAngle * 360)

      return {
        d: pathData,
        cx: center,
        cy: center
      }
    }

  },

  methods: {
    polarToCartesian (centerX, centerY, radius, angleInDegrees) {
      let angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      }
    },

    describeArc (x, y, radius, startAngle, endAngle) {
      let start = this.polarToCartesian(x, y, radius, endAngle)
      let end = this.polarToCartesian(x, y, radius, startAngle)
      let arcSweep = endAngle - startAngle <= 180 ? '0' : '1'

      let d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, arcSweep, 0, end.x, end.y
      ].join(' ')

      return d
    }
  },

  mounted () {
    this.mounted = true
    this.width = this.$refs.wrapper.offsetWidth
    this.height = this.$refs.wrapper.offsetHeight

    console.log(this.width, this.height)
  }
}
</script>
<style scoped lang="scss">

.chart-inner-wrapper {
  position: relative;
  height: 0;
  padding-bottom: 100%;
}

.label-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  flex-direction: column;

  h3 {
    padding: 8px;
    font-size: 1em;
  }

  h2 {
    font-weight: 100;
    font-size: 2em;
    padding: 8px;
  }
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

path, circle {
  stroke: white;
  fill: transparent;
}

circle {
  opacity: 0.5;
}

</style>
