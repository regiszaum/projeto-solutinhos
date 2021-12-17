<template>
    <NavBar/>
    <TelaEditarUsuario/>
</template>

<script>

import NavBar from './components/shared/NavBar.vue'
import TelaEditarUsuario from './components/screens/TelaEditarUsuario.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    TelaEditarUsuario
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;

    --verde: #2BF14D;
    --verde-escuro: #107266;
    --branco: #FFFFFF;
  }
</style>
