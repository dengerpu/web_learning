<script lang="jsx">
import {ref} from 'vue';
import Child from './Child'
export default {
  setup() {
    const countRef = ref(200);

    const render = () => {
      return <>
        <h1>Demo1: {countRef.value}</h1>
        <p>demo1: {countRef.value}</p> {/*jsx*/}
        <Child a={countRef.value} />
      </>
    };
    return render;
  },
};
</script>
