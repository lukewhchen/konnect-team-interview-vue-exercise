<template>
  <div class="pagination-container">
    <button @click="handleClick('back')">
      <img
        v-if="this.page !== 1"
        src="@/assets/icon-back-arrow-active.svg"
        alt="back-arrow-active"
        class="hoverable">
      <img
        v-else
        src="@/assets/icon-back-arrow.svg"
        alt="back-arrow">
    </button>
    <p>{{paginationInfo}}</p>
    <button @click="handleClick('forward')">
      <img
        v-if="this.page !== this.maxPage"
        src="@/assets/icon-forward-arrow-active.svg"
        alt="forward-arrow-active"
        class="hoverable">
      <img
        v-else
        src="@/assets/icon-forward-arrow.svg"
        alt="forward-arrow">
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SearchBar',
  components: {
  },
  props: {
    page: {
      type: Number
    },
    itemPerPage: {
      type: Number
    },
    maxPage: {
      type: Number
    },
    totalItem: {
      type: Number
    }
  },
  data () {
    return {
    }
  },
  computed: {
    paginationInfo(){
      let start = (this.page-1)*this.itemPerPage;
      let end = Math.min((this.page*this.itemPerPage)-1, this.totalItem);
      let total = this.totalItem;
      return `${start} - ${end} of ${total}`;
    },
  },
  methods: {
    handleClick(action){
      this.$emit('handleClick', action);
    }
  }
})
</script>

<style lang="scss" scoped>

.pagination-container {
  display: flex;
  justify-content: center;
  p {
    line-height: 44px;
    font-size: 16px;
    text-align: center;
    margin: 0 40px;
    color: rgba(0, 0, 0, 0.45);
    mix-blend-mode: normal;
    opacity: 0.7;
  }
  button {
    border: none;
    background-color: #FFFFFF;
  }
  .hoverable:hover {
    cursor: pointer;
  }
}

</style>
