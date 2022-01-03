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
import { mapGetters } from 'vuex'

import ProfileCatalog from '../shared/ProfileCatalog.vue'
import Contacts from '../shared/ContactsField.vue'

export default{
  components: {
    ProfileCatalog,
    Contacts
  },
  created(){
    const user = this.getUserById(11)
    this.usuario.nome = user.nome
    this.usuario.email = user.email
  },
  data(){
    return{
      array: [1,2,3,4,5,6,7,8,9,10],
      usuario: {
        nome: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getUserById'
    ])
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