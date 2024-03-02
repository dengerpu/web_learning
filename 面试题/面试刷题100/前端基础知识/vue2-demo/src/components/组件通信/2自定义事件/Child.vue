<template>
  <div>
    <h1>Child子组件</h1>
    <input type="text" v-model="newMsg" @input="editMessage">
  </div>
</template>

<script>
import emit from './emit'
export default {
  name: 'Child',
  data () {
    return {
      newMsg: '111'
    }
  },
  methods: {
    editMessage() {
      emit.$emit('editMessage', this.newMsg);
    }
  }
}
</script>
