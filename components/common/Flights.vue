<template>
  <div>
    <CommonFlightsCard v-for="(flight, index) in flights" :key="index" :flight="flight"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      flights: "flights/getFlights"
    }),
  },
};
</script>

<style></style>
