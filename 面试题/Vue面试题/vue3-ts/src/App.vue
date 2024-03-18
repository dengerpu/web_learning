<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <DynamicForm></DynamicForm>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DynamicForm from './components/DynamicForm/DynamicForm.vue';

export default defineComponent({
  name: 'App',
  components: {
    DynamicForm
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
