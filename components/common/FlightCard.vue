<template>
  <div class="flight-card">
    <div class="flight-card-row">
      <div class="w-8">
        <div class="flight-card-row">
          <div class="flight-card-logo">
            <img :src="`https://aviata.kz/static/airline-logos/80x80/${flight.carrier}.png`" alt="">
            <p>{{flight.carrier_name}}</p>
          </div>
          <div class="flight-card-info">
              <div class="flight-card-info_time"></div>
              <div class="flight-card-info_route">
                <span class="line"></span>
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
              </div>
              <div class="flight-card-info_time"></div>
          </div>
        </div>
      </div>
      <div class="w-4"></div>
    </div>

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
