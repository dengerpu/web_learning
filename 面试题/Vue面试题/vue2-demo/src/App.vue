<template>
  <div id="app">
    <TqlDemo></TqlDemo>
    <ComputedDemo></ComputedDemo>
    <WatchDemo></WatchDemo>
    <ClassDemo></ClassDemo>
    <ConditionDemo></ConditionDemo>
    <ListDemo></ListDemo>
    <EventDemo></EventDemo>
    <!-- <FormDemo></FormDemo> -->
    <ComponentsDemo v-if="show1"></ComponentsDemo>
    <button @click="show1 = false">点击隐藏</button>
    <CustomVModel v-model="name"></CustomVModel>
    <NextTick></NextTick>
    <SlotScope url="http://www.baidu.com">
      <!-- v-slot这个名字也是任意的 -->
     <template v-slot="scoped">
        {{ scoped.slotData.title }}
     </template>
    </SlotScope>

    <!-- 动态组件 -->
    <component :is="currentComponent"></component>

    <!-- 异步组件 -->
    <FormDemo v-if="show"></FormDemo>
    <button @click="show = true">点击展示</button>

    <mixins></mixins>
  </div>
</template>
<script>
import ClassDemo from './views/基本使用/ClassDemo.vue'
import ComputedDemo from './views/基本使用/ComputedDemo.vue'
import ConditionDemo from './views/基本使用/ConditionDemo.vue'
import EventDemo from './views/基本使用/EventDemo.vue'
// 这是同步写法
// import FormDemo from './views/基本使用/FormDemo.vue'
import ListDemo from './views/基本使用/ListDemo.vue'
import TqlDemo from './views/基本使用/TqlDemo.vue'
import WatchDemo from './views/基本使用/WatchDemo.vue'
import ComponentsDemo from './views/组件使用/index.vue'
import CustomVModel from './views/高级特性/CustomVModel.vue'
import Mixins from './views/高级特性/Mixins.vue'
import NextTick from './views/高级特性/NextTick.vue'
import SlotScope from './views/高级特性/SlotScope.vue'
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
    FormDemo: () => import("./views/基本使用/FormDemo.vue"),
    // 相当于
    // FormDemo: () => {
    //   return import("./views/基本使用/FormDemo.vue")
    // }
    ComponentsDemo,
    CustomVModel,
    NextTick,
    SlotScope,
    Mixins
  },
  data() {
    return {
      name: "自定义model",
      currentComponent: "SlotScope",
      show: false,
      show1: true
    }
  }
}
</script>
<style>
</style>
