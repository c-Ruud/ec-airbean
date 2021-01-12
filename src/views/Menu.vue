<template>
  <section class="menu">
    <Header></Header>
    <Shoppingbag @showMyorder="showMyorder"></Shoppingbag>
    <Myorder v-bind:visible="myorderVisible"></Myorder>
    <h1 class="heading">Meny</h1>
    <MenuItem
      class="menuitem"
      @addclicked="addclicked(item)"
      :menu="item"
      v-for="item in menu"
      :key="item.id"
    ></MenuItem>
    <Footer class="fot"></Footer>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import MenuItem from "../components/MenuItem.vue";
import Shoppingbag from "../components/Shoppingbag.vue";
import Myorder from "../components/Myorder.vue";

export default {
  name: "Menu",
  components: {
    Header,
    Footer,
    MenuItem,
    Shoppingbag,
    Myorder,
  },
  props: {},
  data() {
    return {
      myorderVisible: false,
    };
  },
  methods: {
    addclicked(wtf) {
      const product = this.$root.orderInfo.find(
        (product) => product.id == wtf.id
      );
      if (product) {
        product.amount += 1;
      } else {
        const order = { ...wtf, amount: 1 };
        this.$root.orderInfo.push(order);
      }
    },
    showMyorder() {
      this.myorderVisible = !this.myorderVisible;
    },
  },
  computed: {
    menu() {
      return this.$root.menu;
    },
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
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.menuitem {
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.fot {
  margin-top: 30px;
}
/*
.ingress {
  font-family: "PT Serif", serif;
  text-align: start;
  margin-left: 2px;
  margin-right: 2px;
  //padding: 0 20px;
  font-weight: 700;
}
.line {
  font-weight: 200;
}
.text {
  font-family: "PT Serif", serif;
  //padding: 0 20px;
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
} */
</style>
