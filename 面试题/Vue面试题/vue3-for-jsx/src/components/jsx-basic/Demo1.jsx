import {defineComponent, ref, reactive} from 'vue'
import Child from './Child'
// 支持传入setup函数和对象配置两种方式
export default defineComponent(() => {
  const flagRef = ref(true)
  function changeFlag() {
    flagRef.value = !flagRef.value
  }
  const state = reactive({
      list: ['a1', 'b1', 'c1']
  })

  const render = () => {
    return <>
      <h1>Demo1.jsx</h1>
      <button onClick={changeFlag}>demo1: {flagRef.value.toString()}</button>
      {flagRef.value && <Child/>}
      <ul>
        {state.list.map(item =>{
          return <li>{item}</li>
        })}
      </ul>
    </>
  }
  return render
})