<template>
  <div class="contacts-base">
    <div class="contacts-wrapper">  
      <h1>Contatos</h1>
      <h3>Online</h3>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .contacts-base{
    float: right;
    width: 350px; 
    height: 100vh;
  }

  .contacts-wrapper{
    position: fixed;

    margin-top: 70px;
    
    width: 350px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .contacts-wrapper h1{
    margin-top: 40px;
    font-size: 16px;

    color: black;
  }

   .contacts-wrapper h3{
     margin-top: 10px;

    font-size: 13px;
    font-weight: 400;

    color: black;
  }
</style>
