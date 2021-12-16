import TelaLogin from './components/screens/TelaLogin.vue';
import App from './App.vue'

export const routes = [
    { path: '', component: App, titulo: 'Home'},
    { path: '/login', component: TelaLogin, titulo: 'Login'}
];