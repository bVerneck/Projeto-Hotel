<template>
  <HeaderHome /> 
   <main>
<div class="first-box">
    <h1>O Hotel</h1>
    <div class="texto">
        <p class="texto-bemvindo">BEM-VINDO AO</p>
        <h1>T.EX</h1>
        <p class="texto-hotel">HOTEL</p>
        <p class="texto-slogan">Desfrute do Luxo Tecnológico</p>
      </div>
      <a href="./pages/reservas.html"><button class="btn"><i class="fa fa-home"></i> Reserve
          Agora</button></a>
      <div class="scroll-down">
        <img src="@/assets/img/down-arrow.svg" alt="role para baixo">
      </div>
  </div>
 
  <br><br>
  <div style="text-align:center">
    <h2 class="sobre">Sobre Nosso Hotel</h2>
  </div>

  <div class="container">
    <div class="row">
      <div class="column-33">
        <img class="imagens" src="@/assets/img/getting-to-marinabaysands-t.webp">
      </div>
      <div class="column-66">
        <p class="textoimg">Pensado e arquitetado pelos melhores profissionais do mundo, visando para que nossos
          clientes tenham total conforto e tecnologia ao seu dispor.
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="column-66">
        <p class="textoimg">Cada detalhe foi cuidadosamente pensado e trabalhado tanto nos ambientes externos quanto
          internos, proporcionando uma experiência única e inesquecível em cada espaço.
        </p>
      </div>
      <div class="column-33">
        <img class="imagens" src="@/assets/img/foto_1.jpg" alt="App">
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="column-33">
        <img class="imagens" src="@/assets/img/foto_2.1.jpg">
      </div>
      <div class="column-66">
        <p class="textoimg">viver em um mundo de beleza e encantamento no nosso T.EX Hotel. Aqui, você poderá
          experimentar
          sensações únicas, criar novas memórias e se deixar levar pela imaginação.
        </p>
      </div>
    </div>
  </div>

  <!--Acomodações-->
  <br><br><br>
  <div id="acomodacoes" style="text-align:center">
    <h2 class="sobre">NOSSAS ACOMODAÇÕES</h2>
  </div>

  <br> <br> <br>

  <div class="row">
    <div class="holder">

      <div class="imagen" data-title="Premier Room">
        <img src="@/assets/img/premier-room.webp" style="border-radius: 18px;">
        <p class="descImagens">Pensado e arquitetado pelos melhores profissionais do mundo, visando para que nossos
          clientes tenham total conforto e tecnologia ao seu dispor.</p>
      </div>

      <div class="imagen" data-title="Deluxe Room">
        <img src="@/assets/img/quartoDeluxeRoom.jpg" style="border-radius: 18px;">
        <p class="descImagens">Cada detalhe foi cuidadosamente pensado e trabalhado tanto nos ambientes externos quanto
          internos, proporcionando uma experiência única e inesquecível em cada espaço.</p>
      </div>

      <div class="imagen" data-title="T.Ex Premier Room">
        <img src="@/assets/img/tex-premier-room.webp" style="border-radius: 18px;">
        <p class="descImagens">viver em um mundo de beleza e encantamento no nosso T.EX Hotel. Aqui, você poderá
          experimentar
          sensações únicas, criar novas memórias e se deixar levar pela imaginação.</p>
      </div>

    </div>
  </div>

  <br><br><br><br><br>

  <div class="container">
    <button class="btn">Conheça mais sobre nossos serviços</button>

    <br>
  </div>
  <!--Fim Acomodações-->

  <!--Gastronomia-->
  <br><br><br><br><br><br>
  <div style="text-align:left">
    <h2 class="sobre">Gastronomia</h2>
  </div>

  <div class="container">
    <div class="row">
      <div class="column-33">
        <img class="imagens" src="@/assets/img/RISE_Australian_Stanbroke_Beef_Ribeye_600x450.webp">
      </div>

      <div class="column-66">
        <br><br><br>
        <p class="textoimgDelicie" style="font: montserrat; size: 36px; line-height: 43.88px;">Delicie-se com uma
          variedade
          ilustre de culinárias de todo o mundo. Navegue pelo mais variados tipos de pratos, feito pelo melhores e
          variados chefs que temos.
          No Restaurante T.EX CUISINE, o mundo estará à sua mesa.
        </p>
      </div>
    </div>
  </div>
  <!--Fim Gastronomia-->

  </main>
  <UnifiedFooter />
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
// import UnifiedHeader from "@/components/UnifiedHeader.vue";
import UnifiedFooter from "@/components/UnifiedFooter.vue";

export default {
  name: "HomeView",
  components: {
    HeaderHome,
    UnifiedFooter,
  },
};
</script>

<style>
 * {
  box-sizing: border-box;
  margin: 0;
}

.sobre {
  text-align: center;
  font-size: 50px;
  font-family: "Mont";
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  padding: 60px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column-66 {
  float: left;
  width: 66.66666%;
  padding: 10px;
 
}

.column-33 {
  float: left;
  width: 33.33333%;
  padding: 10px;
}

.large-font {
  font-size: 48px;
}

.xlarge-font {
  font-size: 64px;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
  
}

.imagens {
  width: 550;
  height: 300;
  margin: 10px;
  text-align: center;
  border-radius: 18px;
}


.imagen {
  width: 550px;
  height: 300px;
  margin: 10px;
  position: relative;
  text-align: center;
}

.textoimg {
  font-size: 30px;
  font-family: "Montserrat";
  padding-top: 8%;
  padding-left: 5%;
  
  
}
.textoimgDelicie{
  font-size: 30px;
  font-family: "Montserrat";
  padding-left:5% ;
  
}

.holder {
  display: flex;
  justify-content: center;
}

.imagens::after {
  content: attr(data-title);
  position: absolute;
  width: 100%;
  top: -30px;
  left: 0;
  font-size: 30px;
  font-family: "Montserrat";
  font-weight: bold !important;
}

.imagens::before {
  content: attr(data-subtitle);
  position: absolute;
  width: 100%;
  bottom: -100px;
  left: 0;
  font-size: 30px;
  font-family: "Montserrat";
}

@media screen and (max-width: 1000px) and (orientation: portrait) {
  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
  }

  img {
    margin: auto;
  }

  .imagens {
    margin: 0px;
    width: auto;
    height: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  .imagen {
    margin: 0px;
    width: auto;
    height: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  .holder {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .sobre {
    font-size: 31px;
  }

  .container {
    padding: 20px;
  }

  .descImagens {
    padding-bottom: 30px;
  }
}

.tituloAcomodacoes {
  text-align: center;
  font-size: 30px;
  font-family: "Montserrat";
  font-weight: bold !important;
  margin-top: 0;
  padding-top: 0;
}

.row .holder .imagens img {
  opacity: 0.7;
  transition: all 0.6s;
}

.row .holder .imagens img:hover {
  opacity: 1;
  cursor: pointer;
  width: 605px;
  box-shadow: 5px 10px 10px grey;
}


</style>