<template>
  <div class="container">
    <div class="row">
      <div class="md-4">
        <CommonTariffOptions title="Опции тарифа" />
        <CommonAirlines title="Авиакомпании" />
      </div>
      <div class="md-8">
        <CommonFlights />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    this.$store.dispatch("fetchAirlines");
  },
};
</script>

<style lang="scss">
.row {
  display: flex;
}
.md-4 {
  width: 100%;
  max-width: 240px;
}
.md-8 {
  width: 100%;
  max-width: 880px;
}
</style>
