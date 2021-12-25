<template>
  <div class="list">
    <div class="list-title">
      <p>{{title}}</p>
    </div>
    <BaseAirlineItem v-for="airline in airlines" :key="airline" :airline="airline"/>
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
