<template>
  <view-area>
    <div class="container-absolute layout-column">
      <div class="layout-column layout-center flex">
        <div @click="openEditor(item)" v-for="item in values">
          <value-display v-model="item.value"></value-display>
        </div>
      </div>
      <div class="toolbar dark">
        <button>Add</button>
      </div>
    </div>

    <item-editor :open="editorOpen" v-model="currentItem" v-on:complete="closeEditor"></item-editor>
  </view-area>
</template>
<script>
import viewArea from '../components/view'
import valueDisplay from '../components/value-display'
import keypad from '../components/keypad'
import itemEditor from '../components/item-editor'
import tagSelect from '../components/tag-select'

export default {
  components: {
    viewArea,
    valueDisplay,
    keypad,
    tagSelect,
    itemEditor
  },

  data () {
    return {
      tagSelectOpen: false,
      editorOpen: false,
      currentItem: {},
      values: [
        {
          value: 1
        },
        {
          value: 2
        }
      ]
    }
  },

  methods: {
    closeEditor (value) {
      this.currentItem = {}
      this.editorOpen = false
    },

    openEditor (item) {
      this.currentItem = item
      this.editorOpen = true
    }
  }
}
</script>
<style lang="scss">
.value-display {
  color: rgb(215, 34, 132);
}
</style>
