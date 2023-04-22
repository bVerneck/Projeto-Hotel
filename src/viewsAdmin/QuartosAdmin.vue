<template>
  <headerAdmin />
   <div class="container">
  <h2 class="title">{{ editandoQuarto ? 'Editar Quarto' : 'Adicionar Quarto' }}</h2>
  <form @submit.prevent="editandoQuarto ? atualizarQuarto() : adicionarQuarto()" class="form">
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
      <button type="submit" class="button">{{ editandoQuarto ? 'Atualizar' : 'Salvar' }}</button>
      <button type="button" @click="cancelarEdicao()" class="button button-secondary">Cancelar</button>
    </div>
  </form>

  <h2 class="title">Quartos Existentes</h2>

  <table class="table">
    <thead>
      <tr>
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
      <tr v-for="(quarto, index) in quartos" :key="index">
        <td>{{ quarto.nome }}</td>
        <td>{{ quarto.preco }}</td>
        <td>{{ quarto.adicionais }}</td>
        <td>{{ quarto.tamanho }}</td>
        <td>{{ quarto.observacao }}</td>
        <td><img :src="quarto.foto" alt=""></td>
        <td>
          <button @click="editarQuarto(index)" class="button button-primary">Editar</button>
          <button @click="removerQuarto(index)" class="button button-danger">Remover</button>
        </td>
      </tr>
    </tbody>
  </table>
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
removerQuarto(index) {
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
.container {
  width: 100%;
  padding: 20px;
  display: flex;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}
.form {
display: flex;
flex-direction: column;
margin-bottom: 20px;
}

.form-group {
display: flex;
flex-direction: column;
margin-bottom: 10px;
}

.form-group label {
font-weight: bold;
margin-bottom: 5px;
}

.form-group input,
.form-group select {
padding: 8px;
font-size: 16px;
border-radius: 5px;
border: 1px solid #ccc;
}

.form-buttons {
display: flex;
justify-content: space-between;
align-items: center;
}

.form-buttons button {
padding: 8px;
font-size: 16px;
border-radius: 5px;
border: none;
color: #fff;
background-color: #4CAF50;
cursor: pointer;
}

.form-buttons button[type="button"] {
background-color: #f44336;
}

.table {
border-collapse: collapse;
float: right;
}

.table th,
.table td {
padding: 12px;
text-align: left;
border: 1px solid #ccc;
}

.table th {
background-color: #4CAF50;
color: #fff;
}

.table tr:nth-child(even) {
background-color: #f2f2f2;
}

.table tr:hover {
background-color: #ddd;
}

.photo {
max-width: 200px;
max-height: 200px;
}

.error {
color: red;
margin-top: 5px;
}


</style>