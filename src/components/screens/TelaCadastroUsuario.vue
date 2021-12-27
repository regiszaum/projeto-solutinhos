<template>
  <div>
    <form @submit.prevent="cadastrar">
      <div>
        <label for="">Nome</label>
        <input type="text" v-model="usuario.nome">
      </div>
      <div>
        <label for="">E-mail</label>
        <input type="e-mail" v-model="usuario.email">
      </div>
      <div>
        <label for="">Senha</label>
        <input type="password" v-model="usuario.senha">
      </div>
      <button type="submit">Cadastrar</button>
    </form>
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
          console.log('epa deu ruim')
        })
      console.log(this.usuario.nome)
      console.log(this.usuario.email)
      console.log(this.usuario.senha)
    }
  }
}
</script>

<style scoped>
  * {
    color: black;
  }
</style>
