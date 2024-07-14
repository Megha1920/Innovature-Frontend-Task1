<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
        <router-link v-if="$store.getters.isAuthenticated" to="/arithmetic">Arithmetic Operations</router-link>
        <button v-if="$store.getters.isAuthenticated" @click="logout">Logout</button>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #42b983;
  padding: 1rem;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav button {
  background: none;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

main {
  padding: 2rem;
}
</style>
