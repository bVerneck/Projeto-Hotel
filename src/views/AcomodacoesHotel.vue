<template>
  <UnifiedHeader />
  <div class="container">

    <section class="title">
      NOSSAS ACOMODAÇÕES
    </section>

    <section class="row">
      <div class="column rooms">
        <h3>Premier Room</h3>
        <img src="../assets/img/premier-room.webp" />
      </div>
      <div class="column rooms">
        <h3>Deluxe Room</h3>
        <img src="../assets/img/deluxe-room.jpg" />
      </div>
      <div class="column rooms">
        <h3>T.EX Premier</h3>
        <img src="../assets/img/tex-premier-room.webp" />
      </div>
    </section>

    <section class="parallax" :class="{ 'is-scrolling': isScrolling }">
      <div class="parallax__overlay"></div>
      <div class="parallax__background"></div>
    </section>

    <section class="row main">
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim dolorum
        inventore cum consectetur! Necessitatibus, repellat.
      </p>
      <img src="../assets/img/quarto.jpg" />
    </section>

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
  data() {
    return {
      isScrolling: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const parallaxBg = document.querySelector(".parallax__background");
      const scrollTop = window.pageYOffset;
      const bgOffset = -(scrollTop * 0.05);
      parallaxBg.style.transform = translate3d('0, ${ bgOffset }px, 0');
      this.isScrolling = scrollTop > 0;
    },
  },
}; 
</script> 
<style> * {
   box-sizing: border-box;
   margin: 0;
 }

 body {
   margin: 0;
   font-family: Arial, Helvetica, sans-serif;
 }

 .container {
   position: relative;
   width: 80%;
   height: 100%;
   margin: 0 auto;
   padding: 20px;
   border-radius: 5px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
 }

 .container::before {
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

 .row {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding-bottom: 20px;
 }

 .column {
   flex-basis: calc(33.33% - 10px);
   padding: 10px;
   margin-bottom: 20px;
   box-sizing: border-box;
 }

 .column h3 {
   font-size: 18px;
   margin-top: 20px;
   margin-bottom: 10px;
   text-align: center;
   font-family: Arial, sans-serif;
   color: #000000;
 }

 .column img {
   display: block;
   width: 100%;
   height: auto;
   margin: 0 auto;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
 }

 /* inicio da animação */

 .rooms {
   position: relative;
 }

 .rooms img:hover {
   transform: scale(1.1);
 }

 .rooms img {
   transition: transform 0.3s ease-out;
 }

 .rooms h3 {
   position: relative;
   font-size: 22px;
   text-align: center;
   padding-bottom: 20px;
 }

 /* final da animação */

 .title {
   text-align: center;
   font-size: 4.5rem;
   font-weight: 600;
   font-family: "Mont", "Garamond";
   text-transform: uppercase;
   padding-top: 2rem;
   padding-bottom: 4rem;
   background-image: url(../assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg);
   background-repeat: repeat;
   background-clip: text;
   color: transparent;
 }

 .main {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   padding: 20px 0;
 }

 .main .text {
   flex-basis: 100%;
   text-align: center;
   font-size: 24px;
   line-height: 1.5;
   margin-bottom: 1em;
   font-family: Arial, sans-serif;
   color: #000000;
 }

 .main .text strong {
   font-weight: bold;
 }

 .main img {
   flex-basis: 50%;
   max-width: 100%;
   height: auto;
   margin: 20px;
 }

 /* Início do Parallax */

 .parallax {
   height: 300px;
   overflow: hidden;
   position: relative;
 }

 .parallax__background {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-image: url("../assets/img/hotel.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center bottom;
   background-position-y: bottom;
   transform: translate3d(0, 0, 0);
   will-change: transform;
   transition: transform 0.1s ease-out;
   z-index: 1;
 }

 .parallax__overlay {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.2);
   z-index: 2;
   opacity: 0;
   transition: opacity 1s ease-in-out;
 }

 .parallax.is-scrolling .parallax__background {
   transform: translate3d(0, calc(var(--scroll, 0px) / 0.5), 0);
 }

 .parallax.is-scrolling .parallax__overlay {
   opacity: 1;
 }

 /* Final do Parallax */
</style>

