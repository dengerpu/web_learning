<template>
  <div>
      <p>num {{num}}</p>
      <p>double1 {{double1}}</p>
      <input v-model="double2"/>
  </div>
</template>

<script>
export default {
  data() {
      return {
          num: 20
      }
  },
  computed: {
    // 计算属性有缓存，只要this.num不变，double1的值就一直是上一次计算的值
      double1() {
          return this.num * 2
      },
      double2: {
          get() {
              return this.num * 2
          },
          set(val) {
              this.num = val/2
          }
      }
  }
}
</script>