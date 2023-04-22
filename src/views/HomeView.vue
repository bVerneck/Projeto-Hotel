<template>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:type" content="hotel" />
    <meta property="og:title" content="T.EX Hotel - A maior e melhor experiência em hotelaria e tecnologia!" />
    <meta property="og:image"
      content="https://untappedcities.com/wp-content/uploads/2011/08/Marina-Bay-Sands-Hotel-Singapore.jpg" />

    <link rel="icon" type="image/png" href="img/tex logo branco 1.png" />
    <title>T.EX Hotel - Desfrute do luxo tecnológico</title>

  </head>

  <body>
    <Carrosel />
    <UnifiedHeader />

    <div class="texto">
      <p class="texto-bemvindo">BEM-VINDO AO</p>
      <h1>T.EX</h1>
      <p class="texto-hotel">HOTEL</p>
      <p class="texto-slogan">Desfrute do Luxo Tecnológico</p>
    </div>

    <div class="container-full">
      <div class="sobre">
        <h2 class="sobre">Sobre Nosso Hotel</h2>
      </div>

      <div class="contain">
        <div class="line">
          <div class="column-33">
            <img class="imagens" src="@/assets/img/getting-to-marinabaysands-t.webp">
          </div>
          <div class="column-66">
            <p class="descImagens">Pensado e arquitetado pelos melhores profissionais do mundo, visando para que nossos
              clientes tenham total conforto e tecnologia ao seu dispor.
            </p>
          </div>
        </div>
      </div>

      <!--Acomodações-->
      <br><br><br>
      <div id="acomodacoes" style="text-align:center">
        <h2 class="sobre">NOSSAS ACOMODAÇÕES</h2>
      </div>

      <div class="line">
        <div class="holder">


          <div class="imagen" data-title="Premier Room">
            <img src="@/assets/img/premier-room.webp" style="border-radius: 18px;">
            <p class="descImagens">Pensado e arquitetado pelos melhores profissionais do mundo, visando para que nossos
              clientes tenham total conforto e tecnologia ao seu dispor.</p>
          </div>

        </div>
      </div>

      <div class="contain">
        <RouterLink to="sobreHotel#"><button class="btn">Conheça mais sobre nossos serviços</button></RouterLink>
      </div>

      <!--Fim Gastronomia-->
      <div class="contain line">
        <h2 class="sobre">Gastronomia</h2>
        <img class="column-33 imagens" src="@/assets/img/RISE_Australian_Stanbroke_Beef_Ribeye_600x450.webp">
        <div class="column-66">
          <p class="descImagens">
            Delicie-se com uma variedade
            ilustre de culinárias de todo o mundo. Navegue pelo mais variados tipos de pratos, feito pelo melhores e
            variados chefs que temos.
            No Restaurante T.EX CUISINE, o mundo estará à sua mesa.
          </p>
        </div>
      </div>
    </div>
    <!--Fim Gastronomia-->


    <UnifiedFooter />
  </body>
</template>

<script>

import BotaoReservar from "@/components/BotaoReservar.vue";
import LogoHeader from "@/components/LogoHeader.vue";
import UnifiedFooter from "@/components/UnifiedFooter.vue";
import Carrosel from "@/components/Carrosel.vue";
import UnifiedHeader from "@/components/UnifiedHeader.vue";


export default {
  name: "HomeView",
  components: {
    UnifiedFooter,
    Carrosel,
    UnifiedHeader
  }
};
</script>

<style>
.logCada {
  margin-bottom: 20px;
  font-size: 1.6rem;
  list-style: none;


}


* {
  box-sizing: border-box;
  margin: 0;

}

.sobre {
  margin-top: 5rem;
  text-align: center;
  font-size: 3rem;
  font-family: "Mont";
  text-transform: uppercase;
  padding-bottom: 2rem;
}


body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.contain {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

.container-full {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.container-full::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.12;
  background-image: url("../assets/img/pexels-damir-mijailovic-3695238.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}

.line:after {
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
  height: auto;
  max-width: 100%;

}

.imagens {
  width: 550;
  height: 300;
  text-align: center;
  border-radius: 18px;
}


.imagen {
  width: 45rem;
  margin: 10px;
  position: relative;
  text-align: center;
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

.descImagens {
  font-size: 1.6rem;
  text-align: justify;
}

@media screen and (max-width: 1000px) and (orientation: portrait) {

  .container-full {
    width: 100%;
    margin-top: 50rem;
  }

  .contain {
    width: 100%;
  }

  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
  }

  img {
    margin: auto;
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
    font-size: 2rem;
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

.line .holder .imagens img {
  opacity: 0.7;
  transition: all 0.6s;
}

.line .holder .imagens img:hover {
  opacity: 1;
  cursor: pointer;
  width: 605px;
  box-shadow: 5px 10px 10px grey;
}

.bg-img {
  background-image: url("@/assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 20px;
}

.bg-img-top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  font-family: 'Mont';
  color: #fff;
}

.logo-header {
  display: block;
  align-self: start;
  z-index: 2;
}

.bg-img-top-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10rem;
  align-items: center;
  flex-wrap: wrap;
  z-index: 2;

  font-family: 'Mont';
  color: #fff;
}

.topnav {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 70px;
  font-size: 1.6rem;

}

.topnav a,
.loginCadastro a {
  text-decoration: none;
  color: #fff;

}

.topnav a:hover,
.loginCadastro a:hover {
  text-decoration: none;
  font-size: 1.614rem;
  color: rgb(207, 233, 245);


}

.nav-cadastro {
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;

  font-size: 1.2rem;
}

.nav-cadastro button {
  background: none;
  border: none;
  font-family: 'Mont';
  font-size: 1.2rem;
  color: #fff;
}

.nav-cadastro button:hover {
  cursor: pointer;
  text-decoration: underline;
}

.nav-cadastro .btn-cadastro {
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: right;
}

.texto {
  background-color: #363f3f41;
  box-shadow: none;
  max-width: fit-content;
  justify-content: center;
  margin-left: 5rem;
  margin-top: 8rem;
  margin-bottom: 16rem;
  padding: .5rem;
  border-radius: 1rem;
  color: #fff;
  position: relative;
  z-index: 1;

}

.texto p,
h1 {
  text-align: center;
}

.texto .texto-bemvindo {
  font-family: 'Mont';
  font-size: 3rem;
}

.texto h1 {
  font-family: 'Garamond';
  font-size: 10rem;
  line-height: 130px;
}

.texto .texto-hotel {
  font-family: 'Garamond';
  font-size: 4rem;
  letter-spacing: 0.4em;
  text-indent: 0.4em;
}

.texto .texto-slogan {
  font-family: 'Mont';
  font-size: 1.5rem;
}

.btn {
  display: block;
  margin: auto;
  background-color: #0DADBD;
  border: none;
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.3rem;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Mont-bold', 'Helvetica Neue';
}

.scroll-down {
  width: fit-content;
  margin: 70px auto 20px auto;
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;

}

.scroll-down p {
  font-family: 'Mont-bold', 'Helvetica Neue';
  color: #fff;
  font-size: 1.1rem;
}

.scroll-down img {
  position: absolute;
  display: block;
  align-self: center;
  width: 40px;
  animation-name: slide;
  animation-duration: .8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slide {
  from {
    top: 56rem;
  }

  to {
    top: 55rem;
  }

}

@media only screen and (max-width: 1315px) {
  .bg-img-top-content {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-right: 30px;
    gap: 30px;
    max-width: 800px;
    align-items: center;
    flex-wrap: wrap-reverse;

    font-family: 'Mont';
    color: #fff;
  }

  .nav-cadastro {
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;

    font-size: 1.2rem;
  }


}

@media only screen and (max-width: 1070px) {

  .texto {
    display: inline;
    margin-bottom: 5rem;
  }

  .texto .texto-slogan {
    display: none;
  }


  .bg-img-top-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 30px;
    gap: 30px;
    max-width: 800px;
    align-items: center;
    flex-wrap: wrap-reverse;

    font-family: 'Mont';
    color: #fff;
  }

  .nav-cadastro {
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;

    font-size: 1.2rem;
  }

}

@media only screen and (max-width: 768px) {



  .bg-img-top {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    font-family: 'Mont';
    color: #fff;
  }

  .bg-img-top-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 30px;
    gap: 30px;
    max-width: 400px;
    align-items: center;
    flex-wrap: wrap-reverse;

    font-family: 'Mont';
    color: #fff;
  }

  .topnav {
    margin: 30px auto 30px auto;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;

    font-size: 1.6rem;
  }

  .nav-cadastro {
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;

    font-size: 1.2rem;
  }

  .texto {
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: auto;
    padding: 20px;
    color: #fff;
    display: none;

  }

  .scroll-down {
    display: none;
  }


}
</style>
 

