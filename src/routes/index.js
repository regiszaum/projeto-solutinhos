import { createRouter, createWebHistory } from 'vue-router'
import '../components/screens/TelaLogin.vue'

const routes = [
    {
      path: '/login',
      name: 'Index',
      component: Login
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router