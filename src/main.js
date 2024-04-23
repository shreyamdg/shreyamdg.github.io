import { createApp } from 'vue'
import App from './App.vue'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
import { createRouter, createWebHistory } from 'vue-router'
import VTooltip from 'v-tooltip'
import VueCookie from 'vue-cookies'
import AOS from 'aos'

const app = createApp(App)

app.use(VTooltip)
app.use(VueScrollTo)
app.use(VueCookie)

const routes = [{ path: '/' }]
const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(router)

app.mixin({
  created() {
    AOS.init()
  }
})

app.mount('#app')
