import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/screens/TelaLogin.vue'
import TelaEditarUsuario from '../components/screens/TelaEditarUsuario.vue'

const routes = [
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