<template>
    <div id="posicao">
        <div class="img-login" id="div-img-login">
            <img src="../../assets/images/image-side-login.jpg" alt="trabalho-em-equipe" id="img-login">
        </div>
        
        <!-- Esse form era anteriormente uma div -->
        <form @submit.prevent="loginDoUsuario" class="container">
            <img src="../../assets/images/logo.svg" alt="soluti-logo" id="soluti-login">
            <h1>Login</h1>  
            <div class="form-login">
                <label for="email"><strong>Email</strong></label>
                <input v-model="usuario.email" type="text" name="username" placeholder="Digite seu email"/>
                <label for="senha"><strong>Senha</strong></label>
                <input v-model="usuario.senha" type="password" name="password" placeholder="Digite sua senha" />
            </div>
                <button type="submit">Login</button>
            <div class="checkbox-row">
                <label><input type="checkbox" checked="checked" name="lembrar" />Lembrar</label>
                <span class="password"><a href="#"> Esqueceu a senha?</a></span>
            </div>
        </form>
    </div>
</template>

<script>
import http from '@/http'

export default { 
    name: 'TelaLogin',
    data(){
        return{
            usuario: {
                email:'',
                senha:''
            }
        }
    },
    methods:{
        loginDoUsuario(){
            http.post('login',this.usuario)
                .then(res => {
                    window.alert("Bem vindo(a) " + res.data.user.nome)
                })
                .catch(err => {
                    window.alert("O usuário informado não está cadastrado")
                })
        }
    }
}
</script>

<style scoped>

* {
    /* display: flex; */
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#posicao {
  display: grid; 
  grid-template-columns: 0.8fr 0.3fr 0fr; 
  grid-template-rows: 1fr 1fr 0fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "img-login container ."
    "img-login container ."
    ". . ."; 
}

input[type=text], input[type=password] {
    border-radius: 15px;
    width: 100%;
    padding: 8px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    color: black;
}

#soluti-login {
    width: 30%;
    margin-left: 36%;
}

h1 {
    text-align: center;
    font-size: 18px;
    padding: 10%;
}

span.password a{ 
    color: #2BF14D !important;
    float: right;
}

button {
    border-radius: 25px;
    background-color: #2BF14D;
    color: #fff;
    padding: 14px 0;
    margin-top: 3%;
    margin-bottom: 4%;
    margin-left: 25%;
    border: none;
    cursor: pointer;
    width: 50%;
}

button:hover {
    opacity: 0.8;
}

#div-img-login {
    grid-area: img-login; 
}

#img-login {
    width: 100%;
    height: 100%;
}

.container {
    grid-area: container;
    padding: 16px;
    color: #2BF14D;
    border: 5px solid #13564F;
    background-color: #13564F;
    /* border-radius: 25px; */
}
</style>