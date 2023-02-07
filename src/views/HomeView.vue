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
<!-- <body onload="confirm()"> -->
<body >

<header>
  <div class="bg-img">
    <div class="bg-img-top">
      <img class="logo-header" src="@/assets/img/group.png" alt="logo">
      <div class="bg-img-top-content">
        <ul class="topnav" id="myTopnav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/sobre">O Hotel</router-link></li>
          <li><router-link to="/acomodacoes">Acomodações</router-link></li>
          <li><router-link to="/contatos">Contatos</router-link></li>
                
        </ul>
             <ul class="loginCadastro">
              <li class="logCada"><router-link  to="/loginPublic">Login</router-link></li>
              <li class="logCada"><router-link  to="/cadastroPublic">Registre-se</router-link></li>
            </ul> 
        <!-- <div class="nav-cadastro">
          <a href="./pages/login-public.html" id="link"><button id="btn-cadastro" class="btn-cadastro"><span
                id="login">Login</span></button></a>

          <a href="./pages/cadastro.html"><button id="btn-cadastro cadastro" class="btn-cadastro"><span
                id="cadastro">Cadastre-se</span></button></a>

        </div> -->
      </div>
    </div>

    <div class="texto">
      <p class="texto-bemvindo">BEM-VINDO AO</p>
      <h1>T.EX</h1>
      <p class="texto-hotel">HOTEL</p>
      <p class="texto-slogan">Desfrute do Luxo Tecnológico</p>
    </div>
        <router-link style="text-decoration: none" href="#" to="/reservas"><button class="btn"><i class="fa fa-home"></i> Reserve
        Agora</button></router-link>
    <div class="scroll-down">
      <img src="@/assets/img/down_arrow.svg" alt="role para baixo">
    </div>
  </div>
</header>
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

<br><br><br><br>

<div class="container">
  <button class="btn">Conheça mais sobre nossos serviços</button>

  <br>
</div>
<!--Fim Acomodações-->

<!--Gastronomia-->
<!-- <br><br><br><br><br><br> -->
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
<UnifiedFooter />
</body>

  
</template>

<script>

import BotaoReservar from "@/components/BotaoReservar.vue";
import LogoHeader from "@/components/LogoHeader.vue";
import UnifiedFooter from "@/components/UnifiedFooter.vue";

export default {
  name: "HomeView",
  components: {
      UnifiedFooter
  }
};
</script>

<style>
.logCada{
  margin-bottom:20px;
  font-size: 1.6rem;
  list-style: none;
  
  
}


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
    
}

.bg-img-top-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10rem;
    align-items: center;
    flex-wrap: wrap;

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

.topnav a, .loginCadastro a{
    text-decoration: none;
    color: #fff;
    
}

.topnav a:hover, .loginCadastro a:hover {
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
    max-width: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 190px;
    color: #fff;
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

@keyframes slide{
    from{
        top: 56rem;
    }
    to{
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
    }

    .scroll-down {
        display: none;
    }


}

</style>
 


