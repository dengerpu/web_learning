<template>
  <div>
    <h1>Child子组件</h1>
    <input type="text" v-model="newMsg" @input="editMessage">
  </div>
</template>

<script>
export default {
  name: 'Child',
  props: ['msg'],
  data () {
    return {
      newMsg: this.msg
    }
  },
  methods: {
    editMessage() {
      this.$emit('editMessage', this.newMsg);
    }
  }
}
</script>
