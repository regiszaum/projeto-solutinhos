<template>
  <div v-if="isFetched" class="back-card-line ">
    <div :class="['card-fill',pokemon.type]">
      <div class="name-n-power">
        <h1>{{pokemon.name}}</h1>
        <h2>{{pokemon.stats.hp + " HP"}}</h2>
        <img id="type-icon" :src="require(`../../assets/type-icons/${pokemon.type}.svg`)">
      </div>

      <div class="pokemon-display-back-line">
        <div class="pokemon-display"> 
          <img :src="pokemon.img" :alt="pokemon.nome">
        </div>
      </div>

      <div class="pokemon-stats">
        <div class="stat">
          <h1>Attack</h1>
          <p>{{pokemon.stats.attack}}</p>
        </div>
        <div class="stat">
          <h1>Defense</h1>
          <p>{{pokemon.stats.defense}}</p>
        </div>
        <div class="stat">
          <h1>Special-Attack</h1>
          <p>{{pokemon.stats.special_attack}}</p>
        </div>
        <div class="stat">
          <h1>Special-Defense</h1>
          <p>{{pokemon.stats.special_defense}}</p>
        </div>
        <div class="stat">
          <h1>Speed</h1>
          <p>{{pokemon.stats.speed}}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    loading
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default{
  props: {
    url: {
      type: String,
      required: true
    },
    pokemon_index: {
      type: Number,
      required: true
    }
  },
  created(){
    this.fetchPokemonData({index:this.$props.pokemon_index, url:this.$props.url})
      .then(res => {
        this.pokemon.name = res.data.name
        this.pokemon.type = res.data.types[0].type.name
        this.pokemon.img = res.data.sprites.front_default
        this.pokemon.stats.hp = res.data.stats[0].base_stat
        this.pokemon.stats.attack = res.data.stats[1].base_stat
        this.pokemon.stats.defense = res.data.stats[2].base_stat
        this.pokemon.stats.special_attack = res.data.stats[3].base_stat
        this.pokemon.stats.special_defense = res.data.stats[4].base_stat
        this.pokemon.stats.speed = res.data.stats[5].base_stat

        this.isFetched = true
      })
      .catch(err => console.log(err))
  },
  data(){
    return {
      isFetched: false,

      pokemon: {
        img:'',
        name: '',
        type: '',
        stats: {
          hp: '',
          attack: '',
          defense: '',
          special_attack:'',
          special_defense:'',
          speed:''
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'getPokemonTypes'
    ])
  },
  methods: {
    ...mapActions([
      'fetchPokemonData'
    ])
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

    display: grid;
    grid-template-columns: 50% 35% 15%;
    align-items: center;
    justify-content: space-between;
  }

  .name-n-power h1{
    margin-left: 10px;
  }

  .name-n-power h2{
    margin-left: 25px;
  }

  .name-n-power #type-icon{
    margin-left: 7px;

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
