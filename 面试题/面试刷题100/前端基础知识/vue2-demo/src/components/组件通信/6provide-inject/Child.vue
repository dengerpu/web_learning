<template>
  <div>Child子组件，msg:{{msg2()}}</div>
</template>

<script>
export default {
  // inject: ['msg'],
  inject: ['msg1', 'msg2'],
  created() {
    console.log(this.msg, this.msg1)
  }
}
</script>
