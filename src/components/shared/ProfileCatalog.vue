<template>
  <div class="catalog-wrapper"> 
    <div class="catalog-profile-info">
      <div id="proile-pic-wrapper"></div>
      <h1>Nome do Usuário</h1>
      <button>Ver Perfil</button>
    </div>
    <div>
    </div> 
  </div>
</template>

<script>

</script>

<style scoped>
 .catalog-wrapper{
   position: fixed;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   width: 400px; 
   height: 100vh;

   background: var(--verde-escuro);

   z-index: -1;
  }

  .catalog-profile-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #proile-pic-wrapper{
    width: 100px;
    height: 100px;

    background-color: var(--branco);

    border-radius: 50px;
  }
</style>