<template>
  <div class="myorder">
    <div class="rubrik">Din beställning</div>
    <OrderItems></OrderItems>
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
    </select>
    <div class="ingress">Total</div>
    <div><!--Här skall uträkning finnas--></div>
    <div class="text">inkl moms + drönarleverans</div>
    <a href="#" class="pay">Take my money!</a>
  </div>
</template>

<script>
import OrderItems from "../components/OrderItems.vue";
export default {
  components: {
    OrderItems,
  },
};
</script>

<style scoped>
.myorder {
  background-color: white;
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
.pay {
  color: rgb(255, 255, 255);
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 80px;
  border-radius: 20px;
  background-color: black;
  font-family: "PT Serif", serif;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
