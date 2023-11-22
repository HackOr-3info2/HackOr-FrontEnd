import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'
import FullView from '../layouts/FullView.vue'
import BlankView from '../layouts/BlankView.vue'
import NoneView from '../layouts/NoneView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      component: FullView,
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: ProfileView
        },
        {
          path: '/settings',
          name: 'settings',
          component: SettingsView
        }
      ]
    },
    {
      path: '/login',
      component: NoneView,
      children: [
        {
          path: '/Login',
          name: 'Login',
          component: AuthView
        }
      ]
    }
  ]
})

export default router
