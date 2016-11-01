<template lang="html">
  <div class="view">
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
        return ''
      }
    },

    backgroundColor: {
      type: Array,
      default () {
        return ['rgb(246, 96, 54)', 'rgb(181, 25, 25)']
      }
    }
  },

  computed: {
    viewStyle () {
      return {
        'background-image': `url(${this.backgroundImage})`
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
