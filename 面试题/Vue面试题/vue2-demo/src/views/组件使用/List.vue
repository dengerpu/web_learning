<template>
  <div>
      <ul>
          <li v-for="item in list" :key="item.id">
              {{item.title}}

              <button @click="deleteItem(item.id)">删除</button>
          </li>
      </ul>
  </div>
</template>

<script>
import event from './event'

export default {
  // props: ['list']
  props: {
      // prop 类型和默认值
      list: {
          type: Array,
          default() {
              return []
          }
      }
  },
  data() {
      return {

      }
  },
  methods: {
      deleteItem(id) {
          this.$emit('delete', id)
      },
      addTitleHandler(title) {
          console.log('on add title', title)
      }
  },
  beforeCreate() {
    console.log('list beforeCreate')
  },
  created() {
    console.log('list created')
  },
  beforeMount() {
    console.log('list beforeMount')
  },
  mounted() {
      console.log('list mounted')
      // 绑定自定义事件
      event.$on('onAddTitle', this.addTitleHandler)
  },
  beforeUpdate() {
      console.log('list before update')
  },
  updated() {
      console.log('list updated')
  },
  beforeDestroy() {
      // 及时销毁，否则可能造成内存泄露
      event.$off('onAddTitle', this.addTitleHandler)
      console.log('list beforeDestroy')
  },
  destroyed() {
    console.log('list destroyed')
  }
}
</script>