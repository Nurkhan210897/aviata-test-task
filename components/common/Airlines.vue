<template>
  <div class="list">
    <div class="list-title">
      <p>{{title}}</p>
    </div>
    <BaseAirlineItem :airlines="airlines" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props:{
    title:{
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(["airlines"]),
  },
};
</script>

<style lang="scss" scoped>
.list {

}
</style>
