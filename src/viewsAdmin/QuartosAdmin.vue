<template>
  <headerAdmin />
  <div class="principal">
    <h2>{{ editandoQuarto ? 'Editar Quarto' : 'Adicionar Quarto' }}</h2>
    <form @submit.prevent="editandoQuarto ? atualizarQuarto() : adicionarQuarto()">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" v-model="novoQuarto.nome">
      <br>
      <label for="preco">Preço:</label>
      <input type="text" id="preco" v-model="novoQuarto.preco">
      <br>
      <label for="adicionais">Adicionais:</label>
      <input type="text" id="adicionais" v-model="novoQuarto.adicionais">
      <br>
      <label for="tamanho">Tamanho:</label>
      <input type="number" id="tamanho" v-model="novoQuarto.tamanho">
      <br>
      <label for="observacao">Descrição:</label>
      <input type="text" id="observacao" v-model="novoQuarto.observacao">
      <br>
      <label for="foto">Foto:</label>
      <input type="file" id="foto" v-on:change="onFileSelected">

      <br>
      <button type="submit">{{ editandoQuarto ? 'Atualizar' : 'Salvar' }}</button>
      <button type="button" @click="cancelarEdicao()">Cancelar</button>
    </form>
    <h2>Quartos Existentes</h2>
    <table class="quartosSalvos">
      <thead >
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
          <td>{{ quarto.foto }}</td>
          <td>
            <button @click="editarQuarto(index)">Editar</button>
            <button @click="removerQuarto(index)">Remover</button>
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
  box-sizing: border-box;
  margin: 0;
  font-family: "Montserrat";
}


.principal{
  background-color: #0b30ff36;
  text-align: center;
}
.quartosSalvos{
  
  margin: 0 auto;
}
body {
  margin: 0;
    background-color:#95959558;
}



main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 0 0;
}


@media screen and (max-width: 728px) {
}

</style>