<template>
  <p>ref demo {{ ageRef }} {{ state.name }}</p>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const ageRef = ref(18); // 值类型 响应式
    const nameRef = ref("张三");
    const state = reactive({
      name: nameRef,
    });

    setTimeout(() => {
      console.log("ageRef", ageRef.value);
      ageRef.value = 25; // .value 修改值
      nameRef.value = "张三AAAA";
    }, 1500);

    return { ageRef, state };
  },
};
</script>
