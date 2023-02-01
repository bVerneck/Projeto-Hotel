<template>
  <router-link class="btn-rsv" to="/reservas">Reservar</router-link>
</template>

<script>
export default {
  name: "BotaoReservar",
};
</script>

<style scoped>
font-face {
    font-family:  'Mont';
    src: url('../assets/fonts/Montserrat-Regular.otf');
}
*{
  font-family: 'Mont';
}
.btn-rsv {
  padding: 0;
  width: 6rem;
  height: 2rem;
  text-transform: uppercase;
  border-radius: 0.4rem;
  border: none;
  background-color: rgb(105, 11, 255);
  color: #f9f9f9;
  text-align: center;
  
}
.btn-rsv:hover {
  background-color: rgb(133, 57, 253);
  cursor: pointer;
  color: #f9f9f9;
}
</style>
