<template>
  <div class="card">
    <img :src="img" alt="">
     <h1>{{this.$props.name}}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  props: {
    url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  created(){
    axios(this.$props.url)
    .then(res => {
      console.log(res)
      this.img = res.data.sprites.front_default
    })
  },
  data(){
    return {
      img: ''
    }
  }
}
</script>

<style scoped>
  * {
    color: black;
  }

  .card {
    width: 100px;
    height: 150px;
  }
</style>
