<template>
  <div class="myorder" v-bind:class="{ visible: visible }">
    <div class="rubrik">Din beställning</div>
    <div>
      {{}}
    </div>
    <!--<OrderItems></OrderItems>
         <select
      name="amount"
      class="select-amount"
      v-model="myOrder.amount"
      @change="$emit('newOrderEx', myOrder)"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
    </select> -->
    <div class="ingress">Total</div>
    <div><!--Här skall uträkning finnas--></div>
    <div class="text">inkl moms + drönarleverans</div>
    <a href="#" class="pay">Take my money!</a>
  </div>
</template>

<script>
//v-on:click="orderCompleted"
//import OrderItems from "../components/OrderItems.vue";
export default {
  components: {
    //  OrderItems,
  },
  props: {
    visible: Boolean,
  },
};
</script>

<style scoped>
.myorder {
  background-color: white;
  position: fixed;
  /*height: 31rem;
  width: 20rem; */
  left: 25%;
  bottom: 32%;
  top: 12%;
  right: 25%;
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
  align-self: flex-start;
}
.text {
  font-family: "PT Serif", serif;
  padding: 0 20px;
  font-weight: 500;
  text-align: start;
  margin-left: 18px;
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
</style>
