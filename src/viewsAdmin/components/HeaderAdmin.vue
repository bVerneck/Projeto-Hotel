<template>
   
  <div class="barraRoxaTop">
   <router-link to="/"><img src="../assets/img/logo.png" alt="Logo Imagem" class="logo" /></router-link>
      
    
    <a href="">
      <img src="../assets/img/icone-logout.png" class="botaosair" alt="" />
    </a>
    <div class="barraNavegacao">
      <router-link to="/homeAdmin">Home</router-link>
      <router-link to="/hospedesAdmin">Hospedes</router-link>
      <router-link to="/reservasAdmin">Reservas</router-link>
      <router-link to="/funcionariosAdmin">Funcionarios</router-link>
    </div>
  </div>


</template>

<script>
export default {
    name: "HeaderAdmin"
}
</script>

<style scoped>


@charset "UTF-8";

@font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}
.botaosair {
  width: 37px;
  float: right;
  filter: invert(100%);
}
.botaosair:hover{
   filter: none;
}


.barraRoxaTop {
  background-color: #670bff;
  display: block;
  font-size: 1.2em;
  
}

.logo {
  width: 25%;
  padding-left: 15%;
  cursor: pointer;
}

.barraNavegacao {
  display: initial;
  padding-left: 0.00001%;
}
.barraNavegacao a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding-left: 3%;
  font-size: 1.4em;
}
.barraNavegacao a:hover {
  color: rgba(0, 0, 0, 0.425);
}
</style>