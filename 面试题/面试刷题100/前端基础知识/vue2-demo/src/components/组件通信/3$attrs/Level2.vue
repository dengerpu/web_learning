<template>
  <div>
    <p v-bind="$attrs">Level2</p>
    <Level3
        :x="x"
        :y="y"
        :z="z"
        @getX="getX"
        @getY="getY"
        @getZ="getZ"
        v-bind="$attrs"
    ></Level3>
  </div>
</template>

<script>
import Level3 from './Level3'

export default {
  name: 'Level2',
  components: { Level3 },
  props: ['a'],
  inheritAttrs: false,
  data() {
      return {
          x: 'xxx',
          y: 'yyy',
          z: 'zzz'
      }
  },
  methods: {
      getX() {
          return this.x
      },
      getY() {
          return this.y
      },
      getZ() {
          return this.z
      }
  },
  created() {
      console.log('level2', Object.keys(this.$attrs), Object.keys(this.$listeners)) // 是 props 和 emits 后补
  },
}
</script>