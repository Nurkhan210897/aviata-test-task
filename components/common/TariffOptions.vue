<template>
  <div class="list">
    <div class="list-title">
      <p>{{ title }}</p>
    </div>
    <BaseTariffOptionsItem :tariffOptions="tariffOptions" v-if="tariffOptions" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(["tariffOptions"]),
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 12px 12px 16px;
  background-color: #f5f5f5;
  margin-right: 20px;
  border-radius: 4px;
  &-title {
    margin-bottom: 26px;
    p {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
