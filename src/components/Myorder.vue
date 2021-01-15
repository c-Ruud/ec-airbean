<template>
  <div class="myorder" v-bind:class="{ visible: visible }">
    <div class="rubrik">Din beställning</div>
    <OrderItems
      class="orderItems"
      v-for="enrad in orderItems"
      v-bind:enrad="enrad"
      :key="enrad.id"
      @add="addtoOrder(enrad)"
      @minus="deletefromOrder(enrad)"
      @remove="removefromOrder(enrad)"
    ></OrderItems>
    <div class="total">
      <div class="ingress">
        Total: .................. <span>{{ $root.total }} kr</span>
      </div>
    </div>
    <div class="text">inkl moms + drönarleverans</div>

    <router-link to="/orderontheway"
      ><a href="#" class="pay" v-on:click="$emit('getData')"
        >Take my money!</a
      ></router-link
    >
  </div>
</template>

<script>
import OrderItems from "../components/OrderItems.vue";
export default {
  components: {
    OrderItems,
  },
  data() {
    return {};
  },
  props: {
    visible: Boolean,
  },
  computed: {
    orderItems() {
      return this.$root.orderInfo;
    },
  },
  methods: {
    addtoOrder(kaffet) {
      let kaffetillorder = this.orderItems.find(
        (kaffetillorder) => kaffetillorder.id === kaffet.id
      );
      kaffetillorder.amount++;
      this.$root.total = this.$root.total + kaffet.price;
    },
    deletefromOrder(kaffet) {
      let kaffetillorder = this.orderItems.find(
        (kaffetillorder) => kaffetillorder.id === kaffet.id
      );
      if (kaffetillorder.amount >= 1) {
        kaffetillorder.amount--;
        this.$root.total = this.$root.total - kaffet.price;
      } else {
        kaffetillorder.amount = 0;
      }
    },
/*     removefromOrder(kaffet) {
      this.$root.orderInfo.splice(kaffet, 1);
      this.$root.total = this.$root.total - kaffet.price * kaffet.amount;
    }, */
    removefromOrder(kaffet) {
      this.$root.orderInfo = this.$root.orderInfo.filter(kaffetillorder => kaffetillorder.id != kaffet.id);
      this.$root.total = this.$root.total - kaffet.price * kaffet.amount;
    },
  },
};
</script>

<style scoped>
.myorder {
  background-color: white;
  position: absolute;
  height: 31rem;
  width: 20rem;
  /* left: 25%;
  bottom: 32%;
  top: 12%;
  right: 25%; */
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 27px 18px rgba(0, 0, 0, 0.75);
}
.visible {
  display: flex;
}
.rubrik {
  color: black;
  font-family: "PT Serif", serif;
  font-size: 2rem;
  letter-spacing: 1.2px;
  text-align: center;
  font-weight: 700;
  margin-top: 50px;
  margin-bottom: 20px;
}
.ingress {
  font-family: "PT Serif", serif;
  text-align: start;
  margin-left: 18px;
  margin-right: 8px;
  padding: 0 20px;
  font-weight: 700;
  align-self: start;
  margin-top: 20px;
}
.text {
  font-family: "PT Serif", serif;
  padding: 0 20px;
  font-weight: 500;
  text-align: start;
  margin-left: 40px;
  margin-right: 8px;
  font-size: 0.6rem;
  align-self: start;
  margin-bottom: 30px;
}
.pay {
  color: rgb(255, 255, 255);
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 20px;
  background-color: black;
  font-family: "PT Serif", serif;
  font-size: 1.2rem;
  font-weight: 700;
}
.orderItems {
  padding: 2px;
  display: flex;
  align-self: start;
  margin-left: 30px;
}
.total {
  display: flex;
  flex-direction: row;
  align-self: start;
  margin-left: 18px;
}
</style>
