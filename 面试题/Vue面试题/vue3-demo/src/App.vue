<template>
  <life-cycles></life-cycles>
  <ref></ref>
  <ref-template></ref-template>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LifeCycles from './components/LifeCycles.vue'
import Ref from './components/Ref.vue'
import RefTemplate from './components/RefTemplate.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LifeCycles,
    Ref,
    RefTemplate
  }
}
</script>
