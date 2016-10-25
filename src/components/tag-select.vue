<template>
  <bottom-sheet :open="open">
    {{ newTag }}
    <input-container label="kissa" v-model="newTag"></input-container>

    <div class="flex"></div>

    <div class="toolbar">
      <button>k</button>
      <button>e</button>
    </div>
  </bottom-sheet>
</template>

<script>
import bottomSheet from './bottom-sheet'
import inputContainer from './input-container'

export default {
  components: {
    bottomSheet,
    inputContainer
  },

  props: {
    open: {
      type: Boolean,
      default () {
        return false
      }
    }
  },

  data () {
    return {
      newTag: '',
      tags: []
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
