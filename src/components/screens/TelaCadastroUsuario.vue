<template>
  <div class="container">
    <div class="content-wrapper">
      <h1>Cadastro de Usuário</h1>

      <form @submit.prevent="cadastrar" class="formulario">
        <div class="grid">
          <label id="item1" for="">Nome</label>
          <input id="item2" type="text" v-model="usuario.nome">
        
          <label id="item3" for="">E-mail</label>
          <input id="item4" type="e-mail" v-model="usuario.email">
        
          <label id="item5" for="">Senha</label>
          <input id="item6" type="password" v-model="usuario.senha">
        
          <button id="item7" type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
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
  * {
    color: white;
  }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content-wrapper{
    margin-top: 100px;

    width: 400px;
    height: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;

    background: var(--verde-escuro);
  }

  .content-wrapper h1{
    font-size: 20px;
    font-weight: bold;
  }

  .formulario{
    width: 100%;
    height: 80%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid{
    display: grid;
    grid-template-columns: 30% 70% ;
    grid-template-rows:  25% 25% 25% 25%;
    grid-template-areas: 
      'a b'
      'c d'
      'e f'
      'g g'
    ;

    width: 80%;
    height: 300px;
  }

  #item1{
    grid-area: a;
  }

  #item3{
    grid-area: c;
  }

  #item5{
    grid-area: e;
  }

  #item1, #item3, #item5 {
    margin-right: 25px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  #item2, #item4, #item6{
    display: flex;
    align-self: center;
    justify-content: center;

    height: 30px;

    border-radius: 20px;
    border: none;

    box-sizing: border-box;
    padding: 8px 6px;
    color: black;
  }
  
  #item7{
    grid-area: g;

    align-self: center;
    justify-self: center;

    background-color: var(--verde);

    width: 160px;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 7px 2px; 
  }

  #item7:hover{
    background-color: var(--verde-hover);
  }
</style>
