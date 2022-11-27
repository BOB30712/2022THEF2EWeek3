import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'OpeningView',
    component: () => import('../views/OpeningView.vue')
  },
  {
    path: '/CastingView',
    name: 'CastingView',
    component: () => import('../views/CastingView.vue')
  },
  {
    path: '/SmalltestView',
    name: 'SmalltestView',
    component: () => import('../views/SmalltestView.vue')
  },
  {
    path: '/GradView',
    name: 'GradView',
    component: () => import('../views/GradView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
