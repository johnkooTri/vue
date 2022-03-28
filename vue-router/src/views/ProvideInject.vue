<template>
  <div>
    <ProvideInjectChild2 />
  </div>
</template>
<script>
import ProvideInjectChild2 from './ProvideInjectChild';
export default {
  components: {ProvideInjectChild2},
  data() {
    return {
      items: ['A','B']
    };
  },
  provide() {
    return {
      itemLength: this.items.length
    };
  }
}
</script>