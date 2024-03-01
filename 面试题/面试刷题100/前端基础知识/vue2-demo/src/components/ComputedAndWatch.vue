<template>
  <div>
    <input type="text" v-model="msg">
    <p>msg1:{{msg1}}</p>
    <p>msg2:{{msg2}}</p>
    <p>当前时间：{{time}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'hello'
    }
  },
  computed: {
    msg1: function() {
      return this.msg.split('').reverse().join('')
    },
    time() {
      // 计算属性是基于它们的响应式依赖进行缓存的。
      // 计算属性将不再更新，因为 Date.now() 不是响应式依赖
      return Date.now()
    },
    // 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter
    msg2: {
      get() {
        return this.msg + 'get'
      },
      set(val) {
        return val + 'set'
      }
    }
  },
  watch: {
    msg: function(val) {
      console.log('msg 更新了', val)
    },
    msg1: {
      handler() {
        console.log('msg1更新了')
      },
      deep: true, 
      immediate: true
    }
  }
}
</script>

<style>

</style>