<template>
  <p>child</p>
  <slot :msg="msg"></slot>
</template>

<script>
export default {
  data() {
      return {
          msg: '我是子组件作用域插槽 Child'
      }
  }
}
</script>