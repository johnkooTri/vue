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
