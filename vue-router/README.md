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

## v-if 와 v-show 차이점

v-if 의 경우 조건을 만족하면 그 순간에 html 블록이 생성되고,조건에 만족하지 않으면 html 블록은 삭제됩니다.
v-show 는 조건여부에 관계없이 무조건 html 블록이 생성되며 css의 display를 이용해서 화면에서 숨김/보임 처리를 한다.
html블록이 화면 내에서 자주 toggle이 일어나면 v-show를 사용하고, 빈도가 적다면 v-if를 사용을 권장

## 이벤트 처리(v-on)

클릭 이벤트 발생시 여러 개의 함수를 호출하고 싶다면?

    <button type="button" @click="one(),two()">click</button>

    methods:{
        one(){
            alert("one");
        },
        two(){
            alert("two:);
        }
    }

## Key Event

    <input @keyup.enter="submit">
    .enter
    .up
    .tab
    .delete
    .esc
    .space
    .up
    .down
    .left
    .right

## computed

vue 인스턴스 내에 정의된 데이터 값과 연관된 또 하나의 데이터를 정의해서 사용할수 있도록 한다.
:정의된 데이터 값을 바탕으로 새로운 데이터값을 생성하고, 새로운 데이터값에서 참조하고 있는 기존 데이터 값의 변경을 감지한다.
그리고 참조하고 있는 데이터 값의 변경과 상관없이 최초에 computed된 함수를 실행한다.
:computed에 정의해서 ㅏ용하면 화면 내 여러 곳에서 fullName을 사용하더라도 연산은 한번만 일어난다.

    <template>
    <h1>Full Name : {{fullName}}</h1>
    </template>
    <script>
    export default {
    data() {
    return {
        firstName: 'Seungwon',
        lastName: 'Go'
    };
    },
    computed: {
        fullName() {
        return this.firstName + ' ' + this.lastName;
        }
    }
    }
    </script>

## Watch

초기에 할당된 값에서 변경이 일어나야 watch에 정의한 함수를 실행한다.

## mock 서버

실제 서버처럼 클라이언트로부터 요청을 받으면 응답을 하는 가짜서버

## mixin.js (믹스인 파일생성)

컨포넌트에서 공통으로 사용하는 함수를 구현할때 사용

    import axios from 'axios'

    export default {
        methods:{
            async $api(url,method,data){
                return (await axios({
                    method:method,
                    url,
                    data
                })).catch(e =>{
                    console.log(e);
                }).data;
            }
        }
    }

## Axios ?

Axios 는 서버와 데이터를 송수신 할 수 있는 http 비동기 통신 라이브러리
promise 객체 형태로 값을 return 한다.

## 부모 컴포넌트에서 자식 컴포넌트의 이벤트 직접 발생시키기

    <template>
    <child-component @send-message="sendMessage" ref="child_component" />
    </template>
    <script>
        import ChildComponent from './ChildComponent';
        export default {
            components: {ChildComponent},
            mounted() {
                this.$refs.child_component.$refs.btn.click();
            }
    }
    </script>

### html 태그에 ref="id"를 지정하면 Vue 컴포넌트 함수에서 this.$refs를 통해 접근이 가능

ref 속성은 html의 id와 비슷한 기능이고 ref는 유일한 키값으로 사용해야 한다.
부모 컴포넌트에서 자식컴포넌트인 child-component 에 ref="child_component"를 지정해서 $refs로 접근할수 있도록 함

### 부모 컴포넌트에서 자식 컴포넌트 함수를 직접 호출도 가능

    this.$refs.child_component.callFromParent();
