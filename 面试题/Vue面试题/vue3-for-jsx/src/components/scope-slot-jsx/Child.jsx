import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: ['render'],
  setup(props) {
    const msgRef = ref('子组件作用域插槽-jsx')

    return () => {
      return <>{props.render(msgRef.value)}</>
    }
  }
})