<template>
    <div>
        <NavBar/>
        <div class="posicao">
            <div class="conversas">A</div>
            <div class="mensagens">B</div>
            <div class="status">C</div>
        </div>
    </div>
</template>

<script>
import NavBar from '../shared/NavBar.vue'

export default { 
    name: 'Chat',
    components: {
        NavBar
    }
}
</script>

<style>

.posicao {
  display: grid;
  grid-template-columns: 0.25fr 0.5fr 0.25fr;
  grid-template-rows: 0.5fr 0.5fr 0fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "conversas mensagens status"
    "conversas mensagens status"
    ". . .";
}

.conversas { grid-area: conversas; background-color: blue;width: 100%; height: 100%;}

.mensagens { grid-area: mensagens; background-color: brown;}

.status { grid-area: status;  background-color: coral;}


</style>