<template>
  <router-link to="/"
    ><img src="../../src/assets/img/group.png" alt="TX logo" class="tx-logo"
  /></router-link>
</template>

<script>
export default {
  name: "LogoHeader",
};
</script>

<style scoped>
.tx-logo {
  margin-left: 6rem;
  position: relative;
  width: 8rem;
  margin-left: 7.5%;
}
@media (min-width: 768px) and (orientation: landscape) {
  .tx-logo {
    margin-left: 2.5%;
  }
}
</style>
