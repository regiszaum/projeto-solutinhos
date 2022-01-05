<template>
  <div v-if="mustShow" class="nav-bar" >
    <div class="nav-bar-p1-l">
      <div class="nav-bar-p2-l">
      </div>
      <div class="nav-bar-p3-l">
      </div>
    </div>

    <div class="nav-bar-p1">
      <div class="nav-bar-p2">
        <img id="pokedex1" src="../../assets/images/pokedex1.svg" alt="">
        <img id="pokedex2" src="../../assets/images/pokedex2.svg" alt="">
        <div id="generation-select-holder">
          <button @click="getgen(1)">1 GEN</button>
          <button @click="getgen(2)">2 GEN</button>
          <button @click="getgen(3)">3 GEN</button>
          <button @click="getgen(4)">4 GEN</button>
          <button @click="getgen(5)">5 GEN</button>
          <button @click="getgen(6)">6 GEN</button>
          <button @click="getgen(7)">7 GEN</button>
          <button @click="getgen(8)">8 GEN</button>
        </div>
      </div>
      <div class="nav-bar-p3">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default{
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    mustShow() {
      return this.currentRouteName != 'Index' && this.currentRouteName != 'Cadastro'
    }
  },methods: {
    getgen(gen){
      console.log("Requisição da " + gen + " geração")
      this.fetchPokemons({gen: gen})
    },
    ...mapActions([
      'fetchPokemons',
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
    top: 60px;
    left: 145px;

    display: grid;
    gap: 2px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    z-index: 1;
  }

  .nav-bar-p2 #generation-select-holder button{
    color: black;
    font-size: 11px;
  }
</style>
