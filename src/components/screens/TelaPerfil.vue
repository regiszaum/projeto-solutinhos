<template>
  <div class="container">
    <div class="side-bar">
      <div class="user-data">
        <div class="user-pic"></div>
        <h1 class="user-name">username</h1>
      </div>

      <button id="fav-pokemon">
        <img id="start" src="@/assets/images/Star.svg" alt="">
        <h1>Favorite Pokemons</h1>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
  components: {

  },
  created(){
  },
  data(){
    return{
      usuario: {
        nome: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUserById'
    ])
  }
}

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 150px;
    display: flex;
    color: black;
  }

  .side-bar{
    position: fixed;
    top: 50px;
    left: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 400px;
    height: 100vh;

    background-color: #E7E7E7;
    box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
  }

  .side-bar .user-data { 
    margin-top: 50px;

    width: 260px;
    height: 240px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    background-color: #829D7C;
    border-radius: 6px;
    box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
  }

  .side-bar .user-data .user-pic {
    margin-top: 20px;

    width: 150px;
    height: 150px;

    background-color: white;

    border-radius: 50%;
  }

  .side-bar .user-data .user-name {
    margin-top: 15px;
    font-size: 26px;
  }
  
  .side-bar #fav-pokemon {
    margin-top: 40px;

    width: 260px;
    height: 70px;

    display: flex;
    align-items: center ;
    justify-content: space-between;

    background-color: #5A9BC4;
    border-radius: 4px;
    box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
    border: none;
  }

  .side-bar #fav-pokemon #start{
    margin-left: 10px;

    width: auto;
    height: 30px;
  }

  .side-bar #fav-pokemon:hover {
    background-color: #407697;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

   .side-bar #fav-pokemon h1 {
     margin-right: 25px;

     font-size: 18px;
   }
</style>