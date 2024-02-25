import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'Tabs',
  props: ['defaultActiveKey'],
  emits: ['change'],
  setup(props, { emit, slots }) {
    const children = slots.default();
    const tabs = children.map(item => {
      const {key, title} = item.props || {};
      return {
          key,
          title
      }
    })
    // 当前 actKey
    const actKey = ref(props.defaultActiveKey)
    function changeActKey(key) {
      actKey.value = key
      emit('change', key)
    }
    // jsx
    const render = () => {
      return <>
        {/* 渲染 buttons */}
        <div>
          {tabs.map(tab =>{
            const { key, title } = tab
            return <button
                    key={key}
                    style={{ color: actKey.value === key ? 'blue' : '#333' }}
                    onClick={() => changeActKey(key)}
                    >{title}</button>
          }) }
        </div>
        <div>
          {/*控制显示与隐藏*/}
          {children.filter(item => item.props.key === actKey.value)}
        </div>
      </>
    }
    return render
  }
})