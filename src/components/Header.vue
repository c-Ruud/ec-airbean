<template>
  <header>
    <img src="@/assets/graphics/graphics-header.svg" alt="header" />
    <!--
    <button class="meny">
      <img src="@/assets/graphics/navicon.svg" alt="img" class="img" />
    </button>
    -->
    <div class="hamburgermenu">
      <a
        href="#"
        class="a-tag d-flex flex-column text-decoration-none align-items-center"
      >
        <img src="@/assets/graphics/navicon.svg" alt="img" class="img" />
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.hamburgermenu {
  background-color: rgb(255, 255, 255);
  border-radius: 100% !important;
  width: 45px;
  height: 45px;
  position: absolute;
  margin-left: 15px;
  margin-top: -100px;
}
.img {
  position: absolute;
  margin-left: 10px;
  margin-top: 12px;
}
.a-tag {
  border-radius: 100%;
  width: 35px;
  line-height: 35px;
  background-color: rgb(255, 255, 255);
}
</style>
