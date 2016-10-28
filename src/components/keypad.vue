<template>
  <div class="keypad-wrapper">
    <div class="key-row" v-for="row in keys">
      <a class="key" v-for="key in row" @click="keyPress(key)" :class="key.classNames">
        {{key.label}}
      </a>
    </div>
  </div>
</template>
<script>
import valueDisplay from './value-display'

export default {
  name: 'keypad',

  components: {
    valueDisplay
  },

  data () {
    return {
      model: ''
    }
  },

  props: {
    value: {
      default () {
        return 0
      }
    },

    keys: {
      type: Array,
      default () {
        return [
          [
            {
              value: 7,
              label: '7'
            },
            {
              value: 8,
              label: '8'
            },
            {
              value: 9,
              label: '9'
            }
          ],
          [
            {
              value: 4,
              label: '4'
            },
            {
              value: 5,
              label: '5'
            },
            {
              value: 6,
              label: '6'
            }
          ],
          [
            {
              value: 1,
              label: '1'
            },
            {
              value: 2,
              label: '2'
            },
            {
              value: 3,
              label: '3'
            }
          ],
          [
            {
              value: 0,
              label: '0',
              classNames: 'width-2'
            },
            {
              value: '00',
              label: '00',
              classNames: 'width'
            }
          ],
          [
            {
              action: 'clear',
              label: 'clear'
            },
            {
              action: 'complete',
              label: 'ok'
            }
          ]
        ]
      }
    }
  },

  computed: {
    viewValue () {
      return parseFloat(this.model) / 100 || 0
    }
  },

  methods: {
    keyPress (key) {
      if (!key.action && (!key.unique || this.model.indexOf(key.value) < 0)) {
        this.model += '' + key.value
      } else if (key.action) {
        this[key.action](key)
      }
    },

    clear () {
      this.model = ''
    },

    complete () {
      this.$emit('complete', this.viewValue)
      this.clear()
    }
  },

  watch: {
    value () {
      this.model = this.value.toFixed(2).replace('.', '')
      // this.model = (Math.round(this.value * 100)).toString()
    },

    model () {
      this.$emit('input', this.viewValue)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../styles/theme';
  $keypad-color: white;
  $keypad-active-color: rgba(255,255,255, 0.1);
  $keypad-border-color: rgba(255,255,255, 0.3);

  .keypad-wrapper {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
  }

  .key-row {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .key {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $keypad-border-color;
    color: $keypad-color;
    font-size: 10vw;
    font-weight: 100;
    flex: 1 1 33%;

    &:active {
      background-color: $keypad-active-color;
    }

    &.width-2 {
      flex-basis: 66%;
    }
  }

  .value-display {
    text-align: center;
    height: 20vh;
    color: white;
  }
</style>
