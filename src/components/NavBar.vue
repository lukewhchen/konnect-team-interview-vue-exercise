<template>
  <div class="navbar-container">
    <h1>Services</h1>
    <button>Add New Service</button>
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
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #0A2B66;
  }
}
button {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: none;
  align-items: center;
  color: #FFFFFF;
  width: 145px;
  height: 35px;
  background: #1456CB;
  border-radius: 3px;
}
</style>
