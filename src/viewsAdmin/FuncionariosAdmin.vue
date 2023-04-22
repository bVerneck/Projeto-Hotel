<template>
<headerAdmin />

  <div>
    <h1 class="page-title">Gerenciador de Funcionários</h1>
  
  <div class="employee-table-container">
    <table class="employee-table">
      <thead>
        <tr class="employee-tr">
          <th>Nome</th>
          <th>Informações</th>
          <th>Matricula</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(funcionario, i) in funcionarios">
          <td>{{ funcionario.nome }}</td>
          <td>{{ funcionario.informacoes }}</td>
          <td>{{ funcionario.matricula }}</td>
          <td>
            <button @click="editFuncionario(i)" class="btn-secondary">Editar</button>
            <button @click="deleteFuncionario(i)" class="btn-danger">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="new-employee-container">
    <h2 class="section-title">Novo Funcionário</h2>
    <form @submit.prevent="addFuncionario" class="new-employee-form">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" v-model="novoFuncionario.nome" />
      </div>
      <div class="form-group">
        <label for="matricula">Matricula:</label>
        <input type="text" v-model="novoFuncionario.matricula" />
      </div>
      <div class="form-group">
        <label for="informacoes">Informações:</label>
        <!-- <input type="text" v-model="novoFuncionario.informacoes" /> -->
        <textarea class="text" type="text" v-model="novoFuncionario.informacoes" ></textarea>
      </div>
      
      <button type="submit" class="btn-primary">Adicionar</button>
    </form>
  </div>
  
</div>


    
</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';
import api from '@/services/api.js';

export default {
  name: "FuncionaiosAdmin",
  components: {
    HeaderAdmin
  },
  data() {
    return {
      funcionarios: [
        {
          nome: 'André luiz',
          informacoes: 'Disponível para trabalhar em tempo integral, de segunda a sexta-feira.',
          matricula: '4562-987'
        },
        {
          nome: 'Bruno Verneck',
          informacoes: 'Disponível para trabalhar em meio período, das 8h às 12h.',
          matricula: '725-913'
        },
        {
          nome: 'Cristian Roberto',
          informacoes: 'Disponível para trabalhar em turnos alternados, incluindo fins de semana.',
          matricula: '123-688'
        },
        {
          nome: 'Luiz Gonzaga',
          informacoes: 'Disponível para trabalhar remotamente em tempo integral.',
          matricula: '889-073'
        },
        {
          nome: 'Nathália Melo',
          informacoes: 'Disponível para trabalhar em horário flexível, de acordo com a demanda.',
          matricula: '555-891'
        },
        {
          nome: 'Raylan Barbosa',
          informacoes: 'Disponível para trabalhar em regime de escala, incluindo feriados.',
          matricula: '420-377'
        },
        {
          nome: 'Renor Oliveira',
          informacoes: 'Disponível para trabalhar em horário noturno, das 22h às 6h.',
          matricula: '276-984'
        },
        {
          nome: 'Willian Pinheiro',
          informacoes: 'Disponível para trabalhar em horário comercial, das 9h às 18h.',
          matricula: '678-654'
        },
        {
          nome: 'João Ricador',
          informacoes: 'Disponível para trabalhar em regime de plantão, 24 horas por dia.',
          matricula: '234-567'
        }
      ],
      novoFuncionario: {
        nome: '',
        informacoes: '',
        matricula: ''
      }
    };
  },
  methods: {
    addFuncionario() {
      this.funcionarios.push(this.novoFuncionario);
      this.novoFuncionario = {
        nome: '',
        informacoes: '',
        matricula: ''
      };
    },
    deleteFuncionario(index) {
      if (window.confirm("Tem certeza que deseja excluir esse funcionário?")) {
      this.funcionarios.splice(index, 1);
      }
      
    },
    editFuncionario(index) {
      this.novoFuncionario = { ...this.funcionarios[index] };
      this.deleteFuncionario(index);
    }
  }
};
</script>

<style>
@charset "UTF-8";

@font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}

body {
  margin: 0;
  font-size: 1.1em;
}

.main-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 5%;
}

.page-title {
  margin-top: 1%;
  margin-bottom: 2%;
  font-size: 2em;
}

.new-employee-container {
  width: 34%;
  margin-top: 42px;
  background-color: #dbd9d98b;
  text-align: center;
  padding-bottom:65px;
  
}

.section-title {
  margin-top: 0;
  margin-bottom: 1em;
  font-size: 1.5em;
}

.new-employee-form {
  display: flex;
  flex-direction: column;
  
}

.form-group {
  margin-bottom: 1em;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid #ddd;
}

.btn-primary {
  margin-top: 1em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #670bff;
  color: white;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #690bffd4;
}

.btn-secondary {
  margin-right: 0.5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
  color: black;
  cursor: pointer;
}

.btn-danger {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #da190b;
}

.employee-table-container {
  width: 65%;
  margin-top: 4px;
  float: right;
  
}

.employee-table {
  width: 100%;
  border-collapse: collapse;
}

.employee-table th {
  text-align: left;
  background-color: #dbd9d98b;
  color: rgb(0, 0, 0);
  padding: 10px;
}

.employee-table td {
  border: 1px solid #ddd;
  padding: 10px;
}
.text{
  width: 100%;
  padding: 30px;
}

</style>







