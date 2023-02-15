import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EtudiantVue from '../views/etudiants/Index.vue'
import CreateEtudiant from '../views/etudiants/Create.vue'
import EditEtudiant from '../views/etudiants/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/etudiants',
      name: 'etudiants',
      component: EtudiantVue
    },

    {
      path: '/etudiants/create',
      name: 'etudiantsCreate',
      component: CreateEtudiant
    },

    {
      path: '/etudiants/edit/:id',
      name: 'editEtudiant',
      component: EditEtudiant
    },
  ]
  
})

export default router
