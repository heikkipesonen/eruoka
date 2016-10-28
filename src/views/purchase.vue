<template>
  <view-area background-image="../static/bg.jpg">
    <div class="flex">
      <div class="container-absolute" v-scrolly>
        <ul class="layout-column item-list">
          <li @click="openEditor(item)" v-for="item in list" class="list-item">
            <value-display v-model="item.value"></value-display>
          </li>
        </ul>
      </div>
    </div>
    <div class="toolbar primary">
      <button @click.self="addNew">Add</button>
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
      values: Array(100).fill(false).map(() => {
        return {
          value: Math.round((Math.random() * 200) * 100) / 100,
          tags: []
        }
      })
    }
  },

  computed: {
    list () {
      let list = []
      list.push(...this.values)
      list.reverse()
      return list
    }
  },

  methods: {
    addNew () {
      let item = {
        value: 0,
        tags: []
      }

      this.values.push(item)

      this.openEditor(item)
    },

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
<style lang="scss" scoped>
@import '../styles/theme';

.item-list {
  .list-item {
    padding: 16px 8px;

    &:not(:last-of-type) {
      border-bottom: 1px solid;
      border-color: fade_out($theme-primary-text, 0.7);
    }
  }

  .value-display {
    justify-content: flex-start;
    text-shadow: 0px 0px 15px rgba(0,0,0, 0.5);
    font-size: 2em;
    font-weight: 800;
    color: $theme-primary-text
  }
}

</style>
