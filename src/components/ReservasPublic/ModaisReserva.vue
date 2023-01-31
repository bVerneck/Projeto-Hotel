<template>
  <div class="modal-container">
    <div class="modal-hospedes">
      <div class="modal-header flex-row">
        <h4>Hóspedes</h4>
        <button class="modal-fechar">X</button>
      </div>
      <div class="modal-body flex-col">
        <div class="modal-adulto flex-row">
          <p class="left">Adultos</p>
          <div class="flex-row">
            <button class="retirar btn-rem-adulto">-</button>
            <p class="entrada-adulto">2</p>
            <button class="adicionar btn-add-adulto">+</button>
          </div>
        </div>
        <div class="modal-crianca flex-row">
          <p class="left">Crianças</p>
          <div class="flex-row">
            <button class="retirar btn-rem-crianca">-</button>
            <p class="entrada-crianca">0</p>
            <button class="adicionar btn-add-crianca">+</button>
          </div>
        </div>
      </div>
      <div class="modal-confirma">
        <button class="btn-reservar btn-modal-ok modal-ok">OK</button>
      </div>
    </div>
  </div>
  <div class="modal-container">
    <div class="modal-adicionais">
      <div class="modal-header flex-row">
        <h4>Adicionais</h4>
        <button class="modal-fechar">X</button>
      </div>
      <div class="modal-body flex-col">
        <div class="flex-row">
          <input type="checkbox" id="academia" name="academia" />
          <div class="flex-row">
            <p class="bold left">Academia</p>
            <p>R$ 30.00/dia</p>
          </div>
        </div>
        <div class="flex-row">
          <input type="checkbox" id="cofre" name="cofre" />
          <div class="flex-row">
            <p class="bold left">Cofre</p>
            <p>R$ 150.00/dia</p>
          </div>
        </div>
        <div class="flex-row">
          <input type="checkbox" id="despertador" name="despertador" />

          <div class="flex-row">
            <p class="bold left">Despertador</p>
            <p>R$ 20.00/dia</p>
          </div>
        </div>
        <div class="flex-row">
          <input type="checkbox" id="estacionamento" name="estacionamento" />
          <div class="flex-row">
            <p class="bold left">Estacionamento</p>
            <p>R$ 25.00/dia</p>
          </div>
        </div>
        <div class="flex-col">
          <div class="flex-row">
            <p class="bold left">Transfer</p>
            <p class="info-adicional left">Tranporte aeroporto-hotel</p>
          </div>
          <div class="flex-row">
            <input
              type="checkbox"
              id="transferChegada"
              name="transferChegada"
            />
            <div class="flex-row">
              <p class="left">Chegada</p>
              <p>R$ 75.00</p>
            </div>
          </div>
          <div class="flex-row">
            <input
              type="checkbox"
              id="transferPartida"
              name="transferPartida"
            />
            <div class="flex-row">
              <p class="left">Partida</p>
              <p>R$ 75.00</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <p>Academia, Cofre, Despertador, Estacionamento, Taxi</p> -->
      <div class="modal-confirma">
        <button class="btn-reservar btn-modal-ok modal-ok">OK</button>
      </div>
    </div>
  </div>
  <div class="modal-container">
    <div class="modal-resumo">
      <div class="modal-header">
        <h4 class="left">Resumo da reserva</h4>
        <button class="modal-fechar">X</button>
      </div>
      <div class="modal-body flex-col">
        <div class="resumo__conteudo flex-col">
          <div class="resumo__conteudo__item flex-row">
            <p class="bold left">Check-in</p>
            <p class="info checkin-showup">qua, 24/05/22</p>
          </div>
          <div class="resumo__conteudo__item flex-row">
            <p class="bold left">Check-out</p>
            <p class="info checkout-showup">sex, 26/05/22</p>
          </div>
        </div>
        <div class="resumo_conteudo_acomodacoes flex-col">
          <p class="bold left">Quarto</p>
          <div class="resumo_conteudo_acomodacoes__wrap flex-row">
            <div class="resumo_conteudo_acomodacoes__itens">
              <ul class="left">
                <li class="quarto-selecionado">Escolha seu quarto</li>
                <li>Noites</li>
                <li>Adultos</li>
                <li>Crianças</li>
              </ul>
            </div>
            <div class="resumo_conteudo_acomodacoes__valores">
              <ul class="right">
                <li class="quarto-selecionado-valor">R$0,00</li>
                <li class="display-noites">2</li>
                <li class="entrada-adulto">2</li>
                <li class="entrada-crianca">0</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resumo_conteudo_adicionais flex-col">
          <p class="bold left">Adicionais</p>
          <div class="resumo_conteudo_adicionais__wrap flex-row">
            <div class="resumo_conteudo_adicionais__itens">
              <ul class="left">
                <li>Academia</li>
                <li>Cofre</li>
                <li>Despertador</li>
                <li>Estacionamento</li>
                <li>Tranfer - Chegada</li>
                <li>Transfer - Partida</li>
              </ul>
            </div>
            <div class="resumo_conteudo_adicionais__valores">
              <ul class="right">
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
        <div class="resumo__total flex-row">
          <p class="bold left">TOTAL:</p>
          <p class="bold display-total">R$0.00</p>
        </div>
        <div class="modal-btn flex-row">
          <button class="modal-btn-limpar limpar-dados">Limpar</button>
          <button class="modal-btn-continuar">Continuar</button>
        </div>
      </div>
      <div class="modal-confirma">
        <button class="btn-reservar btn-modal-ok modal-ok">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaisReserva",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.bold {
  font-weight: bold;
}

li {
  list-style-type: none;
  height: 18px;
}
.flex-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.flex-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.modal-container {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: none;
  justify-content: center;
  align-items: center;
}

.modal-hospedes,
.modal-adicionais,
.modal-resumo {
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 2rem;
  position: relative;
  min-width: 200px;
  max-width: 95%;
  border-radius: 4px;
}

.modal-adicionais p,
.modal-resumo p {
  font-size: 0.8rem;
}
.modal-adicionais li,
.modal-resumo li {
  font-size: 0.8rem;
}

.modal-resumo p,
.modal-resumo li {
  font-size: 0.8rem;
}

.modal-header,
.modal-adulto,
.modal-crianca {
  justify-content: space-between;
}

.modal-header {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.modal-header button {
  background-color: white;
  cursor: pointer;
  border: 0px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
}

.modal-body {
  align-items: center;
  gap: 1rem;
}

.modal-body p:first-child {
  min-width: 80px;
}

.modal-body div {
  justify-content: space-between;
  min-width: 90px;
  gap: 1rem;
}

.modal-body button {
  background-color: #0dadbd;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  height: 25px;
  width: 25px;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
}
.modal-body button.modal-btn-limpar {
  width: fit-content;
  height: fit-content;
  font-weight: normal;
  font-size: 0.9rem;
  color: #000;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}
.modal-body button.modal-btn-continuar {
  width: fit-content;
  height: fit-content;
  font-size: 0.9rem;
  background-color: #670bff;
  color: white;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1rem;
}

.modal-ativo {
  display: flex;
}

.left {
  text-align: left;
  justify-self: left;
  align-self: flex-start;
}

.right {
  text-align: right;
}
.btn-reservar {
  display: block;
  width: fit-content;
  align-self: flex-end;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 2px;
  background-color: #0dadbd;
  color: white;
  font-weight: bold;
}
.btn-reservar:hover {
  cursor: pointer;
}

@media (min-width: 768px) {
  .modal-adicionais p {
    font-size: 0.9rem;
  }
}

@media (min-width: 1025px) {
  .modal-adicionais p {
    font-size: 1rem;
  }

  .resumo_conteudo_acomodacoes__wrap {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
