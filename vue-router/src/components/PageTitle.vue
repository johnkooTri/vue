<template>
    <h2>{{title}}</h2>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {

    props:{
        title:{
            type:String,
            default:"페이지 제목입니다."
        }
    }

}
</script>
