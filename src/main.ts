import { setupLayouts } from 'virtual:generated-layouts'
import Naive from 'naive-ui'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import generatedRoutes from '~pages'

import './styles/reset.css'
import './styles/main.css'
import 'uno.css'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
const head = createHead()

const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

app.use(i18n)
app.use(router)
app.use(head)
app.use(Naive)
app.mount('#app')
