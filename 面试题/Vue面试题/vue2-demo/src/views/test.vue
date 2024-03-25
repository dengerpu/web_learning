<template>
  <div>
    测试data和methods
    <button @click="msg">data中的msg</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      msg: '1111'
    }
  },
  methods: {
    msg() {
      console.log('methods中的msg')
    }
  }
}
</script>

<style>

</style>