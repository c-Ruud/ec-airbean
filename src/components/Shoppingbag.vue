<template>
  <div class="shopping">
    <a
      v-on:click="$emit('showMyorder')"
      href="#"
      class="a-tag d-flex flex-column text-decoration-none align-items-center"
    >
      <img src="@/assets/graphics/bag.svg" alt="img" class="img" />
      <div class="badge">{{ cartnumber.length }}</div>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    cartnumber() {
      return this.$root.orderInfo;
    },
  },
};
</script>

<style scoped>
.shopping {
  background-color: black;
  border-radius: 100% !important;
  width: 55px;
  height: 55px;
  position: absolute;
  margin-top: -550px;
  margin-right: -280px;
}
.img {
  position: absolute;
  margin-top: 16px;
  margin-left: 20px;
}
.a-tag {
  border-radius: 100%;
  width: 35px;
  line-height: 35px;
  background-color: rgb(255, 255, 255);
}
.badge {
  border-radius: 100%;
  box-shadow: 0.15rem 0.15rem 0 rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  height: 9px;
  position: relative;
  margin-left: 40px;

  margin-top: -2px;
  background-color: rgb(229, 103, 78);
}
</style>
