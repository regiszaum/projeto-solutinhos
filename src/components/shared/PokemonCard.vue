<template>
  <div class="back-card-line ">
    <div :class="['card-fill',pokemon.tipo]">
      <div class="name-n-power">
        <h1>Pokemon</h1>
        <h2>150 HP</h2>
        <img id="type-icon" :src="require(`../../assets/type-icons/${test}.svg`)" :alt="pokemon.tipo">
      </div>

      <div class="pokemon-display-back-line">
        <div class="pokemon-display"> 
          <img :src="pokemon.img" :alt="pokemon.nome">
        </div>
      </div>

      <div class="pokemon-stats">
        <div class="stat">
          <h1>Attack</h1>
          <p>40</p>
        </div>
        <div class="stat">
          <h1>Defense</h1>
          <p>45</p>
        </div>
        <div class="stat">
          <h1>Special-Attack</h1>
          <p>60</p>
        </div>
        <div class="stat">
          <h1>Special-Defense</h1>
          <p>20</p>
        </div>
        <div class="stat">
          <h1>Speed</h1>
          <p>65</p>
        </div>
      </div>
    </div>
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
      this.pokemon.img = res.data.sprites.front_default
      this.pokemon.nome = res.data.name
      this.pokemon.tipo = res.data.types[0].type.name
    })
    .catch(err => console.log("Erro na requisição" + err))
  },
  data(){
    return {
      test: 'grass',
      pokemon: {
        img: '',
        nome: '',
        tipo: ''
      }
    }
  },
  methods: {
    typeIcon(tipo){
      const iconpath = `../../assets/type-icons/${tipo}.svg`
      console.log(iconpath)
      return 'oi'
    }
  }
}
</script>

<style scoped>
  * {
    color: black;
  }

  .back-card-line {
    margin: 10px;
    width: 220px;
    height: 280px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFFF00;

    border-radius: 4px;
  }

  .card-fill{
    width: 209px;
    height: 266px;

    display: flex;
    flex-direction: column;align-items: center;
    justify-content: center;

    border-radius: 8px;
  }

  .name-n-power{
    width: 200px;
    margin-bottom: 3px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name-n-power h1{
    margin-left: 10px;
  }

  .name-n-power h2 {
    margin-left: 37px;
  }

  .name-n-power #type-icon{
    width: 25px;
    height: 25px;
  }

  .pokemon-display-back-line{
    width: 179px;
    height: 115px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFFF00;
    border-radius: 2px;
  }

  .pokemon-display{
    width: 170px;
    height: 108px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFFFFF;
    border-radius: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .pokemon-stats{
    padding: 10px 0px 10px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .stat{
    width: 179px;
    height: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2px 0px 2px 0px;

    background-color: #FFFFFF;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .stat h1 {
    margin-left: 3px;
    font-size: 11px;
  }

  .stat p {
    margin-right: 3px;
    font-size: 11px;
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
