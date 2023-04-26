<template>

  <div class="barraRoxaTop"> 

   <router-link to="/"><img src="../assets/img/logo.png" alt="Logo Imagem" class="logo" /></router-link>
  
    <router-link to="/loginAdmin" v-on:click.native="showConfirmation">
  <img src="../assets/img/icone-logout.png" class="botaosair" alt="" />
</router-link>

    <div class="barraNavegacao">
      <router-link to="/homeAdmin">Home</router-link>
      <router-link to="/hospedesAdmin">Hospedes</router-link>
      <router-link to="/quartosAdmin">Quartos</router-link>
      <router-link to="/funcionariosAdmin">Funcionarios</router-link>
      
    </div>
  </div>


</template>

<script>
export default {
    name: "HeaderAdmin",
    methods:{
      showConfirmation() {
      if (!confirm('Tem certeza que deseja sair?')) {
        event.preventDefault()
      }
    }
    }
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
  
  
}

.logo {
  width: 25%;
  padding-left: 15%;
  cursor: pointer;
  display: inline-block;
}

.barraNavegacao { 
  display: inline-block; 
  position:absolute;
  padding-top:1.8% ;
  width: 25%;
  
  
}
.barraNavegacao a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding-left: 25%;
  font-size: 1.9em;
}
.barraNavegacao a:hover {
  color: rgba(0, 0, 0, 0.425);
}
</style>