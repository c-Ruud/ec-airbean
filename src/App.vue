<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans&display=swap");
#app {
  font-family: "PT Serif", serif;
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
  color: -webkit-link;
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
