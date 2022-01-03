<template>
  <div class="container">
      <ul class="pokemon-wrapper">
        <li v-for="pokemon in pokemons" :key="pokemon.name">
          <pokemon-card :url='pokemon.url'/>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
import PokemonCard from '../shared/PokemonCard.vue'

export default {
  components: {
    'pokemon-card': PokemonCard,
  },
  created(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then(res => {
        this.pokemons = res.data.results
        console.log(this.pokemons)
      })
  },
  data(){ 
    return {
      pokemons: []
    }
  }
}
</script>

<style scoped>
  * {
    color: black;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 100px;
    display: flex;
  }

  .pokemon-wrapper{
    width: 80%;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    list-style: none;
  }
</style>