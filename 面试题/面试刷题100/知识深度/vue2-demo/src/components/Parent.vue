<template>
  <div>
    <div ref="div">父组件</div>
    <input type="text" v-model="msg">
    <div>{{newMsg}}</div>
    <div :style="{height: height + 'px'}" class="test"></div>
    <hr>
    <child :msg="msg"></child>
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  name: 'ParentDemo',
  components: {
    Child
  },
  data() {
    return {
      msg: '父组件的数据',
      initHeight: 100
    }
  },
  beforeCreate() {
    console.log(this.$options)
    console.log('父beforeCreate', this.msg)
  },
  created() {
    console.log('父created', this.msg)
  },
  beforeMount() {
    console.log('父beforeMount', this.$refs.div)
  },
  mounted() {
    this.initHeight = 500
    console.log('父mounted', this.$refs.div)
  },
  beforeUpdate() {
    console.log('父beforeUpdate', this.$refs.div.innerHTML)
  },
  updated() {
    console.log('父updated', this.$refs.div.innerHTML)
  },
  activated() {
    console.log('父activated')
  },
  deactivated() {
    console.log('父deactivated')
  },
  beforeDestroy() {
    console.log('父beforeDestroy')
  },
  destroyed() {
    console.log('父destroyed')
  },
  errorCaptured() {
    console.log('父errorCaptured')
  },
  computed: {
    newMsg() {
      return this.msg + 'computed'
    },
    height: {
      get() {
        return this.initHeight
      },
      set(val) {
        console.log('set发生改动', val)
        this.initHeight = val
      }
    }
  },
  watch: {
    msg: {
      handler(newVal, oldVal) {
        console.log('父watch', newVal, oldVal)
      },
      immediate: true
    }
  }
}
</script>
<style scoped>
.test {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
</style>
