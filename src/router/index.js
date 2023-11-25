import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import HackathonView from '@/views/HackathonView.vue'
import HackathonDetalhe from '@/views/HackathonDetalhe.vue'
import ProfileView from '@/views/ProfileView.vue'
import EquipesView from '@/views/EquipesView.vue'
import TemasView from '@/views/TemasView.vue'
import TemaView from '@/views/TemaView.vue'
import EquipeView from '@/views/EquipeView.vue'
import SettingsView from '@/views/SettingsView.vue'
import CrudView from '@/views/CrudView.vue'
import FullView from '../layouts/FullView.vue'
/* import BlankView from '../layouts/BlankView.vue'
 */ import NoneView from '../layouts/NoneView.vue'

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
        },
        {
          path: '/crud',
          name: 'crud',
          component: CrudView
        },
        {
          path: '/hackathon',
          name: 'hackathon',
          component: HackathonView
        },
        {
          path: '/hackathon/id',
          component: HackathonDetalhe
        },

        {
          path: '/equipes',
          name: 'equipes',
          component: EquipesView
        },
        {
          path: '/equipe/id',
          component: EquipeView
        },
        {
          path: '/temas',
          name: 'temas',
          component: TemasView
        },
        {
          path: '/tema/id',
          component: TemaView
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
