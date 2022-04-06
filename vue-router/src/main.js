import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18n from './i18n'
import store from './store'


createApp(App).use(i18n).use(store).use(router).mixin(mixins).mount('#app')
