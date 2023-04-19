<template>
  <HeaderAdmin />
<main>
  <article id="hospedes" class="container">
    <h3>Reserva Manual</h3>
    <form action="" method="post" enctype="multipart/form-data">
      <ul>
        <li>
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" maxlength="30" placeholder="Escreva o nome completo"
            size="50" autofocus required />
        </li>
        <li>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" size="50" placeholder="Coloque seu melhor e-mail"
            required />
        </li>
        <li>
          <label for="data_entrada">Data da entrada</label>
          <input type="date" id="data_entrada" name="data_entrada" required>
        </li>
        <li>
          <label for="data_saida">Data prevista para saída</label>
          <input type="date" id="data_saida" name="data_saida" required>
        </li>
        <li>
          <label for="acompanhantes">Acompanhantes</label>
          <input type="number" id="acompanhantes" name="acompanhantes" min="1" max="10" required />
        </li>
        <li>
          <label for="data_nascimento">Data de nascimento</label>
          <input type="date" id="data_nascimento" name="data_nascimento" required>
        </li>
        <li>
          <label class="text-label" for="servicos">Serviços adicionais :</label><br />
          <input type="checkbox" name="servicos" id="garcom">Garçom particular
          <input type="checkbox" name="servicos" id="motorista">Motorista 24h
          <input type="checkbox" name="servicos" id="cardapio">Cardápio completo
        </li>
        <li>
          <label for="tpAcomodacao">Tipo de acomodação :</label><br />
          <input type="radio" name="tpAcomodacao" id="premier_room">Premier room
          <input type="radio" name="tpAcomodacao" id="deluxe_room" checked>Deluxe Room
          <input type="radio" name="tpAcomodacao" id="t_ex_premier_room">T.Ex Premier Room
        </li>
        <li>
          <label for="obs">Observações</label> <br />
          <textarea name="obs" id="obs" cols="50" rows="10"></textarea>
        </li>
        <li class="botton-salvar">
          <button>Salvar informações</button>
        </li>
      </ul>
    </form>
  </article>
</main>

</template>



<script>
import HeaderAdmin from './components/HeaderAdmin.vue';

export default {
    name:"ReservaAdmin",
    components: {
    HeaderAdmin
  },
}
</script>

<style scoped>
   @font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}

body {
 background-color: rgb(194, 191, 191);
  margin: 0;
}
h3 {
  text-align: center;
  color: rgb(39, 38, 38);
  text-transform: uppercase;
  font-size: 30px;
  padding-bottom: 30px;
}

input,
textarea {
  border-radius: 4px 4px 4px 4px;
}


ul {
  margin-left: 35%;
  
}

div {
  margin-bottom: 10px;
}

li {
  list-style: none;
  padding-bottom:15px; 
 
}

form {
  text-transform: uppercase;
}

label{
  padding-right: 20px;
}

.botton-salvar{
padding-top: 20px;
}

.logo {
  margin-left: 195px;
  cursor: pointer;
  width: 220px;
}
.container {
  width: 90%;
  margin-left: 5%;
  background-color: #0b30ff36;
  border-radius: 12px 12px 12px 12px;
  font-family: "Mont";
  color: rgb(39, 38, 38);
  font-weight: bold;
}
.text-label{
  margin-top: 1000px;

}
</style>
