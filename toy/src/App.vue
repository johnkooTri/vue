<template>
  
  <div class="menu">

    <a v-for="(a,i) in 메뉴들" :key="i">{{a}} {{i}}</a>
     
  
     


  </div>
  
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

<!-- <div>
  <h4>역삳동</h4>
  
  </div>  
   -->
 

    
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'




export default {
  name: 'app',
data(){

return {
  메뉴들:['Home','Shop','About'],
  products :['역삼동원룸','천호동원룸','마포구원룸']
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
  /* margin-top: 60px; */
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding:10px;
}



</style>
