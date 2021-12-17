<template>
  <div class="page-wrapper">
    <div class="form-wrapper">
      <form action="" class="form">
        <div id="item_1" class="box">
          <div id="profile-pic-wrapper"></div>
        </div>
        <div id="item_2" class="box">
          <h3>Nome</h3>
          <h3>Nome de Usuário</h3>
        </div>
        <div id="item_3" class="box">
          <input type="text">
          <input type="text">
        </div>
        <div id="item_4" class="box">
          <h3>Email</h3>
          <h3>Nova Senha</h3>
          <h3>Repita a Senha</h3>
        </div>
        <div id="item_5" class="box">
          <input type="text">
          <input type="text">
          <input type="text">
        </div>
        <div id="item_6" class="box"></div>
      </form>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  * {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
  }

  .page-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-wrapper{
    margin-top: 120px;

    width: 450px;
    height: 480px;

    border-radius: 15px;

    background-color: var(--verde-escuro);
  }

  .form{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 20% 30% 30% 20%;

    grid-template-areas: 
      "a b"
      "c d"
      "e f" 
      "g h"
    ;
  }

  .form > div{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  .form #item_1{
    grid-area: a;
    background-color: red;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .form #item_1 #profile-pic-wrapper{
    width: 80px;
    height: 80px;

    border-radius: 50px;
    background-color: white;
  }

  .form #item_2{
    grid-area: c;
    background-color: blue;    
  }

  .form #item_2, #item_4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form #item_2 > h3, #item_4 > h3{
    margin-top: 5px;
    width: 100%;
    text-align: right;
  }

  .form #item_3{
    grid-area: d;
    background-color: purple;
  }

  .form #item_3, #item_5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .form #item_3 > input, #item_5> input{
    margin-top: 5px;
  }

  .form #item_4{
    grid-area: e;
    background-color: orange;
  }

  .form #item_5{
    grid-area: f;
    background-color: yellow;
  }

  .form #item_6{
    grid-area: h;
    background-color: green;
  }
  
  .box{
    width: 100px;
    height: 80px;
  }
</style>
