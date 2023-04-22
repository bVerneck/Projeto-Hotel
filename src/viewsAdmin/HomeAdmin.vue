<template>

  <head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Admin</title>

  </head>

  <body>

    <main class="page_container">
      <div class="lateral_menu">
  
        <div class="lateral_menuTop">
          <router-link to="/">
            <img src="@/viewsAdmin/assets/img/logo.png">
          </router-link>
          <img class="img_perfil" src="@/viewsAdmin/assets/img/perfil.jpg">
        </div>
  
        <div class="lateral_menuItens">
          <div>
            <ul>
              <li>
                <!-- <i data-feather="edit"></i> -->
                <span>Dashboard</span>
              </li>
              <li>
                <!-- <i data-feather="bell"></i> -->
                <span>Notificações</span>
              </li>
              <li>
                <span>Lorem</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <div>
                <li>
                  <!-- <i data-feather="settings"></i> -->
                  <span>Configurações</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
  
  
      </div>
      <section class="content">
        <nav>
          <ul>
            <li><router-link to="/homeAdmin">Home</router-link></li>
            <li><router-link to="/hospedesAdmin">Hospedes</router-link></li>
            <li><router-link to="/quartosAdmin">Quartos</router-link></li>
            <li><router-link to="/funcionariosAdmin">Funcionarios</router-link></li>
          </ul>
          <ul>
            <li class="icone_logout"><img src="@/viewsAdmin/assets/img/icone-logout.png" alt="logo"></li>
          </ul>
        </nav>
        <div class="cards_header">
          <div class="card">
            <div>
              <h2>Hóspedes</h2>
              <p>120</p>
            </div>
          </div>
          <div  class="card">
            <div>
              <h2>Quartos Ocupados</h2>
              <p>50</p>
            </div>
          </div>
          <div  class="card">
            <div>
              <h2>Quartos Vagos</h2>
              <p>30</p>
            </div>
          </div>
          <div class="card">
            <div>
              <h2>Reservas Feitas</h2>
              <p>20</p>
            </div>
          </div>
        </div>
        <div class="cards_header">
          <div class="card_large">
            <div>
              <h2>Título</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, provident accusantium ipsa dolore nesciunt iure ea hic numquam blanditiis deserunt asperiores eaque magnam sunt distinctio maxime temporibus ad fugiat porro quod quis beatae. Expedita, minus? Molestias quasi deserunt nulla in fugiat illo ad eos alias, esse iure molestiae ut asperiores!</p>
            </div>
          </div>
          <div class="card_large">
            <div>
              <h2>Título</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, provident accusantium ipsa dolore nesciunt iure ea hic numquam blanditiis deserunt asperiores eaque magnam sunt distinctio maxime temporibus ad fugiat porro quod quis beatae. Expedita, minus? Molestias quasi deserunt nulla in fugiat illo ad eos alias, esse iure molestiae ut asperiores!</p>
            </div>
          </div> 
        </div>
      </section>
    </main>

  </body>

</template>

<script>

import { Icon } from '@iconify/vue'
import LoginAdmin from '@/viewsAdmin/LoginAdmin.vue'
export default {
  name: "HomeAdmin",
  components: {
  
  },
  
  meta: {
    requiresPreviousPage: true
  },
  data() {
    return {
      guests: [
        { name: 'João', checkin: '2022-01-01', checkout: '2022-01-03' },
        { name: 'Maria', checkin: '2022-01-05', checkout: '2022-01-10' },
        { name: 'Pedro', checkin: '2022-02-10', checkout: '2022-02-13' }
      ]
    }
  },
  computed: {
    totalGuests() {
      return this.guests.length
    }
  }
}
const routes = [
  { path: '/loginAdmin', component: LoginAdmin },
  { path: '/homeAdmin', component: HomeAdmin, meta: { requiresPreviousPage: true } }
]
export { routes }

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Mono", monospace;
}

body {
  background: #fff;
}

a {
  text-decoration: none;
  color: black;
}

ul {
  list-style: none;
}

.page_container {
  display: flex;
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.lateral_menu {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  background: #7623FF;
  color: #fff;
  width: 350px;
  height: 100%;
  font-size: 1.8rem;
}

.lateral_menuTop {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  padding: 0 10px 25px 10px;
}

.img_perfil {
  border-radius: 50%;
  width: 55%;
  height: 45%;
  border-style: solid;
  border-color: #F5F5F5;
}

.lateral_menuItens {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0 15% 0;
  height: 100%;
}

nav {
  display: flex;
  position: relative;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-size: 1.8rem;
  height: 10vh;
  width: 100%;
}

nav ul {
  display: flex;
}

nav ul li {
  margin: auto 50px;
}

.icone_logout {
  width: 50px;
  height: 40px;
  padding: 0 0 0 10px;
}

.content {
  position: relative;
  width: 100%;
}

.cards_header {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px 0 0 0;
}

.card {
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  height: auto;
  margin: 0 25px;
  padding: 10px;
  text-align: center;
}

.card_large {
  margin: 40px;
  width: 425px;
  height: 400px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.card h2, 
.card_large h2 {
  text-align: center;
  padding: 5px;
  border-bottom: 1px solid #111;
}

.card_large p {
  text-align: justify;
  padding: 10px;
}

/* 

.dashboard {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 25px;
}

.dashboard svg {
  margin-right: 10px;
}

.notification {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-bottom: 50px;
}

.notification svg {
  margin-right: 10px;
}

.settings {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}

.settings svg {
  margin-right: 10px;
}

*/
</style>