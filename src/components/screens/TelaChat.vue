<template>
    <div class="tela">
        <!-- <NavBar/> -->

        <div class="conversas">
            <h1>Conversas</h1>
        <Contact :url="'Alexandre.png'" :name="'Alexandre'" :online_sts="'online'"/>
        <Contact :url="'Alicia.png'" :name="'Alicia'" :online_sts="'offline'"/>
        <Contact :url="'Brandom.png'" :name="'Brandom'" :online_sts="'online'"/>
        <Contact :url="'Brenda.png'" :name="'Brenda'" :online_sts="'online'"/>
        <Contact :url="'Bruna.png'" :name="'Bruna'" :online_sts="'offline'"/>
        <Contact :url="'Carlos.png'" :name="'Carlos'" :online_sts="'online'"/>
        <Contact :url="'Emma.png'" :name="'Emma'" :online_sts="'online'"/>
        <Contact :url="'Kim.png'" :name="'Kim'" :online_sts="'offline'"/>
        </div>

        <div class="chat">
            <h1>Chat</h1>
        </div>

        <div class="user-perfil">
            <h1>User</h1>
        </div>
    </div>
</template>

<script>
import NavBar from '../shared/NavBar.vue'
import Contact from '../shared/Contact.vue'

export default { 
    name: 'Chat',
    components: {
        NavBar,
        Contact
    }


}
</script>

<style scoped>
 h1 {
     padding: 2%;
     font-size: 30px;
 }

.tela {
    display: flex;
}

 .conversas{
     
   position: fixed;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   width: 22%;
   /* height: 100%; */
   background: var(--verde-escuro);
   margin-top: 4.5%;
   padding-top: 0.1%;
   border-right: 5px solid var(--verde-escuro);
   overflow-x: hidden;
   overflow-y: scroll;
   top: 0;
   bottom: 0;

  }

  .contact-wrapper {
    padding: 5%;
    border: solid;
    border-radius: 0% !important;
  }

  .chat {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    background-color: black;
    width: 56%;
    /* height: 750px; */

  }

  .user-perfil {
      width: 22%;
      height: 100%;
      background-color: blue;

  }
</style>