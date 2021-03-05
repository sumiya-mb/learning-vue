import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { users } from '../assets/users'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile'
import Admin from '../views/Admin'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
