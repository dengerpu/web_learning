<template>
  <a :href="url">
      <!-- slotData这个名字可以替换成任何你想要的名字 -->
      <slot :slotData="website">
          {{website.subTitle}} <!-- 默认值显示 subTitle ，即父组件不传内容时 -->
      </slot>
  </a>
</template>

<script>
export default {
  props: ['url'],
  data() {
      return {
          website: {
              url: 'http://wangEditor.com/',
              title: 'wangEditor',
              subTitle: '轻量级富文本编辑器'
          }
      }
  }
}
</script>