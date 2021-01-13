<template>
  <div id="app">
    <router-view /><!--
    <div id="nav">
      <router-link to="/intro">Intro</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/orderontheway">Orderontheway</router-link> |
      <router-link to="/myorderpage">Myorderpage</router-link> |
    </div>-->
  </div>
</template>

<style lang="scss">
#app {
  font-family: "PT Serif", serif;
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  max-width: 25.4rem;
  height: 100vh;
  padding: 1rem;
  margin: 0 auto;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

button {
  &:hover {
    color: black;
    cursor: pointer;
  }
}
a:-webkit-any-link {
  cursor: pointer;
  text-decoration: none;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
