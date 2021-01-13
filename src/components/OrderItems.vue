<template>
  <div class="hejhopp">
    <div class="infor">
      <div class="entitle">{{ enrad.title }}</div>
      <div>........................</div>
      <span class="arrows">
        <a href="#" class="margins" v-on:click="$emit('add', enrad.id)">
          <img src="@/assets/graphics/arrow-up.svg" class="arrup" />
        </a>
        <div class="enamount">{{ enrad.amount }}</div>
        <a href="#" class="margins" v-on:click="$emit('minus', enrad.id)">
          <img src="@/assets/graphics/arrow-down.svg" class="arrup" />
        </a>
        <a href="#" class="margins" v-on:click="$emit('remove', enrad.id)">
          <img src="@/assets/graphics/close.svg" class="arrup" />
        </a>
      </span>
    </div>
    <div class="enpricediv">
      <div class="enprice">{{ enrad.amount * enrad.price }} kr</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    enrad: Object,
  },
};
</script>

<style scoped>
.infor {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  background-color: white !important;
  margin-left: 20px;
}
.enprice {
  margin-left: 20px;
  margin-bottom: 1px;
}
.enpricediv {
  display: flex;
  flex-direction: row;
}
.hejhopp {
  display: flex;
  flex-direction: column;
  font-size: 0.91rem;
  font-weight: 700;
  font-family: "PT Serif", serif;
}
.arrup {
  height: 8px;
}
.arrows {
  display: flex;
  flex-direction: row;
  margin-left: 8px;
}
.margins {
  margin-left: 2px;
  margin-right: 2px;
}
</style>
