import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'semana',
      component: () => import('../views/VistaSemana.vue')
    },
    {
      path: '/mes/:mes',
      name: 'mes',
      component: () => import('../views/VistaMes.vue')
    },
    {
      path: '/ingresos',
      name: 'ingresos',
      component: () => import('../views/VistaIngreso.vue')
    },
    {
      path: '/gastos',
      name: 'gastos',
      component: () => import('../views/VistaGasto.vue')
    },
    {
      path: '/semana/:semanas',
      name: 'otrasSemanas',
      component: () => import('../views/VistasOtrasSemanas.vue')
    },
  ]
})

export default router
