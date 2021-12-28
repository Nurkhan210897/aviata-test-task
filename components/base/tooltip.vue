<template>
  <div class="tooltip">
    <p>Сбросить выбор</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tooltip {
  border: 1px solid #e1e1e1;
  border-radius: 6px;
  position: absolute;
  width: 122px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  background: #fff;
  transform: translateY(-68px);
  &::after {
    content: "";
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    position: absolute;
    bottom: -7px;
    background-color: #fff;
  }
  p {
    font-size: 12px;
    line-height: 16px;
    color: #202123;
    margin-bottom: 0;
  }
}
</style>
