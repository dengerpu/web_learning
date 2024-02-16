<template>
  <div id="app">
    <TqlDemo></TqlDemo>
    <ComputedDemo></ComputedDemo>
    <WatchDemo></WatchDemo>
    <ClassDemo></ClassDemo>
    <ConditionDemo></ConditionDemo>
    <ListDemo></ListDemo>
  </div>
</template>
<script>
import ClassDemo from './views/基本使用/ClassDemo.vue'
import ComputedDemo from './views/基本使用/ComputedDemo.vue'
import ConditionDemo from './views/基本使用/ConditionDemo.vue'
import ListDemo from './views/基本使用/ListDemo.vue'
import TqlDemo from './views/基本使用/TqlDemo.vue'
import WatchDemo from './views/基本使用/WatchDemo.vue'
export default {
  name: 'app',
  components: {
    TqlDemo,
    ComputedDemo,
    WatchDemo,
    ClassDemo,
    ConditionDemo,
    ListDemo
  }
}
</script>
<style>
</style>
