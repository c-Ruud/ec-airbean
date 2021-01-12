<template>
  <section class="home">
    <div class="menu">
      <a href="#" class="a-tag" v-on:click="$router.push({ path: '/' })">
        <img src="@/assets/graphics/close.svg" alt="close" class="img" />
      </a>

      <a href="#" class="menu-tag" v-on:click="$router.push({ path: '/menu' })"
        >Meny</a
      >
      <div class="line"></div>
      <a href="#" class="menu-tag" v-on:click="$router.push({ path: '/about' })"
        >Vårt kaffe</a
      >
      <div class="line"></div>
      <a
        href="#"
        class="menu-tag"
        v-on:click="$router.push({ path: '/profile' })"
        >Min Profil</a
      >
      <div class="line"></div>
      <a
        href="#"
        class="menu-tag"
        v-on:click="$router.push({ path: '/orderontheway' })"
        >Orderstatus</a
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  padding: 20px;
}
.menu {
  background-color: rgb(47, 41, 38);
  margin-bottom: 120px;
  margin-top: 100px;
  padding: 20px;
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
  margin-left: -90px;
  margin-top: -100px;
}
.img {
  margin-top: 12px;
  height: 20px;
}
.menu-tag {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  color: white;
  font-family: "PT Serif", serif;
  font-size: 2rem;
  margin-top: 20px;
}
hr {
  color: white;
}
.line {
  background-color: white;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 30%;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 50px;
}
</style>
