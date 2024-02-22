<template>
  <life-cycles></life-cycles>
  <ref></ref>
  <ref-template></ref-template>
  <toRef></toRef>
  <toRefs></toRefs>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LifeCycles from './components/LifeCycles.vue'
import Ref from './components/Ref.vue'
import RefTemplate from './components/RefTemplate.vue'
import toRef from './components/toRef.vue'
import toRefs from './components/toRefs.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LifeCycles,
    Ref,
    RefTemplate,
    toRef,
    toRefs
  }
}
</script>
