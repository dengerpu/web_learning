<template>
  <div>
    我负责提供数据
    <input type="text" v-model="msg2">
    <child></child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: {
    Child
  },
  data() {
    return {
      msg: '父组件的msg数据',
      msg2: '初始化数据'
    }
  },
  // 传递静态数据
  // provide: {
  //   msg: '静态数据'
  // },
  // 传递组件中的数据
  provide() {
    return {
      msg1: this.msg,
      msg2: () => this.msg2
    }
  }
}
</script>
