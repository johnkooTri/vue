<template>
  <div class="home">
<Pagetitle title="부모 컴포넌트에서 자식컴포넌트로 데이터 전달"/>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Pagetitle from '@/components/PageTitle.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
    ,Pagetitle
  }
}
</script>
