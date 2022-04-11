<template>
  <div class="page-container">
    <PageTop />
    <Catalog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Catalog from '../components/Catalog.vue'
import PageTop from '../components/PageTop.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Catalog,
    PageTop
  }
})
</script>

<style lang="scss" scoped>
  .page-container {
    padding: 10px 17%;
  }

</style>
