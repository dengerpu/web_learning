<template>
  <DynamicFormItem :formState="item1"></DynamicFormItem>
</template>

<script lang="ts">
import DynamicFormItem from './DynamicFormItem.vue';
import item1 from './FormPageData';
export default {
  components: {
    DynamicFormItem
  },
  data() {
    return {
      item1
    }
  }
}
</script>