<template>
  <div id="nav">
    <router-link to="/">{{$t('home.home')}}</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinglist">Data BindingList (Axios)</router-link> |
    <router-link to="/eventchange">Event</router-link> | 
    <router-link to="/test">test</router-link> | 
    <router-link to="/test2">test2</router-link> | 
    <router-link to="/test3">test3</router-link> |
    <router-link to="/test4">test4</router-link> |
    <router-link to="/test5">test5</router-link> |
    <router-link to="/test6">ProvideInject</router-link> |
    <router-link to="/vuex">Vuex</router-link>
    


  </div>

<div>
  <select v-model="$i18n.locale">
      <option
        v-for="(data, key) in $i18n.availableLocales"
        :key="key"
        :value="data"
        >{{ data }}</option>
    </select>
</div>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
