<template>

<div><h1>{{msg}}</h1></div>
</template>
<script>
export default {
data() {
  return {
    msg:''
  }
},
 methods: {
   callFromParent() {
     console.log('부모 컴포넌트에서 직접 호출한 함수');
   }
 }
}
</script>