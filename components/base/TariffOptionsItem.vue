<template>
  <div>
    <li class="list-item" v-for="(tariff, index) in tariffOptions" :key="index">
      <input
        :id="tariff.rate"
        type="checkbox"
        :value="tariff"
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
export default {
  props: {
    tariffOptions: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    rates: [],
    selectedRate: null
  }),
  methods: {
    filterFlightsByRate(e) {
      if(this.selectedRate == null){
        this.selectedRate = e.value
      }else{
        this.selectedRate = null
      }
      console.log(this.selectedRate);
      this.$store.commit("flights/filterFlightsByRate", { type: e.type, value: this.selectedRate});
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
