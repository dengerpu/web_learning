<script>
function add (a, b) { return a + b }
</script>

<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue'
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
  const countRef = ref(100)

  function addCount() {
      countRef.value++
  }

  const state = reactive({
      name: '张三'
  })
  const { name } = toRefs(state)

  console.log( add(10, 20) )

  function onChange(info) {
      console.log('on change', info)
  }
  function onDelete(info) {
      console.log('on delete', info)
  }

  const child2Ref = ref(null)
  onMounted(() => {
      // 拿到 child2 组件的一些数据
      console.log(child2Ref.value)
      console.log(child2Ref.value.a)
      console.log(child2Ref.value.b)
  })
</script>

<template>
  <p @click="addCount">{{countRef}}</p>
  <p>{{name}}</p>
  <hr>

  <child-1 :name="name" :age="countRef" @change="onChange" @delete="onDelete"></child-1>
  <hr>

  <child-2 ref="child2Ref"></child-2>
</template>