<template>
  <div class="nav-bar">
    <div class="item_1">
      <div class="nav-bar-home-button">
        <img  id="home_icon" src="../../assets/icons/home_logo.svg" alt="">

        <hr id="hover-line">
      </div>
       
    </div>

    <div class="item_2">
      <div class="nav-bar-search-bar">
        <img id="soluti_logo" src="../../assets/images/logo.png" alt="soluti_logo">
        <img id="search_icon" src="../../assets/icons/search_icon.svg" alt="search_icon">
      </div>
    </div>

    
    <div class="item_3">
      <div class="nav-bar-user-tag"></div>
      <img id="message_icon" src="../../assets/icons/messeger_icon.svg" alt="">
      <img id="notification_icon" src="../../assets/icons/notifications_icon.svg" alt="">
      <img id="config_icon" src="../../assets/icons/configuration_icon.svg" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .nav-bar {
    position: fixed;

    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-template-areas: "A B C";
    justify-items: center;
    align-content: center;
  

    margin: 0;
    padding: 0;
    width: 100%;
    height: 70px;

    background-color: var(--verde-escuro);
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

  .item_2 .nav-bar-search-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 400px;
    height: 37px;

    border-radius: 10px;

    background-color: white;
  }

  .item_2 #soluti_logo{
    margin-left: -7px;
    width: auto;
    height: 50px;
  }

  .item_2 #search_icon{
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
