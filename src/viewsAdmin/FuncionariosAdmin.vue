<template>
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Tx Hotel-Funcionarios</title>
  </head>

  <body>
    <header>
      <div class="barraRoxaTop">
        <a href="../../index.html"
          ><img src="./assets/img/logo.png" alt="Logo Imagem" class="logo"
        /></a>

        <a href=""
          ><img src="./assets/img/icone-logout.png" class="botaosair" alt=""
        /></a>
        <div class="barraNavegacao">
          <a href="../pagesAdmin/home-admin.html">Home</a>
          <a href="../pagesAdmin/hospedes-admin.html">Hóspedes</a>
          <a href="../pagesAdmin/reservas-admin.html">Reservas</a>
        </div>
      </div>
    </header>
    <main>
      <table class="funcionario">
        <tr>
          <th>Funcionarios</th>
          <th>Informações</th>
          <th class="matri">Matricula</th>
        </tr>
        <tr>
          <td class="cursorClick">Andre Luiz</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Bruno Verneck</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Caio Seixas</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Cristian Roberto</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Igor Fontes</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Luiz Gonzaga</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Nathália Melo</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Raylan Barbosa</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Renor Oliveira</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">Willian Pinheiro</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
        <tr>
          <td class="cursorClick">João Ricardo</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            quod!
          </td>
          <td>xxx-xxx</td>
        </tr>
      </table>
    </main>
  </body>
</html>

</template>

<script>
export default {
  name: "FuncionariosAdmin"
}
</script>



<style>

@charset "UTF-8";
@font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}
body {
  margin: 0;
  background-color: rgb(194, 191, 191);
  font-size: 1.4em;
}

/* CLASSES */
.botaosair {
  width: 37px;
  float: right;
  filter: invert(100%);
}

.barraRoxaTop {
  background-color: #670bff;
  display: block;
}

.logo {
  width: 35%;
  padding-left: 25%;
  cursor: pointer;
}

.cursorClick:hover {
  cursor: pointer;
  color: red;
}

.matricula {
  padding-left: 3px;
}

/* barra de navegação */
.barraNavegacao {
  display: initial;
}
.barraNavegacao a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding-left: 3%;
  font-size: 1.4em;
}
.barraNavegacao a:hover {
  color: red;
}

/* table */
table {
  width: 87%;
  margin-left: 7%;
  margin-top: 1%;
  text-align: center;
}
table td,
table th {
  padding: 1%;
}

/* COR DAS TABELAS */
table tr:nth-of-type(even) {
  background-color: rgba(255, 255, 255, 0.521);
}

table tr:nth-of-type(odd) {
  background-color: #7623FF;
  border-radius: 12px;
}



</style>