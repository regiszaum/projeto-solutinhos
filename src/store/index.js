import { createStore } from 'vuex'
import http from '@/http'

const store = createStore({
  state: {
    "usuarios":[
      {"id":1,"email":"joaomf17p2@gmail.com","senha":"senha","nome":"Joao Mario","friends":[1,3,4,5]},
      {"id":2,"email":"maria@123deoliveira","senha":"senhaboa","nome":"Maria da Silva"},
      {"id":3,"email":"rodrigo@luiz","senha":"opabao","nome":"Rodrigo"},
      {"id":4,"email":"maria@14","senha":"senha","nome":"Maria da Silva"},
      {"id":5,"email":"gilberto@email.com","senha":"careca","nome":"Gilberto"},
      {"id":6,"email":"frederico@email","senha":"senha","nome":"Fred"},
      {"id":7,"email":"junin_matado@email","senha":"porco","nome":"junin","inteligente":true},
      {"id":8,"email":"alfred@email","senha":"batman","nome":"alfredo"},
      {"id":9,"email":"martha@email","senha":"superman","nome":"Martha Wayne"},
      {"id":10,"email":"julin@email","senha":"senha","nome":"Julio Batista dos Santos Pereira"},
      {"id":11,"email":"killer@email","senha":"blood","nome":"Dexter Morgan"}]
  }, // state é como se fosse o data

  mutations: {
    SET_TOKEN(state,{token}){
      state.token = token
    } 
  }, // é para alterar o estado

  actions: {
    sendLoginData({ commit },payload){
      return new Promise((resolve,reject) => {
        http.post('auth/login',payload)
        .then(res => {
            var token = res.data.access_token
            commit('SET_TOKEN',{token})
            resolve(res)
        })  
        .catch(err => {
            console.log("Erro ao efetuar login " + err)
            reject()
        })
      })
    }
  }, // vai te dar ações dentro de um determinado contexto, pode utilizar sua logica para utilizar a mutation para mudar o estado, ele faz o commit no estado. só usa action, quando precisa de promessa
  
  getters: {
    getUserById: (state) => (id) => {
      return state.usuarios.find(user => user.id === id)
    }
  }
})

export default store