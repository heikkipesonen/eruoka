<template>
  <div :class="{'bottom-sheet': true, 'sheet-open': open}" :style="viewStyle">
    <div class="sheet-container" :style="containerStyle">
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
        return '../static/bg-blur.jpg'
      }
    },

    backgroundColor: {
      type: String,
      default () {
        return 'rgba(119, 185, 255, 0.6)'
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
        'background': `linear-gradient(to bottom, ${this.backgroundColor} 0%,rgba(255, 255, 255, 0) 100%)`
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
  }
}
</style>
