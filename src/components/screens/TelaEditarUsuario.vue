<template>
  <div class="page-wrapper">
    <div class="form-wrapper">
      <form autocomplete="off" action="" class="form">

        <div id="item_1" class="box">
          <div id="profile-pic-wrapper"></div>
        </div>

        <div id="item_2" class="box">
          <h3>Nome do usuário</h3>
          <h3>Alterar nome de usuário</h3>
        </div>

        <div id="item_3" class="box">
          <h3>Nome</h3>
          <h3>Nome de usuário</h3>
        </div>
        <div id="item_4" class="box">
          <input name="name" v-model="name" autocomplete="off" type="text">
          <input name="username" v-model="username" autocomplete="off"  type="text">
        </div>

        <div id="item_5" class="box">
          <h3>Email</h3>
          <h3>Nova senha</h3>
          <h3>Repita a senha</h3>
        </div>
        <div id="item_6" class="box">
          <input type="email">
          <input type="password" autocomplete="off" >
          <input type="password" autocomplete="off" >
        </div>
        
        <div id="item_7" class="box">
          <button>Enviar</button>
          <a href="">Desconectar</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  * {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: var(--branco);
  }

  input {
    margin-bottom: 10px;

    width: 100%;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 8px 6px;

    color: black;
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    background-color: var(--verde-escuro);
  }

  .form{
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 35% 65%;
    grid-template-rows: 25% 30% 30% 15%;

    grid-template-areas: 
      "a b"
      "c d"
      "e f" 
      "g g"
    ;
  }

  .form > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
  }

  .form #item_1, #item_2{
    margin-top: 10px;

    grid-area: a;

    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .form #item_1 #profile-pic-wrapper{
    width: 100px;
    height: 100px;

    border-radius: 50px;
    background-color: white;
  }

  .form #item_2 {
    grid-area: b;
  }  

  .form #item_2 > h3 {
    width: 100%;
   text-align: left;
  }

  .form #item_3{
    grid-area: c;   
  }

  .form #item_3 > h3, #item_5 > h3{
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    text-align: right;
  }

  .form #item_4{
    grid-area: d;
  }

  .form #item_4, #item_6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .form #item_4 > input, #item_6> input{
    width: 90%;
    margin-top: 5px;
  }

  .form #item_5{
    grid-area: e;
  }

  .form #item_6{
    grid-area: f;
  }

  .form #item_7{
    grid-area: g;
  }

  .form #item_7 button {
    margin-bottom: 10px;

    background-color: var(--verde);

    width: 115px;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 7px 2px;
  }

  .form #item_7 button:hover {
    background-color: var(--verde-hover);
  }
  
  .box{
    width: 100px;
    height: 80px;
  }
</style>
