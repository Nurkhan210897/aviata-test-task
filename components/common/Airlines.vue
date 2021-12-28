<template>
  <div class="option-list">
    <BaseOptionListHeader title="Авиакомпании" @clearFilter="clearFilter" />
    <ul>
      <li class="option-list-item" v-for="airline in airlines" :key="airline">
        <input
          :id="airline"
          type="checkbox"
          :value="airline"
          v-model="selected"
          @change="filterFlights(airline)"
        />
        <label :for="airline" class="list-item_label text --medium">{{
          airline
        }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },

  data: () => ({
    selected: ["Все"],
  }),

  computed: {
    ...mapGetters(["airlines"]),
  },

  methods: {
    ...mapMutations({
      filterOut: "flights/filterFlights",
    }),
    filterFlights() {
      this.filterOut(this.selected);
    },
    clearFilter() {
      this.selected = ["Все"];
      this.filterOut(this.selected);
    },
  },

};
</script>
