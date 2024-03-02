<template>
  <div>
    <h1>Parent父组件</h1>
    <button @click="getChildMessage">获取子组件信息，{{newMsg}}</button>
    <hr />
    <child ref="child"></child>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
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
    getChildMessage(value) {
      console.log("getChildMessage:", this.$refs.child);
    }
  }
};
</script>
