<template>
  <div id="app">
    <TqlDemo></TqlDemo>
    <ComputedDemo></ComputedDemo>
    <WatchDemo></WatchDemo>
  </div>
</template>
<script>
import ComputedDemo from './views/基本使用/ComputedDemo.vue'
import TqlDemo from './views/基本使用/TqlDemo.vue'
import WatchDemo from './views/基本使用/WatchDemo.vue'
export default {
  name: 'app',
  components: {
    TqlDemo,
    ComputedDemo,
    WatchDemo
  }
}
</script>
<style>
</style>
