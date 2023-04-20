<template>

<header class="header">
  <unifiedHeader />
</header>

<main>
  <div class="not-found">
    <h1>404!</h1>
    <h2>Oops! Essa página não existe.</h2>
    <router-link to="/">Voltar para a página inicial</router-link>
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

.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
}

main h1 {
  font-size: 10rem;
  margin-bottom: 0;
}

main h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 2rem;
}

router-link {
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
  border: 2px solid #333;
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

router-link:hover {
  background-color: #333;
  color: #fff;
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