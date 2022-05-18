import { setupLayouts } from 'virtual:generated-layouts'
import Naive from 'naive-ui'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import generatedRoutes from '~pages'

import './styles/reset.css'
import './styles/main.css'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(Naive)
app.mount('#app')
