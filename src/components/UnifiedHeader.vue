<template>
  <header class="header">
    <!-- Logo -->
    <LogoHeader />
    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu" />
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
    <!-- Menu -->
    <nav class="nav">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobreHotel">O Hotel</router-link></li>
        <li><router-link to="/acomodacoes">Acomodações</router-link></li>
        <li><router-link to="/contatos">Contatos</router-link></li>
        <li>
          <BotaoReservar />
        </li>
      </ul>
    </nav>
  </header>
  <!-- End Unified Header -->
</template>

<script>
import BotaoReservar from "@/components/BotaoReservar.vue";
import LogoHeader from "@/components/LogoHeader.vue";
export default {
  name: "UnifiedHeader",
  data() {
    return {};
  },
  components: {
    BotaoReservar,
    LogoHeader,
  },

  mounted() {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.tx-logo');
    const btn = document.querySelector('.btn-rsv');
    const transitionClass = 'transition-active';
    let prevScrollPos = window.pageYOffset;

    header.classList.add(transitionClass);
    logo.classList.add(transitionClass);

    header.style.transition = 'top 0.4s ease-in-out';
    logo.style.transition = 'top 0.4s ease-in-out';

    header.style.willChange = 'top';
    logo.style.willChange = 'top';

    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (currentScrollPos >= 120) {
        header.style.top = isScrollingUp ? '0px' : '-80px';
        logo.style.top = isScrollingUp ? '0px' : '80px';
      }

      prevScrollPos = currentScrollPos;
    });
  }

};

</script>

<style >
/* Theming */
@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap";

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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f9f9f9;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

.menu {
  padding-right: 6rem;
}

.header {
  background-color: #363f3f6b;
  box-shadow: none;
  position: sticky;
  top: 0;
  width: 100%;
  font-family: "Mont", "Garamond";
  text-transform: uppercase;
  z-index: 2;
}

header img {
  display: inline;
}

.nav {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #36383f;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-out;
}

.menu a {
  display: block;
  padding: 30px;
  color: #f9f9f9;
}

.menu a:hover {
  background-color: #85888c;
}

.hamb {
  cursor: pointer;
  float: right;
  padding: 40px 30px;
}

.hamb-line {
  background: #f9f9f9;
  display: block;
  height: 2px;
  position: relative;
  width: 24px;
}

.hamb-line::before {
  background: #f9f9f9;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
  top: 5px;
}

.hamb-line::after {
  background: #f9f9f9;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
  top: -5px;
}

label span {
  padding: 0px 0px;
}

.side-menu {
  display: none;
}

.side-menu:checked~nav {
  max-height: 100%;
}

.side-menu:checked~.hamb .hamb-line {
  background: transparent;
}

.side-menu:checked~.hamb .hamb-line::before {
  transform: rotate(-45deg);
  top: 0;
}

.side-menu:checked~.hamb .hamb-line::after {
  transform: rotate(45deg);
  top: 0;
}

@media (min-width: 800px) {
  .nav {
    margin-right: 6%;
    max-height: none;
    top: 0;
    position: relative;
    float: right;
    width: fit-content;
    background-color: transparent;
  }

  .menu li {
    float: left;
  }

  .menu a:hover {
    background-color: transparent;
    color: #85888c;
  }

  .hamb {
    display: none;
  }
}

@media (min-width: 768px) and (orientation: landscape) {
  .nav {
    margin-right: 3%;
  }

  .nav li {
    height: 95px;
    line-height: 33px;
  }

  .menu a {
    padding: 24px;
  }
}
</style>
