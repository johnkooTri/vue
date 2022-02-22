<template>
  <div id="app">
    
    <div class="black-bg" v-if="modalStatus==true">
      <div class="white-bg">
        <h4>상세페이지임</h4>
        <p>상세페이지 내용임</p>
         <button @click="closedlg()">닫기</button>
      </div>
    </div>
    
    
    <h1 v-once>{{ title }}</h1>
    <p>{{ sayHello() }}</p>
    
    
    <div class="menu">
      <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
    </div>


    <div v-for="(a, i) in onerooms" :key="i">
      <img :src="a.image" class="room-img">
      <!-- {{imgpath[i]}} -->

      <!-- <img src="./assets/room0.jpg" class="room-img" /> -->

      <h4 class="red" :style="style1" @click="modalStatus=true">{{ a.title }}</h4>
      <p>{{a.price}} 원</p>
      <!-- <button v-on:click="callcnt++">허위매물신고</button><span>신고수 : {{ callcnt }}</span> -->
      <!-- <button @mouseover="increase(i)">허위매물신고</button> -->
      <button v-on:click="a.callcnt++">허위매물신고</button>
      <span>신고수 : {{ a.callcnt }}  , {{ i }} </span>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import roomdiscData from './assets/oneroom.js'


export default {
  name: "app",
  data() {
    return {
      modalStatus:false,
      price1: 60,
      price2: 70,
      title:'hello vue world!',
      style1: "color : blue",
      onerooms:roomdiscData,
      products: [
        
        {
          room: "역삼동원룸",
          img:require("./assets/room0.jpg")
        },
        {
          room: "천호동원룸",
          img:require("./assets/room1.jpg")
        },
        {
          room: "마포구원룸",
          img:require("./assets/room2.jpg")
        }
          
      ],
      menus: ["Home", "Shop", "About"],
      // callcnt: [0, 1, 2],
      imgpath2: "./assets/room0.jpg",
      imgpath: ["./assets/room0.jpg","./assets/room1.jpg","./assets/room2.jpg"]
    };
  },

  


  methods: {
    makeimg(i) {
      this.imgpath = "./assets/room" + i + ".jpg";
      // console.log(this.imgpath);
      this.$forceUpdate();
    },

    sayHello(){
      this.title = "안녕하십니까!"
     return this.title
    },


    closedlg(){
     

      
        this.modalStatus=false;
      

    },

    increase(i) {
      // console.log(i+"   :  번째 데이터 ");

      // console.log(this.callcnt[i]+1);

      this.callcnt[i] = this.callcnt[i] + 1;

      this.$forceUpdate();

     

      // this.callcnt[i]=4+i;
    },
  },

  components: {
    // HelloWorld
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.room-img {
  width: 50%;
  margin-top: 40px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

body {
  margin : 0
}

div {
  box-sizing: border-box;
}

.black-bg{
  width:100%;height: 100%;
  background: rgba(0,0,0,0,5);
  position: fixed; padding: 20px;
}

.white-bg{
  width:100%;background: white;
  border-radius:8px;
  padding: 20px;
}




</style>
