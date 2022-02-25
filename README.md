## Vue 사용이유

한기능을 개발할때 구현할 수 있는 방법이 적어 다른프레임워크에 비해 개발자간 차이가 별로 안남

## Vue 설치

npm install -g @vue/cli

## Vue 프로젝트 생성

vue create [프로젝트명]

## Vue 프로젝트 실행

npm run serve

## App.vue

App.vue에 script,html 영역이 전부 있고

vue 파일을 브라우저 연동시 실행되지 않음

실제로 app.vue 정보는 index.html 파일에 변화되어있음

## 데이터 바인딩

{{ data }}

why?

html 하드코딩 방지

실시간렌더링을 위함

## html 속성

<p :style="my_style">

<img :src="imgPath">

v-bind 약어 :

v-bind:href=“url”을 줄여서 :href=”url” 이라고 표기해줄 수 있습니다.

v-on:click=“doSomething”을 줄여서 @click=”doSomething” 이라고 표기해줄 수 있습니다.

## for 문

<a v-for="작명 in 3" :key="작명">Home</a>

<a v-for="product in products" :key="product">{{ product }}</a>

<a v-for="(product, i) in products" :key="product">{{ product }}</a>

...

data() {

return {

products: [

{room: "역삼동원룸",img:require("./assets/room0.jpg")},

{room: "천호동원룸",img:require("./assets/room1.jpg")},

{room: "마포구원룸",img:require("./assets/room2.jpg")}

],

}

}

## 이벤트 핸들러

v-on:click="자바스크립트 구문"

@click="자바스크립트 구문"

@click="reportCount++"

@click="increase" <-- 함수

@click="increase(i) <-- 매개변수 사용

## v-html

html 코드를 직접 입력해줄때 사용하는 디렉티브

    <div id="app">
        <p v-html="aLinkToNaver.com"></p>
    </div>


    new Vue({
        el: "#app",
        data: {
    	    aLinkToMedium: "<a  href='https://land.naver.com/'>링크</a>"
        }
    })

{{ data }} 는 vue 입장에서는 이것이 html 코드인지, 문자열인지 구분할 수 있는 방법이 전혀 없다.
이럴때 v-html 사용한다.

## 삼항연산자
**조건부 삼항 연산자**는 JavaScript에서 세 개의 피연산자를 취할 수 있는 유일한 연산자입니다. 맨 앞에 조건문 들어가고. 그 뒤로 물음표(`?`)와 조건이 참[truthy](https://developer.mozilla.org/ko/docs/Glossary/Truthy)이라면 실행할 식이 물음표 뒤로 들어갑니다. 바로 뒤로 콜론(`:`)이 들어가며 조건이 거짓[falsy](https://developer.mozilla.org/ko/docs/Glossary/Falsy)이라면 실행할 식이 마지막에 들어갑니다. 보통 [`if`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/if...else) 명령문의 단축 형태로 쓰입니다.
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    
    <div id="app">
    
    {{ count * 3 > 10 ? "10보다 큽니다." : "10보다 작거나 같습니다."}}
    
    <button v-on:click="count ++">클릭</button>
    
    </div>
