<template>
  <div>
    <h1>Parent父组件</h1>
    <hr />
    <child :msg="msg" @editMessage="editMessage"></child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  components: { Child },
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      msg: "父组件的数据",
    };
  },
  methods: {
    // 接收子组件传递过来的数据
    editMessage(value) {
      console.log("editMessage:", value);
    }
  }
};
</script>
