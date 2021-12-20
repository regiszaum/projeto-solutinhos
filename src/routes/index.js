import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/screens/TelaLogin.vue'
import TelaEditarUsuario from '../components/screens/TelaEditarUsuario.vue'
import TelaTimeline from '../components/screens/TelaTimeline.vue'

const routes = [
    {
      path: '/',
      name: 'TimeLine',
      component: TelaTimeline
    },
    {
      path: '/login',
      name: 'Index',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edicao',
      component: TelaEditarUsuario
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router