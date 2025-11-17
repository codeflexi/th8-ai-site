import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

import Home from './pages/Home.vue'
import LogisticsSuite from './pages/LogisticsSuite.vue'
import CaseStudies from './pages/CaseStudies.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/logistics-suite', name: 'logistics', component: LogisticsSuite },
  { path: '/case-studies', name: 'case-studies', component: CaseStudies },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

createApp(App).use(router).mount('#app')
