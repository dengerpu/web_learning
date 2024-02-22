import {ref, reactive, onMounted, onUnmounted} from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 监听鼠标移动
  onMounted(() => {
    console.log('useMousePosition mounted')
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    console.log('useMousePosition unmounted')
    window.removeEventListener('mousemove', update)
  })

  return {
    x, y
  }
}
export function useMousePosition2() {
  const state = reactive({
    x: 0,
    y: 0
  })

  function update(e) {
    state.x = e.pageX
    state.y = e.pageY
  }

  // 监听鼠标移动
  onMounted(() => {
    console.log('useMousePosition mounted')
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    console.log('useMousePosition unmounted')
    window.removeEventListener('mousemove', update)
  })

  return state
}