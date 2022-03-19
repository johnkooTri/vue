<template>
    <h2>{{title}}</h2>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {

    // props:{
    //     title:{
    //         type:String,
    //         default:"페이지 제목입니다."
    //     }
    // }
    // ,
    data(){
         return{
                title:"동적페이지 타이틀",
                post:{id:1,title:'vue3'}

               }
    }
}
</script>
