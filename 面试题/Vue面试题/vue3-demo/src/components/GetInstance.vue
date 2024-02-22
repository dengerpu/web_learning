<template>
  <p>get instance</p>
</template>

<script>
import {getCurrentInstance, onMounted} from 'vue'
export default {
  data() {
    return {
      x: 1,
      y: 2
    }
  },
  setup() { // 执行于beforeCreate和created
    console.log('Composition API this', this) // undefined

    const instance = getCurrentInstance()
    console.log('Composition API instance', instance)

    onMounted(() =>{
      console.log('Composition API this.y', instance.data.y) // 2
    })

    return {}
  },
  mounted() {
    console.log('Options API this', this) // Proxy
    console.log('Options API this.y', this.y) // 1
  }
}
</script>
