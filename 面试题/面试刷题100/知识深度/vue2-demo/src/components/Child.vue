<template>
  <div>
    <div>子组件</div>
    <p>父组件传递过来的数据:{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'ChildDemo',
  props: ['msg'],
  beforeCreate() {
    console.log(this.$options)
    // 这里获取不到this.msg，获取会报错
    console.log('子beforeCreate')
  },
  // created() {
  //   console.log('子created', this.msg)
  // },
  // beforeMount() {
  //   console.log('子beforeMount')
  // },
  // mounted() {
  //   console.log('子mounted')
  // },
  // beforeUpdate() {
  //   console.log('子beforeUpdate')
  // },
  // updated() {
  //   console.log('子updated')
  // },
  // // activated() {
  // //   console.log('子activated')
  // // },
  // // deactivated() {
  // //   console.log('子deactivated')
  // // },
  // beforeDestroy() {
  //   console.log('子beforeDestroy')
  // },
  // destroyed() {
  //   console.log('子destroyed')
  // },
  // errorCaptured() {
  //   console.log('子errorCaptured')
  // }
}
</script>
