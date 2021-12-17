<template>
    <div>
        <div class="img-login">
            <img src="../../assets/images/image-side-login.jpg" alt="trabalho-em-equipe">
        </div>
        <div class="form-login">
            <h1>Login</h1>
            <input type="text" name="username" v-model="input.username" placeholder="Username" />
            <input type="password" name="password" v-model="input.password" placeholder="Password" />
            <button type="button">Login</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TelaLogin',
    components: {
        TelaLogin
    }
}
</script>

<style>
* {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.img-login {
    position: initial;
    width: 70%;
    height: auto;
}

.form-login {
    color: #FFF;
    background-color:#107266 ;
    font-family: 'Franklin Gothic Medium';
    align-content: center;
    
    
}

</style>