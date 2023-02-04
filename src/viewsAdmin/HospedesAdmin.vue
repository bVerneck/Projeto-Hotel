<template>
<body>
    <header>
      <HeaderAdmin /> 
    </header>   
        <main>
            <article id="hospedes">
                <h3>Controle de hospedes </h3>
                <form action="" method="post" enctype="multipart/form-data">
                    
                        <legend>Preencha todos os campos</legend>
                        <ul>
                            <li>
                                <label for="nome">Nome</label>
                                <input type="text" id="nome" name="nome" maxlength="30" placeholder="Escreva o nome completo"
                                    size="50" autofocus required />
                            </li>
                            <br />
                            <li>
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" size="50" placeholder="Coloque seu melhor e-mail"
                                    required />
                            </li>
                            <br />
                            <li>
                                <label for="data_niver">Data da entrada</label>
                                <input type="date" name="data_niver" id="data_niver">
                            </li>
                            <br />
                            <li>
                                <label for="data_niver">Data prevista para saída</label>
                                <input type="date" name="data_niver" id="data_niver">
                            </li>
                            <br />
                            <li>
                                <label for="acompanhantes">Acompanhantes</label>
                                <input type="number" id="acompanhantes" name="acompanhantes" min="1" max="10" required />
                            </li>
                            <br />
            
                            <li>
                                <label for="ftHospede">Foto do hóspede</label>
                                <input type="file" id="ftHospede" name="ftHospede" accept="image/png" />
                            </li>
            
                            <br />
                            <li>
                                <label for="data_niver">Data de nascimento</label>
                                <input type="date" name="data_niver" id="data_niver">
                            </li>
                            <!-- <li>
                                    <label for="cor_tema">Cor do tema</label>
                                    <input type="color" name="cor_tema" id="cor_tema" value="#ff00ff">
                                </li> -->
                            <br />
                            <li>
                                <label for="servicos">Serviços adicionais</label><br />
                                <input style="accent-color: red;" type="checkbox" name="servicos" id="musico">Garçom particular
                                <input type="checkbox" name="servicos" id="danca_do_ventre">Motorista 24h
                                <input type="checkbox" name="servicos" id="magico">Cardápio completo
                            </li>
                            <br />
                            <li>
                                <label for="tpAcomodação">Tipo de acomodação</label><br />
                                <input type="radio" name="tpAcomodação" id="tpAcomodação">Premier room
                                <input checked type="radio" name="bolo" id="tpAcomodação">Deluxe Room
                                <input checked type="radio" name="bolo" id="tpAcomodação">T.Ex Premier Room
                            </li>
                            <br />
                            <li>
                                <label for="obs">Observações</label> <br />
                                <textarea name="obs" id="obs" cols="50" rows="10"></textarea>
                            </li>
                            <li>
                                <!-- <input type="image" src="../images/png/btn_bolo.png" alt="Registrar" width="200" /> -->
                                <!-- input type="submit" value="Confirmar o envio" -->
                                <button>Salvar informações</button>
                            </li>
                        </ul>
                    
                </form>
            </article>
            <!-- <article>
                <form oninput="pessoas.value=qtd.value; res.value= `R$ ${parseInt(qtd.value)*50},00`">
                    <label for="">Calcule a quantidade de pessoas/label>
                        <input type="range" name="qtd" id="qtd" min="1" max="10" value="1" />
                        <input type="number" name="pessoas" id="pessoas" max="10" min="1" value="1" />
                        <output name="res" id="res">R$ 50,00</output>
                </form> -->
              </main>
    
</body>

</template>



<script>
import HeaderAdmin from './components/HeaderAdmin.vue';

export default {
    name:"HospedesAdmin",
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
  background-image: url(../assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
}

article {
  width: 50%;
  margin-left: 25%;
  background-color: rgba(240, 248, 255, 0.63);
  /* text-align: center; */
  border-radius: 12px 12px 12px 12px;
  font-family: "Mont";
  color: rgb(14, 102, 209);
  font-weight: bold;
}

h3 {
  text-align: center;
  color: rgb(14, 102, 209);
  text-shadow: 1px 1px 2px black, 0 0 25px rgb(255, 17, 0), 0 0 5px rgb(139, 5, 0);
  text-transform: uppercase;
  font-size: 30px;
}

legend {
  text-align: center;
  color: rgb(14, 102, 209);
  font-weight: bold;
}

input,
textarea {
  border-radius: 4px 4px 4px 4px;
}

/* button{
   background-position: center;
} */
ul {
  margin-left: 5%;
}

div {
  margin-bottom: 10px;
}

li {
  list-style: none;
  /* border-radius: 20px 20px 20px 20px; */
}

button {
  border-radius: 10px;
  margin-left: 270px;
  color: rgb(14, 102, 209);
  /* text-shadow: 1px 1px 2px black, 0 0 25px rgb(255, 17, 0), 0 0 5px rgb(139, 5, 0) */
}

form {
  text-transform: uppercase;
}

.logo {
  margin-left: 195px;
  cursor: pointer;
  width: 220px;
}

/*# sourceMappingURL=hospedes-admin.css.map */

</style>
