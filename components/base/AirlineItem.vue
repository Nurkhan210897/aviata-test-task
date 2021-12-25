<template>
  <div class="list-item">
    <BaseCheckbox :id="airline" />
    <label :for="airline" class="list-item_label">{{airline}}</label>
  </div>
</template>

<script>
export default {
  props:{
    airline:{
      type: String,
      default: ''
    }
  }
};
</script>

<style></style>
