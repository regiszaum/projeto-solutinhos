<template>
  <div class="catalog-wrapper"> 
    <div class="catalog-profile-info">
      <div id="proile-pic-wrapper"></div>
      <h1>Nome do Usuário</h1>
      <button>Ver Perfil</button>
    </div>
    <div class="catalog-options">
      <Option :img="'messeger.svg'" :name="'Messeger'"/>
      <Option :img="'seguidores.svg'" :name="'Seguidores'"/>
      <Option :img="'grupos.svg'" :name="'Grupos'"/>
      <Option :img="'paginas.svg'" :name="'Páginas'"/>
      <Option :img="'eventos.svg'" :name="'Eventos'"/>
      <Option :img="'fundacoes.svg'" :name="'Fundações'"/>
      <Option :img="'memorias.svg'" :name="'Memórias'"/>
      <Option :img="'videos.svg'" :name="'Vídeos'"/>
    </div> 
  </div>
</template>

<script>
import Option from './Option.vue'

export default{
  components:{
    Option
  }
}

</script>

<style scoped>

 .catalog-wrapper{
   position: absolute;
   top: -100px;
   right: 550px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;

   width: 400px; 
   height: 100%;

   background: var(--verde-escuro);
  }

  .catalog-profile-info{
    margin-top: 100px;

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

  .catalog-profile-info h1{
    margin-top: 20px;

    font-size: 25px;
  }

  .catalog-profile-info button {
    margin-top: 20px;
    
    background-color: var(--verde);

    width: 160px;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 7px 2px;

    cursor: pointer;
  }

  .catalog-profile-info button:hover{
    background-color: var(--verde-hover);
  }

  .catalog-options{
    margin-top: 30px;

    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    display: flex;
  }
</style>