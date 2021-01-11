<template>
  <div class="menu">
    <a href="#" class="a-tag">
      <img src="@/assets/graphics/close.svg" alt="close" class="img" />
    </a>

    <a href="#" class="menu-tag" v-on:click="$router.push({ path: '/menu' })"
      >Meny</a
    >
    <hr />
    <a href="#" class="menu-tag" v-on:click="$router.push({ path: '/about' })"
      >Vårt kaffe</a
    >
    <hr />
    <div class="line"></div>
    <a href="#" class="menu-tag">Min Profil</a>
    <hr />
    <a href="#" class="menu-tag">Orderstatus</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
  background-color: rgb(47, 41, 38);
}
.a-tag {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  background-color: white;
  background-color: rgb(255, 255, 255);
  border-radius: 100% !important;
  width: 45px;
  height: 45px;
  position: absolute;
  margin-left: 15px;
  margin-top: -100px;
}
.menu-tag {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  color: white;
  font-family: "PT Serif", serif;
  font-size: 3.4rem;
  margin-top: 50px;
}
hr {
  color: white;
}
.line {
  background-color: white;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 10%;
  height: 2px;
}
</style>
