<template>
  <life-cycles></life-cycles>
  <ref></ref>
  <ref-template></ref-template>
  <toRef></toRef>
  <toRefs></toRefs>
  <MousePosition></MousePosition>
  <VModel></VModel>
  <watch></watch>
  <get-instance></get-instance>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LifeCycles from './components/LifeCycles.vue'
import Ref from './components/Ref.vue'
import RefTemplate from './components/RefTemplate.vue'
import toRef from './components/toRef.vue'
import toRefs from './components/toRefs.vue'
import MousePosition from './components/MousePosition/index.vue'
import VModel from './components/VModel/index.vue'
import Watch from './components/watch.vue'
import GetInstance from './components/GetInstance.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LifeCycles,
    Ref,
    RefTemplate,
    toRef,
    toRefs,
    MousePosition,
    VModel,
    Watch,
    GetInstance
  }
}
</script>
