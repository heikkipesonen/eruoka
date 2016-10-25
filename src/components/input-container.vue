<template>
  <div :class="{'input-container' : true, 'has-value': hasValues}">
    <input type="text" v-model="inputValue">
    <div class="input-label">{{label}}</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, String]
    },
    label: {
      type: String
    }
  },

  data () {
    return {
      inputValue: ''
    }
  },

  computed: {
    hasValues () {
      return this.value !== '' && (this.value !== 0 || this.value)
    }
  },

  watch: {
    value () {
      this.inputValue = this.value
    },

    inputValue () {
      this.$emit('input', this.inputValue)
    }
  }
}
</script>
<style lang="scss" scoped>
.input-container {
  position: relative;
  color: white;
  padding: 1em 8px 8px 8px;

  input {
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 8px 0;
    width: 100%;
    line-height: 1.5em;
    border-bottom: 1px solid white;
  }

  .input-label {
    font-size: inherit;
    position: absolute;
    top: 2em;
    left: 8px;
    transition: 0.3s;
  }

  &.has-value .input-label, input:focus + .input-label {
    transform: translate3d(-0.2em,-1.5em,0) scale3d(0.8,0.8,1);
  }
}
</style>
