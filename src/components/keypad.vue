<template>
  <div :class="{'keypad-wrapper': true, 'keypad-open': open}">
    <value-display :model="value"></value-display>
    <div class="key-row" v-for="row in keys">
      <div class="key" v-for="key in row" @click="keyPress(key)" :class="key.classNames">
        {{key.label}}
      </div>
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

  props: {
    open: {
      type: Boolean
    },

    value: {},

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
              unique: true,
              value: ',',
              label: ','
            }
          ],
          [
            {
              action: true,
              value: 'cancel',
              label: 'cancel'
            },
            {
              action: true,
              value: 'clear',
              label: 'clear'
            },
            {
              action: true,
              value: 'complete',
              label: 'ok'
            }
          ]
        ]
      }
    }
  },

  computed: {
    viewValue: {
      set (newValue) {
        console.log(newValue)
      },

      get () {
        return this.value.toFixed(2)
      }
    }
  },

  methods: {
    keyPress (key) {
      console.log(this.value)

      if (!key.action) {
        if (!key.unique || this.viewValue.indexOf(key.value) < 0) {
          console.log(key.value)
          this.viewValue += key.value.toString()
        }
      } else {
        this[key.value](key)
      }
    },

    clear () {
      this.viewValue = ''
    },

    complete () {
      this.$emit('kissa', this.viewValue)
    },

    cancel () {

    }
  }
}
</script>
<style lang="scss" scoped>
.keypad-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: rgb(65, 158, 244);
  box-shadow: 0px 0px 100px -10px rgba(0,0,0,0.3);

  .key-row {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .key {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255,255,255,0.2);
    color: white;
    font-size: 10vw;
    font-weight: 800;
    flex: 1 1 33%;

    &.width-2 {
      flex-basis: 66%;
    }
  }

  .value-display {
    text-align: center;
    height: 20vh;
    color: white;
  }
}
</style>
