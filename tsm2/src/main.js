import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
//import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


createApp(App).use(VueAxios,axios).use(ElementPlus).mount('#app')
