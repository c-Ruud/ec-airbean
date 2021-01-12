<template>
  <section class="orderontheway">
    <div class="number">Ordernummer</div>
    <img src="@/assets/graphics/drone.svg" class="drone" />
    <div class="info">
      <span>Din beställning</span><br />
      <span>är på väg!</span>
    </div>
    <!--Här skall eta kopplas från backend-->
    <div class="minu">13 minuter</div>
    <a href="#" class="okcool" v-on:click="$router.push({ path: '/home' })"
      >Ok, cool!</a
    >
  </section>
</template>

<script>
export default {};
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
}
.okcool {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 80px;
  border-radius: 20px;
  color: black;
  font-family: "PT Serif", serif;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
