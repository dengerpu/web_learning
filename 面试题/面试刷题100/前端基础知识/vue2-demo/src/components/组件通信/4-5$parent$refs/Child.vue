<template>
  <div>
    <h1>Child子组件</h1>
    <input type="text" v-model="newMsg">
    <button @click="getMessage">获取父组件信息</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['msg'],
  data () {
    return {
      newMsg: ''
    }
  },
  methods: {
    getMessage() {
      console.log(this.$parent)
    }
  }
}
</script>
