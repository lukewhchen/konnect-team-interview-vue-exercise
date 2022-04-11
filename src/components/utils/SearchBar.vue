<template>
  <div class="search-bar">
    <img src="@/assets/icon-search.svg" alt="search icon">
    <input
      v-model="searchInput"
      placeholder="Search"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SearchBar',
  components: {
  },
  data () {
    return {
      searchInput: '',
      timeout: null,
    }
  },
  watch: {
    searchInput (val) {
      this.handleDebounce();
    }
  },
  methods: {
    handleDebounce(){
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.handleSearch, 500);
    },
    handleSearch(){
      this.$emit('handleSearch', this.searchInput);
    }
  }
})
</script>

<style lang="scss" scoped>

.search-bar {
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin: 28px 0 24px 0;
  img {
    position: absolute;
    left: 12px;
    top: 12px;
  }
  input {
    font-size: 16px;
    padding-left: 38px;
    height: 38px;
    width: 215px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 3px;
  }
}

</style>
