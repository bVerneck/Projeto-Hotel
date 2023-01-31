<template>
  <ModaisReserva />
  <div class="reservas__container">
    <main class="reservas__container__main">
      <ReservasEntradas />
      <ReservasQuartos />
    </main>
    <aside class="reservas__container__resumo">
      <ReservaResumo />
    </aside>
  </div>
</template>

<script>
import ReservasEntradas from "../components/ReservasPublic/ReservasEntradas.vue";
import ReservasQuartos from "../components/ReservasPublic/ReservasQuartos.vue";
import ReservaResumo from "../components/ReservasPublic/ReservaResumo.vue";
import ModaisReserva from "../components/ReservasPublic/ModaisReserva.vue";

export default {
  name: "TesteTeste",
  components: {
    ReservasEntradas,
    ReservasQuartos,
    ReservaResumo,
    ModaisReserva,
  },
};
</script>

<style scoped>
.reservas__container {
  font-family: Arial, Helvetica, sans-serif;
  color: #14274a;
  padding: 0.3rem;
  margin: 4rem auto;
}
.reservas__container aside {
  display: none;
}

@media (min-width: 1025px) {
  .reservas__container {
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .reservas__container aside {
    display: block;
  }

}
</style>
