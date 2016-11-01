<template>
  <div class="layout-column">
    <div class="flex tags-list">

    </div>
  </div>
</template>

<script>
import inputContainer from './input-container'

export default {
  components: {
    inputContainer
  },

  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },

  data () {
    return {
      search: '',
      tags: []
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-list {
  min-height: 40vh;
}

.add-button {
  flex: 0;
  min-width: 64px;
  margin: 8px;
  color: white;
  border-color: white;
}
</style>
