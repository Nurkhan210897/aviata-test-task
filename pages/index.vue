<template>
  <div class="container">
    <div class="row">
      <div class="md-4">
        <CommonTariffOptions />
        <CommonAirlines />
        <p class="clear">Сбросить все фильтры</p>
      </div>
      <div class="md-8">
        <CommonFlights />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clearAllFilters() {
      console.log("clearAllFilters");
    },
  },
  async mounted() {
    this.$store.dispatch("fetchAirlines");
  },
};
</script>

<style lang="scss">
.clear {
  font-size: 12px;
  line-height: 16px;
  color: #7284e4;
  cursor: pointer;
}
</style>
