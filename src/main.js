import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from '../utils/https'
import ElementPlus from 'element-plus'
import store from './store'
import 'element-plus/dist/index.css'
import i18n from './i18n/index'
const app = createApp(App)
app.config.globalProperties.$axios = axios;  //配置axios的全局引用

app.use(router).use(store).use(ElementPlus).use(i18n).mount('#app')
