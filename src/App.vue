<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;

    --verde: #2BF14D;
    --verde-hover: #26cc42;
    --verde-escuro: #107266;
    --branco: #FFFFFF;

    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: var(--branco);
  }
</style>
