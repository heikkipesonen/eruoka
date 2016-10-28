import Vue from 'vue'

Vue.directive('scrolly', {
  bind (el) {
    el.style.overflowY = 'auto'
    el.style['-webkit-overflow-scrolling'] = 'touch'

    el.addEventListener('touchmove', (evt) => {
      evt.stopPropagation()
    })

    el.addEventListener('touchstart', (evt) => {
      evt.stopPropagation()
      let top = el.scrollTop
      let height = el.scrollHeight
      let viewHeight = el.offsetHeight
      let maxScroll = height - el.parentNode.offsetHeight

      if (top === 0 && maxScroll > 0) {
        el.scrollTop = 1
      } else if (height - top === viewHeight) {
        el.scrollTop = maxScroll - 1
      }
    })

    el.addEventListener('touchend', (evt) => {
      evt.stopPropagation()
    })
  }
})
