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
      </div>
      <div class="nav-bar-p3">
      </div>
    </div>
  </div>
</template>

<script>
export default{
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    mustShow() {
      return this.currentRouteName != 'Index' && this.currentRouteName != 'Cadastro'
    }
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

  .nav-bar > * {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item_1{
    justify-content: flex-start;
  }

  .item_1 .nav-bar-home-button{
    margin-left: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .item_1 .nav-bar-home-button:hover #hover-line{
    display: inline;
  }

  .item_1 .nav-bar-home-button #home_icon{
    align-self: center;

    width: auto;
    height: 25px;
  }

  .item_1 .nav-bar-home-button #hover-line{
    position: absolute;
    top: 64px;

    width: 15px;
    border: 3px solid white;

    display: none;
  }

  .item_2 .nav-bar-search-bar-wrapper{
    position: relative;
  }

  .item_2 .nav-bar-search-bar-wrapper .nav-bar-search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 450px;
    height: 37px;

    border-radius: 10px;
    border: none;

    box-sizing: border-box;
    padding: 5px 40px;

    font-weight: 400;
    color: black;
  }

  .item_2 #soluti_logo{
    position: absolute;
    top: 3px;
    left: 6px;

    width: auto;
    height: 30px;
  }

  .item_2 #search_icon{
    position: absolute;
    top: 6px;
    right: 0px;

    margin-right: 3px;
  }

  .item_3 .nav-bar-user-tag {
    width: 100px;
    height: 37px;
    margin-right: 20px;

    border-radius: 10px;

    background-color: var(--branco);
  }

  .item_3 > img{
    margin-left: 20px;
    width: auto;
  }

  .item_3 #message_icon{
    height: 23px;
  }

  .item_3 #notification_icon{
    height: 26px;
  }

  .item_3 #config_icon{
    height: 23px;
  }

  .nav-bar-right-content .nav-bar-right-content_icon{
    margin-left: 20px;
  }
</style>
