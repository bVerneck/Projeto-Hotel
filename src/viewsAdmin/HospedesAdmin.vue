<template>
<body>
    <header>
      <HeaderAdmin /> 
    </header>   
        <main>
            <article id="hospedes" class="container">
                <h3>Reservar</h3>
                <form action="" method="post" enctype="multipart/form-data">
                    
                    
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
                                <input type="date">
                            </li>
                            <br />
                            <li>
                                <label for="data_niver">Data prevista para saída</label>
                                <input type="date" >
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
                                <input type="date" >
                            </li>
                        
                            <br />
                            <li>
                                <label class="text-label"  for="servicos">Serviços adicionais :</label><br />
                                <input type="checkbox" name="servicos" id="garcom">Garçom particular
                                <input type="checkbox" name="servicos" id="Motorista">Motorista 24h
                                <input type="checkbox" name="servicos" id="cardapio">Cardápio completo
                            </li>
                            <br />
                            <li>
                                <label for="tpAcomodação">Tipo de acomodação :</label><br />
                                <input type="radio" name="tpAcomodação" id="tpAcomodação">Premier room
                                <input checked type="radio"  id="tpAcomodação">Deluxe Room
                                <input checked type="radio"  id="tpAcomodação">T.Ex Premier Room
                            </li>
                            <br />
                            <li>
                                <label for="obs">Observações</label> <br />
                                <textarea name="obs" id="obs" cols="50" rows="10"></textarea>
                            </li>
                            <li class="botton-salvar">
                                <button >Salvar informações</button>
                            </li>
                        </ul>
                    <aside id="summary">
        <h1>Resumo da Reserva</h1>
        <div class="summary-info">
          <p>Apartamento:</p>
          <p>Check-in:</p>
          <p>Check-out:</p>
          <p>Qtd Pessoas:</p>
        </div>
        <button class="summary-book">Continuar</button>
      </aside>
                </form>
                
                
            </article>
        
   
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

/* test de summario */
#summary{
  background-color: #ECEBEE;
  height: 500px;
  width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  float: right;
  
}

#summary div{
  background-color: #D5D8D9;
  padding: 0 1rem;
  height: 300px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#summary h1{
  text-transform: uppercase;
}

.summary-info p{
text-transform: uppercase;
margin: 1.2rem 0;
}

.summary-book{
background-color: #959595;
border: none;
color: aliceblue;
padding: 10px 30px;
font-weight: bold;
font-size: 1.3rem;
text-transform: uppercase;
}

.summary-book:hover{
cursor: pointer;
}

/* fim */

.text-label{
  margin-top: 1000px;
  /* border:solid 2px black; */
}
.container{
margin-top: 20px;
}
.botton-salvar{
padding-top: 20px;
}
body {
 background-color: rgb(194, 191, 191);
  margin: 0;
}

article {
  
  width: 50%;
  margin-left: 25%;
  background-color: #0b30ff36;
  border-radius: 12px 12px 12px 12px;
  font-family: "Mont";
  color: rgb(255, 255, 255);
  font-weight: bold;
}

h3 {
  text-align: center;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  font-size: 30px;
  padding-bottom: 30px;
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
 
}

button {
  border-radius: 10px;
  margin-left: 270px;
  color: rgb(0, 0, 0);
  
}

form {
  text-transform: uppercase;
}

.logo {
  margin-left: 195px;
  cursor: pointer;
  width: 220px;
}
label{
  padding-right: 20px;
}


</style>
