import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import "bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
// import './asset/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
