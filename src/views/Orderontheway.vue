<template>
  <section class="orderontheway">
    <Loading v-model="loading" v-if="loading"></Loading>
    <div class="number">Ordernummer {{ orderNr }}</div>
    <img src="@/assets/graphics/drone.svg" class="drone" />
    <div class="info">
      <span>Din beställning</span><br />
      <span>är på väg!</span>
    </div>

    <Loading v-model="loading" v-if="loading"></Loading>
    <div class="minu">{{ eta }} minuter</div>
    <a href="#" class="okcool" v-on:click="getData">Ge mig Min Data</a>
    <a href="#" class="okcool" v-on:click="$router.push({ path: '/home' })"
      >Ok, cool!</a
    >
  </section>
</template>

<script>
import { generateOrderNr, generateETA } from "@/backend/utils/utils.js";
import Loading from "../components/Loading.vue";
export default {
  components: { Loading },
  data() {
    return {
      loading: true,
      orderNr: "",
      eta: 0,
    };
  },
  methods: {
    getData() {
      this.orderNr = generateOrderNr();
      this.eta = generateETA();
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = false;
  },
};
</script>

<style scoped>
.orderontheway {
  background-color: rgb(229, 103, 78);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.number {
  color: rgb(247, 210, 202);
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 500;
  margin-top: 50px;
  margin-bottom: 50px;
}
.info {
  color: rgb(255, 255, 255);
  font-family: "PT Serif", serif;
  font-size: 2.2rem;
  letter-spacing: 1.2px;
  text-align: center;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 20px;
}
.minu {
  color: rgb(255, 255, 255);
  font-family: "PT Serif", serif;
  font-size: 1rem;
  letter-spacing: 1.2px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 40px;
}
.okcool {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  color: black;
  font-family: "PT Serif", serif;
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
}
</style>
