import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import '@/assets/bootstrap/dist/css/bootstrap.css'
import '@/assets/bootstrap/scss/bootstrap.scss'

createApp(App).use(router).mount('#app')
