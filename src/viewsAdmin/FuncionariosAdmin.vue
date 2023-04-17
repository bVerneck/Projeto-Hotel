<template>
    <!DOCTYPE html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Tx Hotel-Funcionarios</title>
  </head>

  <body>
    <header>
      <HeaderAdmin />
    </header>
    <main>
      <table>
        <tr>
          <th>Funcionarios</th>
          <th>Informações</th>
          <th>Matricula</th>
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

</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';

export default {
  name: "funcionariosAdmin",
  components: {
    HeaderAdmin
  },
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
  font-size: 1.1em;
}
.cursorClick:hover {
  cursor: pointer;
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



