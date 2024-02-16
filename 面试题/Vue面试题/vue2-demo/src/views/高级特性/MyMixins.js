export default {
  data() {
      return {
          city: '北京'
      }
  },
  methods: {
      showName() {
          console.log(this.name)
      }
  },
  mounted() {
      // 自己定义的变量和函数都可能会存在变量冲突
      // 但是周期函数之类的不会
      console.log('mixin mounted', this.name)
  }
}
