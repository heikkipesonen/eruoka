<template>
  <div :class="{'bottom-sheet': true, 'sheet-open': open}">
    <div class="background-container">
      <svg width="100%" height="100%" viewBox="0 0 375 668" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
              <radialGradient cx="55.5157289%" cy="15.1920852%" fx="55.5157289%" fy="15.1920852%" r="81.2575576%" id="radialGradient-1">
                  <stop stop-color="#F76036" offset="0%"></stop>
                  <stop stop-color="#B61919" offset="100%"></stop>
              </radialGradient>
          </defs>
          <rect id="Rectangle" stroke="none" fill="url(#radialGradient-1)" fill-rule="evenodd" x="0" y="0" width="375" height="667"></rect>
      </svg>
    </div>
    <div class="sheet-container">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottomSheet',
  props: {
    open: {
      type: Boolean
    },

    backgroundImage: {
      type: String,
      default () {
        return ''
      }
    },

    backgroundColor: {
      type: Array,
      default () {
        return ['rgba(68, 154, 246, 0.93)', 'rgba(59, 108, 252, 0.88)']
      }
    }
  },

  computed: {
    viewStyle () {
      return {
        'background-image': `url(${this.backgroundImage})`
      }
    },
    containerStyle () {
      return {
        'background': `linear-gradient(to bottom, ${this.backgroundColor[0]} 0%,  ${this.backgroundColor[1]} 100%)`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/theme';

.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;

  transform: translate3d(0, 100%, 0);
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.115, 0.350, 0.000, 1.030);
  background-position: center center;
  background-size: cover;
  z-index: 10;


  &.sheet-open {
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.3);
    transform: translate3d(0, 0, 0);
  }

  .sheet-container {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    z-index: 1;
  }
}
</style>
