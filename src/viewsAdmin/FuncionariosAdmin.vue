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
          <th></th>
        </tr>
        <tr v-for="funcionario of funcionarios" :key="funcionario.id">
          <td>{{ funcionario.nome }}</td>
          <td>{{ funcionario.salario }} </td>
          <td>{{ funcionario.matricula }}</td>
          <td>
            <button @click="editar(funcionario)">Editar</button>
            <button @click="remover(funcionario)">Remover</button>
          </td>
        </tr>
      </table>
    </main>
  </body>
  </html>
</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';
import apiMetodos from '@/services/apiMetodos';

export default {
  name: "funcionariosAdmin",
  components: {
    HeaderAdmin
  },
  data() {
    return {
      funcionario: {
        id:"",
        nome:"",
        matricula:"",
        salario:""
      },
      funcionarios: [],
      errors: []
    }
  },
  mounted() {
    this.listar()
  },
  methods:{
    listar(){
      apiMetodos.listar().then(resposta => {
        this.funcionarios = resposta.data
      }).catch(e => {
        console.log(e);
      })
    },
    salvar(){
      if(!this.funcionario.id){
        apiMetodos.salvar(this.funcionario).then(resposta => {
          this.funcionario = {}
          alert('Cadastrado com sucesso!')
          this.errors = {}
        }).catch(e => {
          this.errors = e.resposta.data.errors
        })
      }else{
        apiMetodos.atualizar(this.funcionario).then(resposta => {
          this.funcionario = {}
          this.errors = {}
          alert('Atualizado com sucesso!')
          this.listar()
        }).catch(e => {
          this.errors = e.resposta.data.errors
        })
      }
    },
    editar(funcionario){
      this.funcionarios = funcionario
    },
    remover(funcionario){
      if(confirm('Deseja excluir o funcionário?')){
        apiMetodos.apagar(funcionario).then(resposta => {
          this.listar()
          this.errors = {}
        }).catch(e => {
          this.errors = e.resposta.data.errors
        })
      }
    }
  }
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



