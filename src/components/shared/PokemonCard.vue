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

    background-color: red;
  }

  .normal{
    background-color: gray;
  }

  .grass{
    background-color: green;
  }

  .fire{
    background-color: red;
  }

  .water{
    background-color: blue;
  }

  .bug{
    background-color: greenyellow;
  }

  .poison{
    background-color: purple;
  }

  .electric{
    background-color: yellow;
  }

  .ground{
    background-color: brown;
  }

  .fairy{
    background-color: gray;
  }

  .fighting{
    background-color: cornflowerblue;
  }

  .psychic{
    background-color: rgb(223, 223, 0);
  }

  .rock{
    background-color: rgb(87, 86, 86);
  }

  .ghost{
    background-color: rgb(78, 13, 78);
  }

  .ice{
    background-color: rgb(38, 163, 247);
  }

  .flying{
    background-color: gray;
  }

  .steel{
    background-color: gray;
  }

  .dark{
    background-color: gray;
  }
</style>
