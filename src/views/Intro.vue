<template>
  <section class="intro">
    <aside class="left">
      <img src="@/assets/graphics/intro-graphic-left.svg" alt="aside-left" />
    </aside>
    <img src="@/assets/graphics/airbean-landing.svg" class="logo" />
    <aside class="right">
      <img src="@/assets/graphics/intro-graphic-right.svg" alt="aside-right" />
    </aside>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.intro {
  background-color: rgb(56, 132, 109);
  display: flex;
  flex-direction: row;
}
.left {
  margin-left: -210px;
}
.logo {
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  height: 160px;
}

.right {
  position: absolute;
  margin-left: 14.5rem;
}
</style>
