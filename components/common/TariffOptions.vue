<template>
  <div class="option-list">
    <BaseOptionListHeader title="Авиакомпании" @clearFilter="clearFilter" />
    <li
      class="option-list-item"
      v-for="(tariff, index) in tariffOptions"
      :key="index"
    >
      <input
        :id="tariff.rate"
        type="checkbox"
        :value="tariff.type"
        v-model="rates"
        @change="filterFlightsByRate(tariff)"
      />
      <label :for="tariff.rate" class="list-item_label text --medium">{{
        tariff.rate
      }}</label>
    </li>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    rates: [],
  }),

  computed: {
    ...mapGetters(["tariffOptions"]),
  },

  methods: {
    ...mapMutations({
      filterOut: "flights/filterFlightsByRate"
    }),
    filterFlightsByRate(e) {
      this.filterOut(this.rates);
    },
    clearFilter() {
      this.rates = [];
      this.filterOut(this.rates);
    },
  },
};
</script>
