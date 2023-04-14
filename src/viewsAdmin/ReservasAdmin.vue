<template>
    <!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <title>Hotel TEX</title>
  </head>
  <body>
     <header>
        <HeaderAdmin />
    </header>
    <br /><br />
    <div style="text-align: center">
      <h2 class="minha_reserva">QUARTOS</h2>
    </div>

    <main>
      <div id="rooms">
        <div class="room">
          <img class="room-image" src="../assets/img/premier-room.webp" />
          <div class="modificarImagem">
            <p>MODIFICAR IMAGEM</p>
            <input type="file">
          </div>
          <input placeholder="Nome do quarto aqui" value="PREMIER ROOM" class="room-name" />
          <div class="room-info">
            <input placeholder="Valor aqui" value="R$ 500" class="room-price" />
          </div>
          <button class="botaoConfirmar">Confirmar</button>
        </div>
        <div class="room">
          <img
            class="room-image"
            src="../assets/img/quartoDeluxeRoom.jpg"
            alt="App"
          />
          <div class="modificarImagem">
            <p>MODIFICAR IMAGEM</p>
            <input type="file">
          </div>
          <input placeholder="Nome do quarto aqui" class="room-name">
          <div class="room-info">
            <input value="" placeholder="Valor aqui" class="room-price" />
          </div>
          <button class="botaoConfirmar">Confirmar</button>
        </div>
        <div class="room">
          <img class="room-image" src="../assets/img/tex-premier-room.webp" />
          <div class="modificarImagem">
            <p>MODIFICAR IMAGEM</p>
            <input type="file">
          </div>
          <input placeholder="Nome do quarto aqui" class="room-name"/>
          <div class="room-info">
            <input placeholder="Valor aqui" class="room-price" />
          </div>
          <button class="botaoConfirmar">Confirmar</button>
        </div>
      </div>
      <aside id="summary">
        <h1>Resumo da Reserva</h1>
        <div class="summary-info">
          <p>Apartamento:</p>
          <p>Check-in:</p>
          <p>Check-out:</p>
          <p>Qtd Pessoas:</p>
        </div>
        <button class="summary-book">Continuar</button>
      </aside>
    </main>
  </body>

</html>



</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';

export default {
  name: "ReservasAdmin",
  components: {
    HeaderAdmin
  },
}
</script>

<style scoped>
.botaoConfirmar{
 cursor: pointer;
}

.modificarImagem{
  text-align: center;
}

* {
  box-sizing: border-box;
  margin: 0;
}

.minha_reserva{
  text-align: center;
  font-size: 50px;
  font-family: "Mont";
  margin-bottom: 4rem;
}

.form{
position: flex;
text-align: center;
}

#formCalendario{

/*   margin: 0 20rem; */
  display: flex;
  justify-content: center;
  align-items: stretch;

}



.input{
  border-style: none;
}

#formCalendario li{
background-color:#0DADBD;
margin: 0 1rem;
padding:0.5rem;
color: aliceblue;
max-width: 250px;
display: flex;
flex-direction: column;
}

.data_enter{
position: sticky;
/* width: 320px;
height: 67px;
left: 444px;
top: 1591px; */
/* background: #0DADBD; */
}

.data_out{
position: sticky;
/* width: 320px;
height: 67px;
left: 444px;
top: 1591px; */
background: #0DADBD;

}

.qtdPessoa{
position: sticky;
/* width: 320px;
height: 67px;
left: 444px;
top: 1591px; */
background: #0DADBD;
}


body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
    background-color:#95959558;
}

.container {
  padding: 60px;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}

/* .column-66 {
  float: right;
  width: 66.66666%;
  padding: 10px;
} */

/* .column-33 {
  float: left;
  width: 33.33333%;
  padding: 10px;
} */

#rooms{
  padding: 2rem;
  display: flex;
}

.room{
  display: flex;
  flex-direction: column;
  margin: 6rem;
  max-width: 400px;
  border: 2px solid rgb(0, 0, 0)
}

.room-name{
  text-align: center;
  font-size: 2rem;
  font-family: "Mont";
  background-color: #0b1fff41;
  color: aliceblue;
  padding: 0.5rem 0;
}

.room-info{
  display: flex;
  /* background-color: red; */
  padding: 0.5rem;
  margin-left: 10%;
  

}

.room-price{
background-color: #0DADBD;
color: aliceblue;
border-radius: 2px;
margin: 0.5rem;
padding: 0.5rem;
font-weight: bold;
font-size: 1.2rem;
text-align: center;
}

.room-select{
 /*  background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.room-select button{
  border-radius: 50%;
  font-size: 1.25rem;
  border: none;
  background-color: orange;
  color: white;
  font-weight: bold;
  margin: 0 0.8rem;
}

.room-select h2{
  font-size: 1rem;
  display: inline-block;
}

.room-select button:hover{
  cursor: pointer;
}

main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 0 0;
}

#summary{
  background-color: #ECEBEE;
  height: 500px;
  width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

#summary div{
  background-color: #D5D8D9;
  padding: 0 1rem;
  height: 300px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#summary h1{
  text-transform: uppercase;
}

.summary-info p{
text-transform: uppercase;
margin: 1.2rem 0;
}

.summary-book{
background-color: #959595;
border: none;
color: aliceblue;
padding: 10px 30px;
font-weight: bold;
font-size: 1.3rem;
text-transform: uppercase;
}

.summary-book:hover{
cursor: pointer;
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

@media screen and (max-width: 1000px) {
 /*  .room{
    align-items: center;
    flex-direction: column;
    justify-content: center;
  } */


  /* .column-66,
  .column-33 {
    width: 100%;
    text-align: center;
  }
  img {
    margin: auto;
  } */
}

.imagens {
  width: 450;
  height: 300;
  /* margin: 10px; */
  position: sticky;
  text-align: center;
  border-radius: 20px;
}

.textoimg {
  font-size: 30px;
  font-family: "Montserrat";
  text-justify: unset;
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

.descImagens {
  font-size: 30px;
  font-family: "Montserrat";
}

</style>