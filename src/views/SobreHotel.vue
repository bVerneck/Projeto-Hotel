<template>

<header class="header">
  <unifiedHeader />
</header>

<main>
  <div class="first-box">
    <h1>O Hotel</h1>
    <article>
      <ul>
        <li>
          <div class="image-and-text">
            <img src="@/assets/img/getting-to-marinabaysands-t.webp" class="img-left">
            <p class="p-right">
              Este hotel está sempre em busca de oferecer o melhor para seus clientes, 
              desde as comodidades de alta qualidade até a tecnologia mais avançada. 
              Com quartos modernos e confortáveis, bem como uma equipe atenciosa e prestativa, 
              os hóspedes têm a certeza de uma experiência memorável.
            </p>
          </div>
        </li>

        <li>
          <div class="image-and-text">
            <img src="@/assets/img/quartoDeluxeRoom.jpg" class="img-left">
            <p class="p-right">
              Os quartos deste hotel são verdadeiras obras de arte. 
              Com decoração moderna e confortável, 
              oferecem o ambiente perfeito para descansar após um longo dia de viagem. 
              As camas macias e os lençóis de alta qualidade garantem uma noite de sono inesquecível.
            </p>
          </div>
        </li>

        <li>
          <div class="image-and-text">
            <img src="@/assets/img/RISE_Australian_Stanbroke_Beef_Ribeye_600x450.webp" class="img-left">
            <p class="p-right">
              O nosso hotel oferece uma experiência gastronômica única.
              Nosso chef utiliza ingredientes frescos e locais para criar pratos deliciosos e saudáveis. 
              Experimente o melhor da culinária local e internacional no nosso restaurante.
            </p>
          </div>
        </li>
      </ul>
    </article>
  </div>
</main>

<unifiedFooter />
</template>

<script>
import UnifiedHeader from '@/components/UnifiedHeader.vue';
import UnifiedFooter from '@/components/UnifiedFooter.vue';
export default{
    name: "SobreHotel",
    components: {UnifiedHeader, 
    UnifiedFooter
    }
}
</script>


<style scoped>
@font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}

@font-face {
  font-family: "Mont-bold";
  src: url("../assets/fonts/Montserrat-Bold.otf");
}

@font-face {
  font-family: "Garamond";
  src: url("../assets/fonts/AGaramondPro-Bold.otf");
}

body {
  margin: 0%;
}

main {
  padding-top: 2rem;
  margin-bottom: 0.6rem;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Mont", "Garamond";
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

.first-view {
  background-image: url("../assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg");
  background-size: cover;
  width: 100%;
  height: 8rem;
  position: absolute;
  z-index: -1;
}

.first-box {
  display: flex;
  border-radius: 1rem;
  padding: 4rem;
  padding-top: 0rem;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  flex-direction: column;
}

.p-right {
  float:right;
  text-align:center;
  font-size: 1.3rem;
  width: 50%;
  font-family: "Mont";
  font-size: larger;
  
}
.image-and-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2rem;
  }

.img-left {
  display: inline;
  margin-right: auto;
  width: 40%;
  border-radius: 1rem;
  position: static;
  border:solid 1px black;
  
}

a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  color: rgba(255, 255, 255, 0.625);
}

@media screen and (max-width: 780px) {
  .image-and-text {
    flex-direction: column;
    align-items: flex-start;
  }
  .first-box {
    padding: 0;
    background-color: white;
  }

  .img-left {
    width: 100%;
    margin-bottom: 0rem;
  }

  .p-right {
    width: 100%;
    margin-bottom: 2rem;
    float: bottom;
    
  }
}


</style>