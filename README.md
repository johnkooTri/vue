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

## VueJS의 computed VS methods

### computed

computed에 정의된 reversedMessage 는 data에 정의한 반응형 데이터에 사용하여 값을 반환하고 있다.(즉 message값에 의존한다.)

reversedMessage 리턴값을 캐싱(저장) 하고 있어 message 값이 바뀔때만 업데이트 된다 (함수가 호출 된다). now는 어떤 값에도 의존하지 않기 때문에 절대로 업데이트 되지 않는다.

### methods

이에 비해 메소드를 호출하면 렌더링을 다시 할 때마다 항상 함수를 실행합니다.

### 캐싱이 왜 필요할까?

계산에 시간이 많이 걸리는 computed 속성인 A를 가지고 있다고 해봅시다. 이 속성을 계산하려면 거대한 배열을 반복해서 다루고 많은 계산을 해야 합니다. 그런데 A 에 의존하는 다른 computed 속성값도 있을 수 있습니다. 캐싱을 하지 않으면 A 의 getter 함수를 꼭 필요한 것보다 더 많이 실행하게 됩니다! 캐싱을 원하지 않는 경우 메소드를 사용하십시오.

    <div  id="example">
        <p>원본 메시지: "{{ message }}"</p>
        <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
    </div>


    var vm = new Vue({

        el: '#example',
        data: {
    	    message: '안녕하세요'
        },

    computed: {
        // 계산된 getter
        reversedMessage: function () {
            return this.message.split('').reverse().join('')// `this` 는 vm 인스턴스를 가리킵니다.
        },

        now: function() { // 아무곳에도 의존하지 않기때문에 절대로 업데이트 되지 않는다.
    	    console.log('I am computed :: now')
    	    return Date.now()
    	    }

        }
     })



    console.log(vm.reversedMessage) // => '요세하녕안'
    vm.message = 'Goodbye'
    console.log(vm.reversedMessage) // => 'eybdooG'

콘솔에서 이 예제를 직접 해볼 수 있습니다. vm.reversedMessage의 값은 항상 vm.message의 값에 의존합니다.

computed 속성 대신 메소드와 같은 함수를 정의할 수도 있습니다. 최종 결과에 대해 두 가지 접근 방식은 서로 동일합니다. 차이점은 **computed 속성은 종속 대상을 따라 저장(캐싱)** 된다는 것 입니다.
**computed 속성은 해당 속성이 종속된 대상이 변경될 때만 함수를 실행**합니다. 즉 message가 변경되지 않는 한, computed 속성인 reversedMessage를 여러 번 요청해도 계산을 다시 하지 않고 계산되어 있던 결과를 즉시 반환합니다.

이에 비해 **메소드**를 호출하면 렌더링을 다시 할 때마다 **항상 함수를 실행**합니다
