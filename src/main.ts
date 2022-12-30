import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import '@/sass/main.sass'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
