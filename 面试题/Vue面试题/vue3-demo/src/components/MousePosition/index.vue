<template>
  <p>mouse position {{state.x}} {{state.y}}</p>
</template>

<script>
import {useMousePosition, useMousePosition2} from './useMousePosition'
export default {
  name: 'mousePosition',
  setup() {
    // const {x, y} = useMousePosition()
    // return {x, y}
    
    // 返回state对象，不能解构
    const state = useMousePosition2()
    return {state}
  }
}
</script>
