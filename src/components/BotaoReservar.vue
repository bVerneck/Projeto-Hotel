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
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}

* {
  font-family: "Mont";
  margin-top: 25px;
}

.btn-rsv {
  padding: 0;
  width: 6.5rem;
  height: 2rem;
  text-transform: uppercase;
  border-radius: 0.4rem;
  border: none;
  background-color: #0DADBD;
  color: #f9f9f9;
  text-align: center;
  position: fixed;
  font-family: 'Mont-bold', 'Helvetica Neue';


  
}

.btn-rsv:hover {
  background-color: rgb(133, 57, 253);
  cursor: pointer;
  color: #f9f9f9;
}

@media (max-width: 768px) and (orientation: portrait) {
  .btn-rsv {
    position: static;
    margin-left: 28px;
  }

}
</style>
