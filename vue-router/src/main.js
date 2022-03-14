import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18n from './i18n'

createApp(App).use(i18n).use(router).mixin(mixins).mount('#app')
