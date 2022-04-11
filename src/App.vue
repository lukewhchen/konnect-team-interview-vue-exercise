<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './components/NavBar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    NavBar
  }
})
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  font-size: 1em;
  font-family: inherit;
}

#app {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
