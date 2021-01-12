<template>
  <section class="home">
    <Header></Header>
    <div class="login">
      <img src="@/assets/graphics/small-logo.png" class="small-logo" />
      <h2 class="we">Välkommen till AirBean-familjen!</h2>
      <p class="textinfo">
        Genom att skapa ett konto nedan kan
      </p>
      <p class="textinfo">spara och se din orderhistorik.</p>
      <!-- här borde det vara en component som visas istället -->
      <a href="#" class="brew">Brew me a cup!</a>
    </div>
    <!--<Footer></Footer>-->
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
//import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    //Footer,
  },
};
</script>

<style lang="scss">
.home {
  background-color: rgb(47, 41, 38);
}
.login {
  background-color: rgb(243, 228, 225);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -40px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.small-logo {
  height: 50px;
}
.brew {
  background-color: black;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 13px;
  padding-right: 13px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
  color: white;
  font-family: "PT Serif", serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: none;
}
.we {
  text-align: center;
  margin-top: 10px;
  font-family: "PT Serif", serif;
  font-size: 2rem;
}
.textinfo {
  font-family: "Work Sans", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1px;
  margin: -1px;
}
</style>
