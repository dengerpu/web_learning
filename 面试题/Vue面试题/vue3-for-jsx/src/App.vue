<template>
  <p>Vue3 JSX</p>
  <hr>
  <!-- <demo1 /> -->
  <Demo></Demo>
  <Parent></Parent>
  
</template>

<script>
// import demo1 from './components/jsx-basic/Demo1.vue'
// import demo1 from './components/jsx-basic/Demo1.jsx'
// import Demo from './components/tabs-template/Demo.vue'
import Demo from './components/tabs-jsx/Demo.vue'
// import Parent from './components/scope-slot-template/Parent.vue'
import Parent from './components/scope-slot-jsx/Parent.jsx'
export default {
  name: 'App',
  components: {
    // demo1
    Demo,
    Parent
  }
}
</script>

<style>
</style>
