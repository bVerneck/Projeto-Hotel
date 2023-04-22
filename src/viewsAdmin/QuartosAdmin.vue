<template>
  <headerAdmin />
  <div class="main-container">
  
  
  <div class="employee-table-container">
   <h2 class="page-title">Quartos Existentes</h2>
  <table class="employee-table">
    <thead>
      <tr tr class="employee-tr">
        <th>Nome</th>
        <th>Preço</th>
        <th>Adicionais</th>
        <th>Tamanho</th>
        <th>Descrição</th>
        <th>Foto</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="quarto in quartos" :key="quarto.id">
        <td>{{ quarto.nome }}</td>
        <td>{{ quarto.preco }}</td>
        <td>{{ quarto.adicionais }}</td>
        <td>{{ quarto.tamanho }}</td>
        <td>{{ quarto.observacao }}</td>
        <td><img :src="quarto.foto" alt="Foto do quarto"></td>
        <td>
          <button type="button" @click="editarQuarto(quarto)" class="btn-secondary">Editar</button>
          <button type="button" @click="excluirQuarto(quarto)" class="btn-danger">Excluir</button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  <div class="new-employee-container">
    <h2 class="section-title">{{ editandoQuarto ? 'Editar Quarto' : 'Adicionar Quarto' }}</h2>
  <form @submit.prevent="editandoQuarto ? atualizarQuarto() : adicionarQuarto()" class="new-employee-form">
    <div class="form-group">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="novoQuarto.nome">
    </div>
    <div class="form-group">
      <label for="preco">Preço:</label>
      <input type="text" id="preco" v-model="novoQuarto.preco">
    </div>
    <div class="form-group">
      <label for="adicionais">Adicionais:</label>
      <input type="text" id="adicionais" v-model="novoQuarto.adicionais">
    </div>
    <div class="form-group">
      <label for="tamanho">Tamanho:</label>
      <input type="number" id="tamanho" v-model="novoQuarto.tamanho">
    </div>
    <div class="form-group">
      <label for="observacao">Descrição:</label>
      <input type="text" id="observacao" v-model="novoQuarto.observacao">
    </div>
    <div class="form-group">
      <label for="foto">Foto:</label>
      <input type="file" id="foto" v-on:change="onFileSelected">
    </div>

    <div class="form-buttons">
      <button type="submit" class="btn-primary">{{ editandoQuarto ? 'Atualizar' : 'Salvar' }}</button>
      <button type="button" @click="cancelarEdicao()" class="btn-secondary">Cancelar</button>
    </div>
  </form>

  </div>
</div>



</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';

export default {
  name: "QuartosAdmin",
  components: {
    HeaderAdmin
  },
    data() {
    return {
      quartos: [],
      novoQuarto: {
        nome: '',
        preco: '',
        adicionais: '',
        tamanho: '',
        observacao: '',
        foto: ''
        
      },
      editandoQuarto: false,
      editandoQuartoIndex: null,
      quartos: [
      {
        nome: 'Premier Room',
        preco: '950.00',
        adicionais: 'Janelas anti-ruído, Controle por voz',
        tamanho: '30',
        observacao: 'Estes quartos aconchegantes oferecem conforto.',
        foto: 'premierRoom.jpg'
      },
      {
        nome: 'Deluxe Room',
        preco: '1425.00',
        adicionais: 'Janelas anti-ruído, Controle por voz',
        tamanho: '50',
        observacao: 'Estes quartos aconchegantes oferecem conforto.',
        foto: 'deluxeRoom.jpg'
      },
      {
        nome: 'T.EX Premier',
        preco: '2230.00',
        adicionais: 'Janelas anti-ruído, Controle por voz',
        tamanho: '75',
        observacao: 'Estes quartos aconchegantes oferecem conforto.',
        foto: 'texpremier.jpg'
      }
      ]
    }
  },
  methods: {
     onFileSelected(event) {
    this.novoQuarto.foto = event.target.files[0];
  },
    adicionarQuarto() {
      this.quartos.push(this.novoQuarto);
      this.novoQuarto = {
        nome: '',
        preco: '',
        adicionais: '',
        tamanho: '',
        observacao: '',
        foto: ''
      };
    },
    editarQuarto(index) {
      this.novoQuarto = Object.assign({}, this.quartos[index]); 
      this.editandoQuarto = true;
this.editandoQuartoIndex = index;
},
atualizarQuarto() {
Object.assign(this.quartos[this.editandoQuartoIndex], this.novoQuarto);
this.cancelarEdicao();
},
excluirQuarto(index) {
if (confirm('Tem certeza que deseja remover este quarto?')) {
this.quartos.splice(index, 1);
}
},
cancelarEdicao() {
this.novoQuarto = {
nome: '',
preco: '',
adicionais: '',
tamanho: '',
observacao: '',
foto: ''
};
this.editandoQuarto = false;
this.editandoQuartoIndex = null;
}
}
}
</script>

<style scoped>
@font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}

body {
  margin: 0;
  font-size: 1.1em;
}
.page-title{
  margin-bottom: 10px;
  text-align: center;
}
.employee-table-container {
  width: 65%;
  margin-top: 4px;
  float: right;
  
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
.new-employee-container {
  width: 34%;
  margin-top: 42px;
  background-color: #dbd9d98b;
  text-align: center;
  padding-bottom:5px;
  
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
</style>
