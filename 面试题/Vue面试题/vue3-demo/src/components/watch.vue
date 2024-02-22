<template>
  <p>watch vs watchEffect</p>
  <p>{{numberRef}}</p>
  <p>{{name}} {{age}}</p>
</template>

<script>
import { watch, ref, reactive, toRefs, watchEffect } from 'vue'
export default {
  name: 'Watch',
  setup() {
    const numberRef = ref(100)
    const state = reactive({
      name: '张三',
      age: 15
    })

    watchEffect(() => {
      // 初始化时，一定会执行一次（收集要监听的数据）
      console.log('初始化时候就会调用，因为要收集要监听的数据')
    })

    watchEffect(() => {
      console.log('watchEffect state.name', state.name)
    })

    watch(numberRef, (newValue, oldValue) => {
      console.log('watch numberRef', newValue, oldValue)
    }, {
      immediate: true // 初始化之前就监听，可选
    })

    watch([() => state.name, () => state.age], ([newName, newAge], [oldName, oldAge]) => {
      console.log('watch state', newName, newAge, oldName, oldAge)
    })

    watch(
        // 第一个参数，确定要监听哪个属性
        () => state.age, 
        // 第二个参数，回调函数
        (newValue, oldValue) => {
          console.log('watch state.age', newValue, oldValue)
        }, 
        // 第三个参数，配置项
        {
          immediate: true, // 初始化之前就监听，可选
          deep: true // 深度监听，可选
        }
      )

    setTimeout(() => {
      numberRef.value = 200
      state.name = '李四'
      state.age = 20
    }, 1500)
      

    return {
      numberRef,
      ...toRefs(state)
    }
  }
}
</script>
