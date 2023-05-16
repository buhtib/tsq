import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import detai from '../views/detai.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/detai',
      name: 'detai',
      component: detai
    }
  ]
})

export default router
