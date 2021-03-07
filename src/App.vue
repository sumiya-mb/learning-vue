<template>
  <nav>
    <router-link to="/">
      <div class="navigation__logo">Twitter clone</div>
    </router-link>
    <div class="navigation__user" v-if="user">
      {{ user.username }}
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        username: '_ThisIsFake'
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
