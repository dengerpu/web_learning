<template>
  <div>Child子组件，msg:{{ msg2() }}</div>
</template>

<script>
export default {
  // inject: ['msg'],
  // inject: ['msg1', 'msg2'],
  inject: {
    msg: {
      default: "使用默认值",
    },
    msg1: "msg1",
    msg2: "msg2",
  },
  created() {
    console.log(this.msg, this.msg1);
  },
};
</script>
