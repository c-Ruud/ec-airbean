<template>
  <section class="menu">
    <Header></Header>
    <Shoppingbag></Shoppingbag>
    <h1 class="heading">Meny</h1>
    <MenuItem :menu="menu"></MenuItem>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MenuItem from "../components/MenuItem.vue";
import Shoppingbag from "../components/Shoppingbag.vue";

export default {
  name: "Menu",
  components: {
    Header,
    Footer,
    MenuItem,
    Shoppingbag,
  },
  data() {
    return {
      menu: {},
    };
  },
};
</script>
<style lang="scss">
section {
  background-color: rgb(243, 228, 225);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: "PT Serif", serif;
  font-size: 3.4rem;
  display: flex;
  margin-bottom: -0.1px;
  text-align: center;
}
.ingress {
  font-family: "PT Serif", serif;
  text-align: start;
  margin-left: 18px;
  margin-right: 8px;
  padding: 0 20px;
  font-weight: 700;
}
.line {
  font-weight: 200;
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
.evapic {
  border-radius: 100% !important;
  margin-top: 50px;
  margin-bottom: -30px;
}
.hername {
  font-family: "PT Serif", serif;
  font-size: 2.4rem;
  margin-bottom: -15px;
}
h3 {
  margin-bottom: 40px;
}
</style>
