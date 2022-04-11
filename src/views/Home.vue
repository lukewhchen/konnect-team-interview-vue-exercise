<template>
  <div class="page-container">
    <NavBar />
    <Catalog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Catalog from '../components/Catalog.vue'
import NavBar from '../components/NavBar.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Catalog,
    NavBar
  }
})
</script>

<style lang="scss" scoped>
  .page-container {
    padding: 10px 250px;
  }

</style>
