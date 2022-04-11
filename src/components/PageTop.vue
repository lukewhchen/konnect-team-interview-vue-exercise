<template>
  <div class="pageTop-container">
    <div class="pt-left">
      <h1>Services</h1>
    </div>
    <div class="pt-right">
      <button @click="handleAdd">Add New Service</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PageTop',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    handleAdd(){
      alert('Open Add New Service Modal')
    }
  }
})
</script>

<style lang="scss">
.pageTop-container {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}

.pt-left {
  width: 215px;
  text-align: left;
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    color: #0A2B66;
  }
}

.pt-right {
  width: 215px;
  display: flex;
  justify-content: flex-end;
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    border: none;
    align-items: center;
    color: #FFFFFF;
    width: 145px;
    height: 35px;
    background: #1456CB;
    border-radius: 3px;
  }
  button:hover{
    cursor: pointer;
  }
}

@media screen and (max-width: 700px) {
  .pageTop-container {
    margin-top: 10px;
    flex-direction: column;
    justify-content: space-around;
  }
  .pt-right {
    justify-content: flex-start;
  }
}

</style>
