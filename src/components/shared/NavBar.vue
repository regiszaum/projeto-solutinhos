<template>
  <div class="nav-bar">
    <img id="home_icon" src="../../assets/icons/home_logo.svg" alt="">
    <div class="nav-bar-search-bar">
      <img id="soluti_logo" src="../../assets/images/logo.png" alt="">
    </div>
    <div class="nav-bar-right-content">
      <div class="nav-bar-user-tag"></div>
      <img class="nav-bar-right-content_icon" src="../../assets/icons/messeger_icon.svg" alt="">
      <img class="nav-bar-right-content_icon" src="../../assets/icons/notifications_icon.svg" alt="">
      <img class="nav-bar-right-content_icon" src="../../assets/icons/configuration_icon.svg" alt="">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .nav-bar {
    display: grid;
    grid-template-columns: 30% 40% 30%;
    justify-items: center;
    align-content: center;
  

    margin: 0;
    padding: 0;
    width: 100%;
    height: 70px;

    background-color: var(--verde-escuro);
  }

  #home_icon{
    align-self: flex-start;
  }

  .nav-bar-search-bar {
    display: flex;
    align-items: center;

    width: 400px;
    height: 37px;

    border-radius: 10px;

    background-color: white;
  }

  #soluti_logo{
    margin-left: -7px;
    width: auto;
    height: 50px;
  }

  .nav-bar-right-content{
    display: flex;
    align-items: center;
    flex-direction: row;

    width: 350px;
    height: 37px;
  }

  .nav-bar-right-content .nav-bar-user-tag {
    width: 100px;
    height: 37px;
    margin-right: 20px;

    border-radius: 10px;

    background-color: var(--branco);
  }

  .nav-bar-right-content .nav-bar-right-content_icon{
    margin-left: 20px;
  }


</style>
