import { createStore } from 'vuex'
import http from '@/http'

const store = createStore({
  state: {
    token: '',
    number: 1
  }, // state é como se fosse o data

  mutations: {
    SET_TOKEN(state,{token}){
      state.token = token
    } 
  }, // é para alterar o estado

  actions: {
    userLogin({ commit },payload){
  
      http.post('auth/login',payload)
      .then(res => {
          var token = res.data.access_token
          commit('SET_TOKEN',{token})
      })  
      .catch(err => {
          console.log("Erro ao efetuar login" + err)
      })
    }
  }, // vai te dar ações dentro de um determinado contexto, pode utilizar sua logica para utilizar a mutation para mudar o estado, ele faz o commit no estado. só uma action, quando precisa de promessa
  
  modules: {
  }
})

export default store