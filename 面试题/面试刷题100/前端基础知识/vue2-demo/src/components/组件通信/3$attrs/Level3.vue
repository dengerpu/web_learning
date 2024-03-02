<template>
  <p>Level3</p>
</template>

<script>

export default {
  name: 'Level3',
  props: ['x'],
  // inheritAttrs: false,
  data() {
      return {
      }
  },
  created() {
      console.log('level3', Object.keys(this.$attrs), Object.keys(this.$listeners)) // 是 props 和 emits 后补
  }
}
</script>