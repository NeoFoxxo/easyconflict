import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)

app.use(router)

app.use(VueQueryPlugin)

app.mount('#app')
