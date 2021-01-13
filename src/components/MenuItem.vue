<template>
  <div class="item">
    <div class="items">
      <a href="#" class="add-tag" v-on:click="$emit('addclicked')">
        <img src="@/assets/graphics/add.svg" alt="add" class="add" />
      </a>
      <p class="ingress">{{ menu.title }}</p>
      <p class="dottedline">....................</p>
      <p class="ingress">{{ menu.price }} kr</p>
    </div>
    <p class="texten">{{ menu.desc }}</p>
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
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.ingress {
  font-family: "PT Serif", serif;
  text-align: start;
  margin-left: 8px;
  margin-right: 2px;
  padding: 0 2px;
  font-weight: 700;
}
.texten {
  font-family: "PT Serif", serif;
  padding: 0 2px;
  font-weight: 500;
  text-align: start;
  margin-top: -16px;
  margin-left: 38px;
  margin-right: 8px;
  font-size: 0.6rem;
}
.add-tag {
  background-color: black;
  border-radius: 100% !important;
  width: 15px;
  height: 15px;
  padding: 0.4rem;
  margin-top: 14px;
}
</style>
