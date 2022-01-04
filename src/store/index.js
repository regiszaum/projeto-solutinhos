import { createStore } from 'vuex'
import axios from 'axios'
import http from '@/http'
import pokeapi from '../http/pokeapi'

const store = createStore({
  state: {
    pokemons: [],
  }, // state é como se fosse o data

  mutations: {
    SET_TOKEN(state,{token}){
      state.token = token
    },
    SET_POKEMONS(state,pokemons){
      state.pokemons = pokemons
    },
    SET_POKEMON_DATA(state,{index,pokemonD}){
      state.pokemons[index].name = pokemonD.name
      state.pokemons[index].types = pokemonD.types
      state.pokemons[index].stats =pokemonD.stats
    }
  }, // é para alterar o estado

  actions: {
    fetchPokemons({commit}){
      return new Promise((resolve,reject) => {
        pokeapi.get("pokemon?limit=150&offset=0")
        .then(res => {
          commit('SET_POKEMONS', res.data.results)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    
    fetchPokemonData({commit},{index,url}){
      return new Promise((resolve,reject) => {
        axios.get(url)
          .then(res =>{
            var pokemon_transfer_obj = {
              name: res.data.name,
              types: res.data.types,
              stats: res.data.stats
            }
            commit('SET_POKEMON_DATA',{index: index, pokemonD: pokemon_transfer_obj})
            resolve(res)
          }).catch(err => {
            reject(err)
          })
      })
    },

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
    },
    getPokemons: state =>{
      return state.pokemons
    },
    getPokemonTypes: (state) => (name) =>{
      var target_pokemon = JSON.parse(JSON.stringify(state.pokemons.filter(pokemon => pokemon.name === name)))
      console.log(target_pokemon)
      return null
    }
  }
})

export default store