<template>
  <div>
    <p>text: {{ text1 }}</p>
    <input type="text1" :value="text1" @input="setModelValue" />
    <!--
          1. 上面的 input 使用了 :value 而不是 v-model
          2. 上面的 change1 和 model.event1 要对应起来
          3. text1 属性对应起来
      -->
  </div>
</template>

<script>
export default {
  model: {
    prop: "text1", // 对应 props text1
    event: "change",
  },
  props: {
    text1: {
      type: String,
      default: "默认值",
    },
  },
  methods: {
    setModelValue(event) {
      console.log(event.target.value);
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style>
</style>