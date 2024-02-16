<template>
  <div>
    Mixinx
  </div>
</template>

<script>
import MyMixins from './MyMixins';
export default {
  mixins: [MyMixins],
  data() {
    return {
      name: '张三'
    }
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style>

</style>