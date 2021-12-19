<template>
    <div>
        <!-- <div class="img-login">
            <img src="../../assets/images/image-side-login.jpg" alt="trabalho-em-equipe">
        </div> -->
        <div class="container">
            <h1>Login</h1>
            <div class="form-login">
                <label for="email"><strong>Email</strong></label>
                <input type="text" name="username" placeholder="Digite seu email"/>
                <label for="senha"><strong>Senha</strong></label>
                <input type="password" name="password" placeholder="Digite sua senha" />
            </div>
                <button type="submit">Login</button>
                <div class="container">
                <label><input type="checkbox" checked="checked" name="lembrar" />Lembrar</label>
                <span class="password"><a href="#"> Esqueceu a senha?</a></span>
            </div>
        </div>
    </div>
</template>

<script>
export default { 
    name: 'TelaLogin',
}
</script>

<style>

html, body {
    display: flex;
    font-size: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

input[type=text], input[type=password] {
    border-radius: 15px;
    width: 100%;
    padding: 16px 8px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    }

h1 {
    text-align: center;
    font-size: 18px;
}


span.password {
    float: right;
    padding-top: 0;
    color: #2BF14D;
}

button {
    border-radius: 25px;
    background-color: #2BF14D;
    color: white;
    padding: 14px 0;
    margin: 10px 0;
    border: none;
    cursor: grabbing;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

.img-login {
    width: 20px;
}

.container {
    color: #2BF14D;
    border: 5px solid #107266;
    background-color: #107266;
    border-radius: 25px;
}
</style>