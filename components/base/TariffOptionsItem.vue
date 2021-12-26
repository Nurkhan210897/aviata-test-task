<template>
  <div>
    <li class="list-item" v-for="(tariff, index) in tariffOptions" :key="index">
      <input
        :id="tariff.name"
        type="checkbox"
        :value="tariff.type"
        v-model="selected"
        @change="filterFlights(tariff.type)"
      />
      <label :for="tariff.name" class="list-item_label text --medium">{{
        tariff.name
      }}</label>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    tariffOptions: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    selected: [],
  }),
  methods: {
    filterFlights(e) {
      console.log(e);
      // this.$store.commit("flights/filterFlights", this.selected);
    },
  },
};
</script>

<style lang="scss">
.list {
  &-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      margin-right: 12px;
      cursor: pointer;
    }
    label {
      cursor: pointer;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
