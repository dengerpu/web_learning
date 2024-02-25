<template>
  <p>Vue3 JSX</p>
  <hr>
  <!-- <demo1 /> -->
  <Demo></Demo>
  
</template>

<script>
// import demo1 from './components/jsx-basic/Demo1.vue'
// import demo1 from './components/jsx-basic/Demo1.jsx'
// import Demo from './components/tabs-template/Demo.vue'
import Demo from './components/tabs-jsx/Demo.vue'
export default {
  name: 'App',
  components: {
    // demo1
    Demo
  }
}
</script>

<style>
</style>
