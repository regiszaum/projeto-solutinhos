import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/screens/TelaLogin.vue'
import TelaEditarUsuario from '../components/screens/TelaEditarUsuario.vue'
import TelaTimeline from '../components/screens/TelaTimeline.vue'
import Chat from '../components/screens/TelaChat.vue'
import Cadastro from '../components/screens/TelaCadastroUsuario.vue'

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
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/edit',
      name: 'Edicao',
      component: TelaEditarUsuario
    },
    {
      path: '/chat',
      name: 'Mensagens',
      component: Chat
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router