<template>
  <UnifiedHeader />
  <!--Acomodações-->
  <br /><br />

  <div id="acomodacoes" style="text-align: center">
    <h2 class="texto-NossasAcomodacoes">NOSSAS ACOMODAÇÕES</h2>
  </div>

  <div class="row">
    <div class="holder">

      <div class="imagens">
        <h3>Premier Room</h3>
        
        <RouterLink :to="{ path: '/reservas', hash: '#premier' }">
          <img class="borderRadius" src="../assets/img/premier-room.webp"/>
        </RouterLink>
      </div>

      <div class="imagens">
        <h3>Deluxe Room</h3>
        
         <img  class="borderRadius" src="../assets/img/deluxe-room.jpg"/>      

      </div>

      <div class="imagens">
        <h3>T.EX Premier</h3>
        <RouterLink :to="{ path: 'reservas', hash: '#tex-premier' }">
           <img  class="borderRadius" src="../assets/img/tex-premier-room.webp"/>
        </RouterLink>
       
      </div>

    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="column-66">
        <p class="tituloAcomodacoes">Destaque</p>

       <p class="textoimg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorum
          inventore cum consectetur! Necessitatibus, repellat.
        </p>
      </div>

      <div class="column-33">

        <img class="imagens" src="../assets/img/premier-room.webp"/>

      </div>
    </div>
  </div>

 
  <UnifiedFooter />
</template>

<script>
import UnifiedHeader from "@/components/UnifiedHeader.vue";
import UnifiedFooter from "@/components/UnifiedFooter.vue";
export default {
  name: "AcomodacoesHotel",
  components: {
    UnifiedHeader,
    UnifiedFooter,
  },
};
</script>
<style>

* {
  box-sizing: border-box;
  margin: 0;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.borderRadius{
  border-radius: 18px;

}
.texto-NossasAcomodacoes {
  text-align: center;
  font-size: 50px;
  font-family: "Mont";
  text-align: center;
   font-size: 31px;
   padding-bottom: 50px;
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
  padding-bottom: 50px;
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

.textoimgDelicie {
  font-size: 30px;
  font-family: "Montserrat";
  padding-left: 5%;
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
  opacity: 1;
  transition: all 0.6s;
}

.row .holder .imagens img:hover {
  opacity: 1;
  cursor: pointer;
  width: 605px;
  box-shadow: 5px 10px 10px grey;
  transition: all 0.7s;
}
</style>
