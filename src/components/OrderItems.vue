<template>
  <div>
    <section class="infor">
      <p>{{ enrad.title }}</p>
      <p>{{ enrad.price }} kr</p>
      <p>{{ enrad.amount }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    enrad: Object,
  },
};
</script>

<style scoped>
.infor {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
}
</style>
