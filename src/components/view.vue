<template lang="html">
  <div class="view" :style="viewStyle">
    <div class="background-container" :style="containerStyle"></div>
    <div class="view-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view-area',
  props: {
    backgroundImage: {
      type: String,
      default () {
        return '../static/bg.jpg'
      }
    },

    backgroundColor: {
      type: String,
      default () {
        return 'rgba(29, 208, 127, 1)'
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

<style lang="css">
.view {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background-position: center center;
  background-size: cover;
}

.background-container {
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: 1;
  transition: 0.3s;
  transition-timing-function: cubic-bezier(0.115, 0.350, 0.000, 1.030);
}

.view-content {
  position: relative;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;

}
</style>
