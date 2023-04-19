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
    <HeaderAdmin />
  </header>
    <main>
      <table>
        <tr>
          <th>Funcionarios</th>
          <th>Informações</th>
          <th>Matricula</th>
        </tr>
        <tr v-for="(funcionario, i) in funcionarios" :key="i">
          <td class="cursorClick">{{ funcionario.nome }}</td>
          <td>{{ funcionario.salario }} </td>
          <td>{{ funcionario.matricula }}</td>
        </tr>
      </table>
    </main>
  </body>
  </html>
</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';
import api from '@/services/api.js';

export default {
  name: "funcionariosAdmin",
  components: {
    HeaderAdmin
  },
  data() {
    return {
      funcionarios: []
    };
  },
  mounted() {
    api.get('/funcionarios').then(response => {
      this.funcionarios = response.data;
      console.log(response.data);
    })
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



