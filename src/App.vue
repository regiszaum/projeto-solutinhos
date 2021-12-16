<template>
  <div>
    <NavBar/>
  </div>
</template>

<script>

import NavBar from './components/shared/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
