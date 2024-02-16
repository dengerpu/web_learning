<template>
  <div>
      <input v-model="name"/>
      <input v-model="info.city"/>
  </div>
</template>

<script>
export default {
  data() {
      return {
          name: '张三',
          info: {
              city: '北京'
          }
      }
  },
  watch: {
      name(newVal, oldVal) {
        // 值类型，可正常拿到 newVal 和 oldVal
          console.log('watch name', newVal, oldVal) 
      },
      info: {
          handler(newVal, oldVal) {
              // 引用类型，拿不到 oldVal 。因为指针相同，此时已经指向了新的 val
              // newVal 和 oldVal 都指向了同一个对象
              console.log('watch info', newVal, oldVal) 
          },
          deep: true // 深度监听
      }
  }
}
</script>