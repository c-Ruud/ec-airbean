<template>
  <section class="home">
    <Header></Header>
    <Createprofile></Createprofile>
    <!--<div v-if="loading">
      <img src="@/assets/graphics/loader.png" />
    </div>
     <div v-else> 
    <div v-for="user in users" v-bind:key="user.name">{{ user.name }}</div>
    --><!--<Footer></Footer>-->
  </section>
</template>

<script>
// @ is an alias to /src
//import * as API from "@/api";
import Header from "../components/Header.vue";
import Createprofile from "../components/Createprofile.vue";
//import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Createprofile,
    //Footer,
  },
  /* data() {
    return {
      users: [],
      loading: true,
    };
  },

  async mounted() {
    const users = await API.fetchUsers();
    this.users = users;
    this.loading = false;
  },*/
};
</script>

<style lang="scss">
.home {
  background-color: rgb(47, 41, 38);
}
</style>
