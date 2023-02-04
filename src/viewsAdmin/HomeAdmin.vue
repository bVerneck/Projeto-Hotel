<template>

  <head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../styleAdmin/css/home-admin.css">
    <title>Home Admin</title>

  </head>

  <body>

    <div class="container">
      <section class="lateral-menu">
        <div class="lateral-menu-top">
          <div>
            <a href="../pagesAdmin/home-admin.html">
              <img src="@/viewsAdmin/assets/img/logo.png">
            </a>
          </div>
          <div class="foto-perfil">
            <img src="@/viewsAdmin/assets/img/perfil.jpg">
          </div>
          <ul>
            <li class="dashboard">
              <!-- <i data-feather="edit"></i> -->
              <span>Dashboard</span>
            </li>
            <li class="notification">
              <!-- <i data-feather="bell"></i> -->
              <span>Notificações</span>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <div>
              <li class="settings">
                <!-- <i data-feather="settings"></i> -->
                <span>Configurações</span>
              </li>
            </div>
          </ul>
        </div>
      </section>
      <section class="main">
        <div class="navbar">
          <div>
            <ul class="navigation">
              <a href="/admin/pagesAdmin/home-admin.html">
                <li class="navigation-itens">Home</li>
              </a>
              <a href="/admin/pagesAdmin/funcionarios-admin.html">
                <li class="navigation-itens">Funcionários</li>
              </a>
              <a href="/admin/pagesAdmin/hospedes-admin.html">
                <li class="navigation-itens">Hóspedes</li>
              </a>
              <a href="/admin/pagesAdmin/reservas-admin.html">
                <li class="navigation-itens">Reservas</li>
              </a>
              <li class="navigation-itens"><img class="icone-logout" src="@/viewsAdmin/assets/img/icone-logout.png" alt="logo"></li>
            </ul>
          </div>
        </div>
        <div class="content">
          <div class="cards-header">
            <div class="card">
              <div class="card-container">
                <div>
                  <h2>Hóspedes</h2>
                  <p>120</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-container">
                <div>
                  <h2>Quartos Ocupados</h2>
                  <p>50</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-container">
                <div>
                  <h2>Quartos Vagos</h2>
                  <p>30</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-container">
                <div>
                  <h2>Reservas Feitas</h2>
                  <p>20</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cards-header">
            <div class="card-large">
              <div class="card-container">
                <div>
                  <h2>Título</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus?</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-container">
                <div>
                  <h2>Título</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus?</p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </div>

  </body>

</template>

<script>

import { Icon } from '@iconify/vue'

export default {
  name: "HomeAdmin",
  components: {
  
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto Mono", monospace;
}

body {
  background: #fff;
}

a {
  text-align: none;
  color: black;
}

ul {
  list-style: none;
}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.lateral-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #7623FF;
  color: #fff;
  padding: 0 70px 0 70px;
  width: 30vh;
  height: auto;
  font-size: 1.8rem;
}

.lateral-menu-top {
  display: flex;
  flex-direction: column;
}

.lateral-menu-top ul {
  align-items: left;
}

.foto-perfil {
  padding: 40px 0 0 35px;
}

.foto-perfil > img {
  border-radius: 50%;
  width: 180px;
  height: 200px;
  border-style: solid;
  border-color: #F5F5F5;
}

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

.navbar {
  width: 100%;
}

.navigation {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.8rem;
}

.navigation-itens {
  padding: 30px;
}

.icone-logout {
  width: 50px;
  height: 40px;
}

.main {
  display: block;
  flex-direction: column;
  width: 100%;
}

.cards-header {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
}

.card {
  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin: 0 20px;
  height: auto;
}

.card .card-content {
  text-align: center;
}

.card-container {
  text-align: center;
}

.card-large {
  margin: 40px;
  width: 642px;
  height: 450px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
}

.card {
  width: 450px;
  height: auto;
}

.card h2 {
  padding: 15px;
  border-bottom: 1px solid #111;
}

.card p {
  padding: 15px;
}
</style>