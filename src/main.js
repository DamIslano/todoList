import { createApp } from 'vue'
import App from './App.vue'
import store from './store/app.js'
import routes from './routes/index'
import '@/assets/styles/normalize.css'
import '@/assets/fonts/fonts.css'

const app = createApp(App)

app.use(store).use(routes).mount('#app')
