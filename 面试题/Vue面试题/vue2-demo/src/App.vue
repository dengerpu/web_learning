<template>
  <div id="app">
    <TqlDemo></TqlDemo>
    <ComputedDemo></ComputedDemo>
    <WatchDemo></WatchDemo>
    <ClassDemo></ClassDemo>
    <ConditionDemo></ConditionDemo>
    <ListDemo></ListDemo>
    <EventDemo></EventDemo>
    <FormDemo></FormDemo>
    <ComponentsDemo></ComponentsDemo>
    <CustomVModel v-model="name"></CustomVModel>
  </div>
</template>
<script>
import ClassDemo from './views/基本使用/ClassDemo.vue'
import ComputedDemo from './views/基本使用/ComputedDemo.vue'
import ConditionDemo from './views/基本使用/ConditionDemo.vue'
import EventDemo from './views/基本使用/EventDemo.vue'
import FormDemo from './views/基本使用/FormDemo.vue'
import ListDemo from './views/基本使用/ListDemo.vue'
import TqlDemo from './views/基本使用/TqlDemo.vue'
import WatchDemo from './views/基本使用/WatchDemo.vue'
import ComponentsDemo from './views/组件使用/index.vue'
import CustomVModel from './views/高级特性/CustomVModel.vue'
export default {
  name: 'app',
  components: {
    TqlDemo,
    ComputedDemo,
    WatchDemo,
    ClassDemo,
    ConditionDemo,
    ListDemo,
    EventDemo,
    FormDemo,
    ComponentsDemo,
    CustomVModel
  },
  data() {
    return {
      name: "自定义model"
    }
  }
}
</script>
<style>
</style>
