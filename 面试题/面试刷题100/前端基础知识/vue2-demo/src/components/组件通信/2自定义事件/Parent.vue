<template>
  <div>
    <h1>Parent父组件</h1>
    <hr />
    <child></child>
  </div>
</template>

<script>
import Child from "./Child.vue";
import emit from "./emit";
export default {
  components: { Child },
  name: "Parent",
  components: {
    Child,
  },
  mounted() {
    // 这里要单独抽成一个函数，直接接箭头函数，解绑的时候不是同一个函数
    emit.$on('editMessage', this.editMessage)
  },
  beforeDestroy() {
    emit.$off('editMessage', this.editMessage)
  },
  methods: {
    // 接收子组件传递过来的数据
    editMessage(value) {
      console.log("editMessage:", value);
    }
  }
};
</script>
