<template>
  <div class="container">
    <div class="widget">
      <h1>Faça seu cadastro <br> e <br> Embarque nessa aventura</h1>

      <form class="formulario">
        <label for="">E-mail</label>
        <input type="email">
        <label for="">Senha</label>
        <input type="password">

        <button type="submit" >Cadastrar</button>
      </form>
    </div>

    <img id="PokeBall" src="@/assets/images/PokeBall.svg" alt="PokeBall">
    <img id="MegaBall" src="@/assets/images/MegaBall.svg" alt="MegaBall">
    <img id="UltraBall" src="@/assets/images/UltraBall.svg" alt="UltraBall">
  </div>
</template>

<script>
import http from '@/http'

export default{
  data(){
    return{
      usuario:{
        nome:'',
        email:'',
        senha:''
      }
    }
  },
  methods: {
    cadastrar(){
      http.post("auth/register",this.usuario)
        .then(res => console.log(res))
        .catch(err => {
          console.log("Erro ao realizar cadastro" + err)
        })
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  * {
    font-family: 'Poppins', sans-serif;
    color: black;
  }

  .container {
    display: flex;  
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .widget {
    margin-top: 25px;
    width: 538.49px;
    height: 604px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    background: #FFFFFF;
    box-shadow: 2px 4px 20px 2px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
  }

  .widget h1 {
    margin-top: 50px;

    width: 360px;
    height: auto;

    font-size: 26px;
    line-height: 39px;
    text-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  .widget .formulario {
    margin-top: 100px  ;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .widget .formulario label {
    margin-left: 12px;

    align-self: flex-start;

    font-size: 18px;
    line-height: 27px;
  }


  .widget .formulario input{
    padding: 10px;

    width: 248px;
    height: 40px;

    border: 0.5px solid #000000;
    box-sizing: border-box;
    border-radius: 30px;
  }

  .widget .formulario button {
    margin-top: 25px;

    width: 110.67px;
    height: 40px;

    background: #FF0000;
    transition: 0.2s;
    border-radius: 30px;
    border: none;

    color: white;
  }

  .widget .formulario button:hover{
    background: #e40808;
  }

  #PokeBall{
    position: absolute;
    top: 2px;
    right: 380px;
  }

  #MegaBall {
    position: absolute;
    bottom: 70px;
    left: 380px;
  }

  #UltraBall {
    position: absolute;
    bottom: 15px;
    right: 380px;
  }
</style>
