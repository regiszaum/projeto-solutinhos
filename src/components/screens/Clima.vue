<template>
  <div id="clima-component">
    <div class="container-pesquisa">
      <input
        type="text"
        class="barra-pesquisa"
        placeholder="Buscar cidade..."
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Clima",
  data() {
    return {
      api_key: "d35e9702b47cb4bf09864e6f0baa4da5",
    };
  },
};
</script>

<style scoped>
#clima-component {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url('../../assets/images/bg-clima.jpg');
  background-position: bottom;
  transition: 0.4s;
}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.container-pesquisa {
    min-height: 100vh;
    padding: 25px;
}
</style>