<template>
  <div id="app">
    <!-- <ComputedAndWatch></ComputedAndWatch> -->
    <Parent></Parent>
    <!-- <Level1></Level1> -->
  </div>
</template>
<script>
import ComputedAndWatch from './components/ComputedAndWatch.vue';
// import Parent from './components/组件通信/1pros,emit/Parent.vue'
// import Parent from './components/组件通信/2自定义事件/Parent.vue'
import Level1 from './components/组件通信/3$attrs/Level1.vue';
// import Parent from './components/组件通信/4-5$parent$refs/Parent.vue'
import Parent from './components/组件通信/6provide-inject/Parent.vue'
export default {
  components: {
    ComputedAndWatch,
    Parent,
    Level1
  }
}
</script>

