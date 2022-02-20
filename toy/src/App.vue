<template>



  <div id="app">

    <div class ="menu">
      <a v-for="(a,i) in menus" :key="i">{{ a }}</a>
    </div>


<img :src="imgpath2" class="room-img">
    <div v-for="(a,i) in products" :key="i">
      <!-- <img :src="imgpath2" class="room-img"> -->
      <!-- {{imgpath[i]}} -->

      <!-- <img src="./assets/room0.jpg" class="room-img"> -->

      <h4 class="red" :style="style1">{{a}}</h4>
      <p>50만원</p>
      <!-- <button v-on:click="callcnt++">허위매물신고</button><span>신고수 : {{ callcnt }}</span> -->
          <!-- <button @mouseover="increase(i)">허위매물신고</button> -->
          <button @mouseover="increase(i)">허위매물신고</button>
          <span>신고수 : {{ callcnt[i] }}</span>
    </div>      



  </div>




</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      price1:60,
      price2:70,
      style1:'color : blue',
      products:['역삼동원룸','천호동원룸','마포구원룸'],
      menus:['Home','Shop','About'],
      callcnt:[0,1,2],
      imgpath2:'./assets/room0.jpg',
      imgpath:[
            './assets/room0.jpg',
            './assets/room1.jpg',
            './assets/room2.jpg'
      ]
    }
  },

  methods:{

    makeimg(i){

      this.imgpath='./assets/room'+i+'.jpg'
      console.log(this.imgpath)
      this.$forceUpdate();
    },

    increase(i){
      
      // console.log(i+"   :  번째 데이터 ");

      // console.log(this.callcnt[i]+1);

      this.callcnt[i]=this.callcnt[i]+1

      this.$forceUpdate();

      // this.callcnt[i]=4+i;

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

.room-img{
  width:100%;
  margin-top:40px;
}



.menu{
background:darkslateblue;
padding:15px;
border-radius: 5px;
}

.menu a {
  color:white;
  padding:10px;
}


</style>
