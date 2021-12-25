<template>
  <div class="list-item">
    <div v-for="airline in airlines" :key="airline">
      <input
        :id="airline"
        type="checkbox"
        :value="airline"
        v-model="selected"
        @change="filterFlights(airline)"
      />
      <label :for="airline" class="list-item_label">{{ airline }}</label>
    </div>
    {{selected}}
  </div>
</template>

<script>
export default {
  props: {
    airlines: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    selected: [],
  }),
  methods: {
    filterFlights() {
      this.$store.commit("flights/filterFlights", this.selected);
    },
  },
};
</script>

<style></style>
