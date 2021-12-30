<template>
  <div>
    <ProfileCatalog :username="this.usuario.nome"/>
    <Contacts/>
    <div class="content">

      <div v-for="el in array" :key="el" class="box">

      </div>
    </div>
  </div>
</template>

<script>

import http from '@/http'

import ProfileCatalog from '../shared/ProfileCatalog.vue'
import NavBar from '../shared/NavBar.vue'
import Contacts from '../shared/ContactsField.vue'

export default{
  components: {
    ProfileCatalog,
    Contacts
  },
  created(){
    http.get('userdata', {
      headers: {
        'Authorization': `Basic ${this.$store.state.token}` 
      }
    })
      .then(res => {
        console.log(res)
        this.usuario.nome = res.data[0].nome
        this.usuario.email = res.data[0].email

        console.log(this.usuario.nome)
      })
      .catch(err => console.log(err))
  },
  data(){
    return{
      array: [1,2,3,4,5,6,7,8,9,10],
      usuario: {
        nome: '',
        email: ''
      }
    }
  }
}

</script>

<style scoped>
  .content{
    position: relative;
    top: 100px;
    left: 450px;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 500px;
    height: auto;
  }

  .box {
    margin-top: 20px;

    width: 450px;
    height: 600px;

   border: solid 0.5px black;
  }
</style>