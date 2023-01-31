<template>
  <div class="reservas__container__resumo__holder">
    <div class="resumo__header">
      <h3 class="resumo__titulo">Resumo da reserva</h3>
      <button class="no-desktop"></button>
    </div>
    <div class="resumo__conteudo">
      <div class="resumo__conteudo__item">
        <p class="bold">Check-in</p>
        <p class="info checkin-showup">qua, 24/05/22</p>
      </div>
      <div class="resumo__conteudo__item">
        <p class="bold">Check-out</p>
        <p class="info checkout-showup">sex, 26/05/22</p>
      </div>
      <div class="resumo__conteudo__item">
        <p class="bold">Hospedes</p>
        <p class="info hospedes-resumo">2 adultos, 0 crianças</p>
      </div>
    </div>
    <div class="resumo_conteudo_acomodacoes">
      <p class="bold">Quarto</p>
      <div class="resumo_conteudo_acomodacoes__wrap">
        <div class="resumo_conteudo_acomodacoes__itens">
          <ul>
            <li class="quarto-selecionado">Escolha seu quarto</li>
            <li>Noites</li>
            <li>Adultos</li>
            <li>Crianças</li>
          </ul>
        </div>
        <div class="resumo_conteudo_acomodacoes__valores">
          <ul>
            <li class="quarto-selecionado-valor">R$0,00</li>
            <li class="display-noites">2</li>
            <li class="entrada-adulto">2</li>
            <li class="entrada-crianca">0</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="resumo_conteudo_adicionais">
      <p class="bold">Adicionais</p>
      <div class="resumo_conteudo_adicionais__wrap">
        <div class="resumo_conteudo_adicionais__itens">
          <ul>
            <li>Academia</li>
            <li>Cofre</li>
            <li>Despertador</li>
            <li>Estacionamento</li>
            <li>Tranfer - Chegada</li>
            <li>Transfer - Partida</li>
          </ul>
        </div>
        <div class="resumo_conteudo_adicionais__valores">
          <ul>
            <li class="resumo-adicionais academia">R$0.00</li>
            <li class="resumo-adicionais cofre">R$0.00</li>
            <li class="resumo-adicionais despertador">R$0.00</li>
            <li class="resumo-adicionais estacionamento">R$0.00</li>
            <li class="resumo-adicionais transferChegada">R$0.00</li>
            <li class="resumo-adicionais transferPartida">R$0.00</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="resumo__total">
      <p class="bold">TOTAL:</p>
      <p class="bold display-total">R$0.00</p>
    </div>
    <div class="btn__aside">
      <button class="btn__aside__limpar limpar-dados">Limpar</button>
      <button class="btn__aside__continuar">Continuar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservaResumo",
};

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
  font-size: 0.7rem;
}
.bold {
  font-weight: bold;
}

@media (min-width: 1025px) {
  .no-desktop {
    display: none;
  }
  .reservas__container__resumo__holder {
    width: 268px;
    background-color: #eaecec;
    padding: 1rem;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .resumo__header,
  .resumo__total {
    padding: 0.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  .resumo__conteudo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .resumo_conteudo_adicionais,
  .resumo_conteudo_acomodacoes {
    display: flex;
    flex-direction: column;
  }

  .resumo_conteudo_acomodacoes,
  .resumo_conteudo_adicionais {
    text-align: left;
  }
  .resumo_conteudo_acomodacoes__valores,
  .resumo_conteudo_adicionais__valores {
    text-align: right;
  }
  .resumo__conteudo__item,
  .resumo__total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .resumo_conteudo_adicionais__wrap,
  .resumo_conteudo_acomodacoes__wrap {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 20px;
  }

  .btn__aside {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .btn__aside__limpar {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
  .btn__aside__continuar {
    background-color: #670bff;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-size: 1rem;
  }
}
</style>
