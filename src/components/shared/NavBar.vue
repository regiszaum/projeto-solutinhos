<template>
  <div v-if="mustShow" class="nav-bar" >

    <div v-if="navType" class="pokedex-navbar">
      <div class="nav-bar-p1-l">
        <div class="nav-bar-p2-l">
        </div>
        <div class="nav-bar-p3-l">
        </div>
      </div>

      <div class="nav-bar-p1">
        <div class="nav-bar-p2">
          <router-link to="/">
            <img draggable="false" id="pokedex1" src="../../assets/images/pokedex1.svg" alt="">
          </router-link>
          <img id="pokedex2" src="../../assets/images/pokedex2.svg" alt="">
          <div id="generation-select-holder">
            <button @click="getgen(1)"><span>1°</span> <span>GEN</span></button>
            <button @click="getgen(2)"><span>2°</span> <span>GEN</span></button>
            <button @click="getgen(3)"><span>3°</span> <span>GEN</span></button>
            <button @click="getgen(4)"><span>4°</span> <span>GEN</span></button>
            <button @click="getgen(5)"><span>5°</span> <span>GEN</span></button>
            <button @click="getgen(6)"><span>6°</span> <span>GEN</span></button>
            <button @click="getgen(7)"><span>7°</span> <span>GEN</span></button>
            <button @click="getgen(8)"><span>8°</span> <span>GEN</span></button>
          </div>
        </div>
        <div class="nav-bar-p3">
        </div>
      </div>
    </div>

    <div v-else class="normal-navbar">
      <div class="nav-bar-p1-l"></div>
      <div class="nav-bar-p1">
        <router-link to="/pokemons">
          <img draggable="false" id="pokeball" src="../../assets/images/PokeBall.svg" alt="">
        </router-link>

        <a @click="logout" style="margin-right: 10px; cursor: pointer;">LogOut</a>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default{
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    mustShow() {
      return this.currentRouteName != 'Index' && this.currentRouteName != 'Cadastro' && this.currentRouteName != 'Clima'
    },
    navType(){
      if(this.currentRouteName == 'Pokemons') return true
      else return false
    }
  },methods: {
    getgen(gen){
      console.log("Requisição da " + gen + " geração")
      this.fetchPokemons({gen: gen})
    },
    logout() {
      this.CLEAN_TOEKEN()
      this.$router.push({name: "Index"})
    }
    ,
    ...mapActions([
      'fetchPokemons',
    ]),
    ...mapMutations([
      'CLEAN_TOEKEN'
    ])
  }
}
</script>

<style scoped>

  input:focus::placeholder {
    color: transparent;
  }

  .nav-bar {
    width: 100%;
    position: fixed;
    z-index: 1;
  }

  .nav-bar {
    color: black;
  }

  .nav-bar-p1-l {
    position: absolute;
    top: 5px;
    left: 0px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 70px;

    background-color: #000000;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  }

  .nav-bar-p2-l {
    position: absolute;
    top: 1px;
    left: 0px;

    background-color: #000000;

    margin: 0;
    padding: 0;
    width: 300px;
    height: 120px;

    border-radius: 0px 0px 15px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) -20px 5px 15px;
  }

  .nav-bar-p3-l {
    position: absolute;
    top: -86px;
    left: 201px;

    transform: rotate(134deg);

    background-color: #000000;

    margin: 0;
    padding: 0;
    width: 300px;
    height: 120px;

    border-radius: 0px 15px 0px 0px;
  }

  .nav-bar-p1 {
    position: absolute;
    top: 0px;
    left: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0;
    padding: 0;
    width: 100%;
    height: 70px;

    background-color: #d23b2d;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  }

  .nav-bar-p2 {
    position: absolute;
    top: 0px;
    left: 0px;

    background-color: #d23b2d;

    margin: 0;
    padding: 0;
    width: 300px;
    height: 120px;

    border-radius: 0px 0px 15px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) -20px 5px 15px;
  }

  .nav-bar-p3{
    position: absolute;
    top: -88px;
    left: 201px;

    transform: rotate(134deg);

    background-color: #d23b2d;

    margin: 0;
    padding: 0;
    width: 300px;
    height: 120px;

    border-radius: 0px 15px 0px 0px;
  }

  .nav-bar-p2 #pokedex1 {
    position: absolute;

    top: 10px;
    left: 10px;

    width: auto;
    height: 100px;
  }

  .nav-bar-p2 #pokedex2 {
    position: absolute;

    top: 20px;
    left: 150px;

    width: auto;
    height: 15px;

    z-index: 1;
  }

  .nav-bar-p2 #generation-select-holder{
    width: auto;
    height: auto;

    position: absolute;
    top: 50px;
    left: 125px;

    display: grid;
    gap: 2px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    z-index: 1;
  }

  .nav-bar-p2 #generation-select-holder button{
    width: 38px;
    height: 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

   

    background-color: #d23b2d;
    border: solid 0.5px black;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  .nav-bar-p2 #generation-select-holder button:hover {
    background-color: #d23b2d;
    box-shadow: none;
  }

  .nav-bar-p2 #generation-select-holder button span {
    box-sizing: border-box;
    padding-left: 5px;
    color: white;
    font-size: 11px;
  }

  .normal-navbar {
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-bar-p1 #pokeball {
    margin-left: 20px;

    width: auto;
    height: 45px;
  }
</style>
