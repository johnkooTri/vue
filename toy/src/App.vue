<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <div>

      <h4>직방</h4>
      <p>{{price1}}</p>
        


    </div>

  </div>




</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      price1:60,
      price1:70
    }
  },

  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
