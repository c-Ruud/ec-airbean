<template>
  <section class="about">
    <Header></Header>
    <h1 class="heading">Vårt kaffe</h1>
    <p class="ingressa">
      Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds
      dripper, crema, strong whipped, variety extra iced id lungo half and half
      mazagran. Pumpkin spice.
    </p>
    <p class="textabout">
      Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
      aftertaste, con panna milk black, arabica white rich beans single shot
      extra affogato. So affogato macchiato sit extraction instant grinder
      seasonal organic, turkish single shot, single origin, and robusta strong
      to go so dripper. Viennese froth, grounds caramelization skinny aromatic
      cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
      flavour cultivar ut bar instant kopi-luwak.
    </p>
    <p class="textabout">
      Roast id macchiato, single shot siphon mazagran milk fair trade est aroma
      a half and half and, so, galão iced to go, whipped as cream cup pumpkin
      spice iced. At extra, rich grinder, brewed to go, steamed half and half
      at, that, percolator macchiato trifecta and body as arabica dripper. In
      galão black java milk sit trifecta, robusta, acerbic café au lait instant
      shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese
      cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk
      aromatic turkish skinny crema.
    </p>
    <img src="@/assets/graphics/eva-cortado.jpg" class="evapic" />
    <h2 class="hername">Eva Cortado</h2>
    <h3>VD & Grundare</h3>
    <Footer></Footer>
  </section>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "About",
  components: {
    Header,
    Footer,
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
  align-self: start;
  margin-left: 38px;
  margin-bottom: -0.1px;
}
.ingressa {
  text-align: start;
  margin-left: 18px;
  margin-right: 8px;
  padding: 0 20px;
  font-weight: 700;
}
.textabout {
  padding: 0 20px;
  font-weight: 500;
  text-align: start;
  margin-left: 18px;
  margin-right: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: "Work Sans", sans-serif;
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
}
</style>
