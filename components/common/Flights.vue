<template>
  <div>
    <transition-group name="slide" tag="div">
      <CommonFlightCard
        v-for="(flight, index) in filteredFlights"
        :key="index"
        :flight="flight"
      />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      flights: "flights/getFlights",
      selectedAirlines: "flights/getSelectedAirlines",
    }),

    filteredFlights() {
      if (this.selectedAirlines.length) {
        return this.selectedAirlines;
      } else {
        return this.flights;
      }
    },
  },
};
</script>

<style></style>
