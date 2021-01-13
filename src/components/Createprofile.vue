<template>
  <div class="login">
    <img src="@/assets/graphics/small-logo.png" class="small-logo" />
    <h2 class="we">Välkommen till AirBean-familjen!</h2>
    <p class="textinfo">
      Genom att skapa ett konto nedan kan
    </p>
    <p class="textinfo">spara och se din orderhistorik.</p>
    <div class="input">
      Namn
      <input type="text" placeholder="Förnamn Efternamn" />
      Epost
      <input type="text" placeholder="name@mail.com" />
      <input type="radio" value="GDPR ok!" />
    </div>

    <a href="#" class="brew" v-on:click="$router.push({ path: '/menu' })"
      >Brew me a cup!</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  background-color: rgb(243, 228, 225);
  /*display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  margin-top: 400px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  position: absolute;
  height: 20rem;
  width: 20rem;
  /* left: 25%;
  bottom: 32%;
  top: 12%;
  right: 25%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 27px 18px rgba(0, 0, 0, 0.75);
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
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  color: white;
  font-family: "PT Serif", serif;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: none;
}
.input {
  display: flex;
  flex-direction: column;
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
