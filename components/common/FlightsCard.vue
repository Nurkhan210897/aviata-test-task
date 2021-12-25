<template>
  <div>
    <pre>{{flight.itineraries[0][0]}}</pre>
  </div>
</template>

<script>
export default {
  props:{
    flight:{
      type: Object,
      default: {}
    }
  }
};
</script>

<style></style>
