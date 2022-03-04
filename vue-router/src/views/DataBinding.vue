<template>
    <h1>hello {{ title }}</h1>
    <div v-html="htmlString"></div>

    <div>
        <input type="text" v-model="valueModel"/>
    </div>

    <div>
        <input type="number" v-model="numberModel">
    </div>

    <div>
        <textarea v-model="message"></textarea>
    </div>

    <div>
        <select v-model="city">
            <option value ="01">서울</option>
            <option value ="02">여수</option>
            <option value ="03">대구</option>
        </select>
    </div>

    <div>

     <label>
            <input type="checkbox" v-model="checked" true-value="yes" false-value="no" checked> {{ checked }}
        </label>
    </div>

    <div>
            <label><input type="checkbox" value="서울" v-model="checked_city"> 서울 </label>
            <label><input type="checkbox" value="부산" v-model="checked_city"> 부산 </label>
            <label><input type="checkbox" value="제주" v-model="checked_city"> 제주 </label>
            <br>

            <span>
                체크한 지역: {{ checked_city }}
            </span>

    </div>


    <div>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
        <br>
        <span>선택한 지역: {{ picked }} </span>
    </div>

    <div>
        <img v-bind:src="imgSrc" />
    </div>

    <div>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue==''">click</button>
    </div>

    <div class="container" v-bind:class="{ 'active':isActive,'text-red':hasError}">class binding</div>


    <div class="container" v-bind:class="[activeClass,errorClass]">Class binding</div>


    <div v-bind:style="styleObj">인라인스타일 바인딩</div>

</template>


<script>

export default{
    data() {
        return {
            title:'World',
            htmlString:'<p style="color:red;">This is a red string</p>',
            valueModel:'SouthKorea',
            numberModel:3,
            message:"여러줄을 입력 할 수 있는 textarea 입니다.",
            city:"03",//문자,
            checked:true,
            checked_city:[],
            picked:'',
            radioValue1:"서울",
            radioValue2:"부산",
            radioValue3:"제주",
            imgSrc:"https://kr.vuejs.org/images/logo.png",
            textValue:"",
            isActive:true,
            hasError:true,
            activeClass:'active',
            errorClass:'text-red',
            styleObj:{
                color:'red',
                fontSize:'13px'
            }

        };
    }
}

</script>

<style scoped>

    container{
        width:100%;
        height: 200px;
    }
    .active{
        background-color: yellow;
        font-weight: bold;
    }
    .text-red{
        color:red;
    }


</style>