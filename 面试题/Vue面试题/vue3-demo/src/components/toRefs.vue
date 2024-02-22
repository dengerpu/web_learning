<template>
  <p>toRefs demo {{ age }} {{ name }}</p>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "ToRefs",
  setup() {
    const state = reactive({
      age: 20,
      name: "张三",
    });

    // const stateAsRefs = toRefs(state); // 将响应式对象，变成普通对象

    // const { age: ageRef, name: nameRef } = stateAsRefs // 每个属性，都是 ref 对象
    // return {
    //     ageRef,
    //     nameRef
    // }

    setTimeout(() => {
      state.age = 25;
    }, 1500);

    return {
      ...toRefs(state),
      // ...state // 这样会丢失响应式
    };
  },
};
</script>
