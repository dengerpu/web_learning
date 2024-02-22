import { onMounted } from 'vue';
<template>
  <p ref="elemRef">我是一行文字</p>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const elemRef = ref(null);
    onMounted(() => {
      console.log(elemRef.value); // 输出：<p>我是一行文字</p>
    });

    return {
      elemRef,
    };
  },
};
</script>
