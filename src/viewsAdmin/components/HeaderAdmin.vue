<template>
   
  <div class="barraRoxaTop">
    <a href="../../index.html">
      <img src="../assets/img/logo.png" alt="Logo Imagem" class="logo" />
    </a>
    <a href="">
      <img src="../assets/img/icone-logout.png" class="botaosair" alt="" />
    </a>
    <div class="barraNavegacao">
      <a href="../pagesAdmin/home-admin.html">Home</a>
      <a href="../pagesAdmin/hospedes-admin.html">Hóspedes</a>
      <a href="../pagesAdmin/reservas-admin.html">Reservas</a>
    </div>
  </div>


</template>

<script>
export default {
    name: "HeaderAdmin"
}
</script>

<style >
.botaosair {
  width: 37px;
  float: right;
  filter: invert(100%);
}

.barraRoxaTop {
  background-color: #670bff;
  display: block;
  font-size: 1.2em;
}

.logo {
  width: 35%;
  padding-left: 25%;
  cursor: pointer;
}
.barraNavegacao {
  display: initial;
}
.barraNavegacao a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding-left: 3%;
  font-size: 1.4em;
}
.barraNavegacao a:hover {
  color: red;
}
</style>