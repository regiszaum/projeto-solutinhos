<template>
  <div :class="['card',pokemon.tipo]">
    <img :src="pokemon.img" :alt="pokemon.nome">
    <h1>{{pokemon.nome}}</h1>
    <h2>{{pokemon.tipo}}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  props: {
    url: {
      type: String,
      required: true
    }
  },
  created(){
    axios(this.$props.url)
    .then(res => {
      console.log(res)
      this.pokemon.img = res.data.sprites.front_default
      this.pokemon.nome = res.data.name
      this.pokemon.tipo = res.data.types[0].type.name
    })
  },
  data(){
    return {
      pokemon: {
        img: '',
        nome: '',
        tipo: ''
      }
    }
  }
}
</script>

<style scoped>
  * {
    color: black;
  }

  .card {
    margin: 10px;
    width: 220px;
    height: 280px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .normal{
    background-color: #A8A77A;
  }

  .grass{
    background-color: #7AC74C;
  }

  .fire{
    background-color: #EE8130;
  }

  .water{
    background-color: #6390F0;
  }

  .bug{
    background-color: #A6B91A;
  }

  .poison{
    background-color: #A33EA1;
  }

  .electric{
    background-color: #F7D02C;
  }

  .ground{
    background-color: #E2BF65;
  }

  .fairy{
    background-color: #D685AD;
  }

  .fighting{
    background-color: #C22E28;
  }

  .psychic{
    background-color: #F95587;
  }

  .rock{
    background-color: #B6A136;
  }

  .ghost{
    background-color: #735797;
  }

  .ice{
    background-color: #96D9D6;
  }

  .flying{
    background-color: #A98FF3;
  }

  .steel{
    background-color: #B7B7CE;
  }

  .dark{
    background-color: #705746;
  }

  .dragon{
    background-color: #6F35FC;
  }
</style>
