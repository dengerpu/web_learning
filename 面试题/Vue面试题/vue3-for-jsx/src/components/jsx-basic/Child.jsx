import {defineComponent} from 'vue'

// 支持传入setup函数和对象配置两种方式
export default defineComponent({
  props: ['a'],
  setup(props) {
    const render = () => {
      return <p>Child: {props.a}</p>
    }
    return render
  }
})