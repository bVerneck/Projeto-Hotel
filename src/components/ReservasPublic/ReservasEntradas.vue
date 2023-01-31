<template>
  <div class="reservas__entradas">
    <div class="reservas__entradas__itens modal-abrir">
      <p><font-awesome-icon icon="user" /></p>
      <div>
        <p class="bold">Hóspedes</p>
        <p class="hospedes-resumo">2 adultos, 0 crianças</p>
      </div>
      <p><font-awesome-icon icon="sort-desc" /></p>
    </div>
    <div class="reservas__entradas__itens entrada-date">
      <p><font-awesome-icon icon="calendar" /></p>
      <div>
        <p class="bold">Check-in</p>
        <p class="checkin-showup">qua, 24/05/22</p>
      </div>
      <p><font-awesome-icon icon="sort-desc" /></p>
      <input type="date" class="dropdown" name="" id="entrada-checkin" />
    </div>

    <div class="reservas__entradas__itens entrada-date">
      <p><font-awesome-icon icon="calendar" /></p>
      <div>
        <p class="bold">Check-out</p>
        <p class="checkout-showup">sex, 26/05/22</p>
      </div>
      <p><font-awesome-icon icon="sort-desc" /></p>
      <input type="date" class="dropdown" name="" id="entrada-checkout" />
    </div>
    <div class="reservas__entradas__adicionais modal-abrir">
      <p></p>
      <div>
        <p class="bold">Adicionais</p>
        <p class="resumo-adicionais-short">0 itens</p>
        <!-- <p>Academia, Cofre, Despertador, Estacionamento, Taxi</p> -->
      </div>
      <p><font-awesome-icon icon="sort-desc" /></p>
    </div>
    <div class="reservas__entradas__resumo modal-abrir no-desktop">
      <p></p>
      <div>
        <p class="bold">Total</p>
        <p class="display-total">R$1000.00</p>
      </div>
      <p><font-awesome-icon icon="sort-desc" /></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservasEntradas",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
/* @font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
  font-family: "Mont-bold";
  src: url("../assets/fonts/Montserrat-Bold.otf");
  "Mont",
} */
.bold {
  font-weight: bold;
}
.reservas__entradas {
  font-family: Arial, Helvetica, sans-serif;
  color: #14274a;
  padding: 0.3rem;
  margin: 0 auto;
}
.reservas__entradas {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.reservas__entradas__itens,
.reservas__entradas__resumo,
.reservas__entradas__adicionais {
  cursor: pointer;
  padding: 0.3rem;
  border: 1px solid #2b2b2b;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}
.reservas__entradas__itens div,
.reservas__entradas__resumo div,
.reservas__entradas__adicionais div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.reservas__entradas__itens input.dropdown {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}
@media (min-width: 768px) {
  .reservas__entradas {
    flex-direction: row;
    margin-bottom: 1rem;
    justify-content: space-around;
  }
  .reservas__entradas__itens,
  .reservas__entradas__resumo,
  .reservas__entradas__adicionais {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .reservas__entradas__itens div,
  .reservas__entradas__resumo div,
  .reservas__entradas__adicionais div {
    flex-direction: column;
    gap: 2px;
  }
}
@media (min-width: 1025px) {
  .no-desktop {
    display: none;
  }
}
</style>
