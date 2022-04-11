<template>
  <div id="nav">
    <img src="@/assets/logo-konnect.svg" alt="konnect icon" width="100.65px">
    <div class="nav-actions">
      <img src="@/assets/icon-notification.svg" alt="notification icon" width="20px">
      <img src="@/assets/icon-help.svg" alt="help icon" width="20px">
      <img src="@/assets/icon-user.svg" alt="user icon" width="32px">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavBar',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
})
</script>

<style lang="scss">
  #nav {
    height: 60px;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    img:hover {
      cursor: pointer;
    }
  }

  .nav-actions {
    display: flex;
    justify-content: flex-end;
    img {
      margin: 0 10px;
    }

  }
</style>
