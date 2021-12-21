<template>
  <div>
    <NavBar/>
    <ProfileCatalog/>
    <Contacts/>
    <div class="content">

      <div v-for="el in array" :key="el" class="box">

      </div>
    </div>
  </div>
</template>

<script>

import ProfileCatalog from '../shared/ProfileCatalog.vue'
import NavBar from '../shared/NavBar.vue'
import Contacts from '../shared/Contacts.vue'

export default{
  components: {
    ProfileCatalog,
    NavBar,
    Contacts
  },
  data(){
    return{
      array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
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