<template>
  <section class="home">
    <Header></Header>
    <Footer></Footer>
  </section>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.home {
  background-color: rgb(56, 132, 109);
}
</style>
