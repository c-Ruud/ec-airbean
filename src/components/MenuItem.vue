<template>
  <div class="item" v-on:click="$emit('click')">
    <a href="#" class="add-tag">
      <img src="@/assets/graphics/add.svg" alt="add" class="add" />
    </a>
    <p class="ingress">{{ menu.title }}</p>
    <p class="dottedline">.............</p>
    <p class="ingress">{{ menu.price }} kr</p>
    <p class="text">{{ menu.desc }}</p>
  </div>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    menu: Object,
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.ingress {
  font-family: "PT Serif", serif;
  text-align: start;
  margin-left: 18px;
  margin-right: 8px;
  padding: 0 20px;
  font-weight: 700;
}
.text {
  font-family: "PT Serif", serif;
  padding: 0 20px;
  font-weight: 500;
  text-align: start;
  margin-left: 18px;
  margin-right: 8px;
  font-size: 0.6rem;
}
.add-tag {
  background-color: black;
  border-radius: 100% !important;
  width: 15px;
  height: 15px;
  padding: 0.4rem;
}
</style>
