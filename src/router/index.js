import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pools from '../views/Pools.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pools',
    name: 'Pools',
    component: Pools
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
