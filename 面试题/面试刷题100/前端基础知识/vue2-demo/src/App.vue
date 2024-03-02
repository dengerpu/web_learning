<template>
  <div id="app">
    <!-- <ComputedAndWatch></ComputedAndWatch> -->
    <Parent></Parent>
  </div>
</template>
<script>
import ComputedAndWatch from './components/ComputedAndWatch.vue';
import Parent from './components/组件通信/1pros,emit/Parent.vue'
export default {
  components: {
    ComputedAndWatch,
    Parent
  }
}
</script>

