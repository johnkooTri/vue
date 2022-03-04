## main.js 호출 로직


    import { createApp } from 'vue'
    
    import App from './App.vue'
    
    import router from './router' 
    
    createApp(App).use(router).mount('#app')  

**App.vue에서 router가 사용될 수 있도록 추가하고 app.vue를 public 폴더의 index.html 에 정의되어 있는
id="app" 인 html element에 마운트 시킨다.**

  
  

## 문자열 데이터 바인딩

    <h1>hello {{ title }}</h1>

이중 중괄호 사용

  

## html 데이터 바인딩

    <div  v-html="htmlString"></div>

html태그 내에서 이중중괄호 사용시 문자열로 인식

v-html 디렉티브 사용


  

## 체크박스

    <input  type="checkbox"  v-model="checked"  true-value="yes"  false-value="no"  checked> {{ checked }}

input type=text, select 과는 다르게 v-model은 내부적으로 체크박스 checked 속성을 사용

value속성에 데이터 바인딩 하려면 v-bind:value 사용

    <div>
    
    <label><input  type="checkbox"  value="서울"  v-model="checked_city"> 서울 </label>
    
    <label><input  type="checkbox"  value="부산"  v-model="checked_city"> 부산 </label>
    
    <label><input  type="checkbox"  value="제주"  v-model="checked_city"> 제주 </label>
    
    <br>
    
    <span>
    
    체크한 지역: {{ checked_city }}
    
    </span> 
    
    </div>


## button 객체의 disabled

    <div>
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue==''">click</button>
    </div>

    data(){
         return {
             textValue:""
            }

## 클래스 바인딩

반드시 적용해야 하는 클래스는 기존 html 방식처럼 사용하고
조건에 따라 바인딩 할 경우는 v-bind:class 를 이용해서 추가적으로 정의해서 사용
    
    <div class="container" v-bind:class="{'active':isActive,'text-red':hasError}">class binding</div>

## 클래스 바인딩 by 배열사용

    <div class="container" v-bind:class="[activeClass,errorClass]">Class binding</div>
    data(){
        return{
            activeClass:'active',
            errorClass:'text-red'
        }
    }

## 인라인 스타일 바인딩
    <div v-bind:style="styleObj">인라인스타일 바인딩</div>
      data(){
        return{
            styleObj:{
                color:'red',
                fontSize:'13px'
            }
        }
    }
