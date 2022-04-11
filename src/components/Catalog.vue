<template>
  <div>
    <SearchBar
      @handleSearch="handleSearch"
    ></SearchBar>
    <div class="catalog">
      <KCard
        v-for="service in showServices"
        :key="service.id"
        class="service-card"
      >
        <template slot="title">
          {{ service.name }}
        </template>
        <template slot="body">
          <p class="text-clamp">{{ service.description }}</p>
          <div class="card-versions">
            <div class="circle">{{ service.versions.length }}</div>
            <span>Versions</span>
          </div>
        </template>
      </KCard>
    </div>
    <PaginationBar
      :page="currentPage"
      :itemPerPage="itemPerPage"
      :maxPage="maxPage"
      :totalItem="totalServicesCount"
      @handleClick="handlePaginate"
    >
    </PaginationBar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KCard from '@kongponents/kcard'
import axios from 'axios'
import SearchBar from '@/components/utils/SearchBar.vue'
import PaginationBar from '@/components/PaginationBar.vue'

export default Vue.extend({
  name: 'Catalog',
  components: {
    KCard,
    SearchBar,
    PaginationBar
  },
  data () {
    return {
      services: [],
      searchResult: [],
      hasSearchResult: false,
      currentPage: 1,
      itemPerPage: 12,
    }
  },
  computed: {
    totalServicesCount(){
      if (this.hasSearchResult) return Math.max(this.searchResult.length-1, 0);
      return this.services && Math.max(this.services.length-1, 0); // avoid -1 case
    },
    maxPage(){
      let remainderPage = this.totalServicesCount%this.itemPerPage ? 1 : 0;
      return Math.floor(this.totalServicesCount/this.itemPerPage) + remainderPage
    },
    servicesArray(){
      if (this.hasSearchResult) return this.searchResult;
      return this.services
    },
    showServices(){
      if (!this.servicesArray) return [];
      let start = (this.currentPage-1)*this.itemPerPage;
      let end = Math.min((this.currentPage*this.itemPerPage)-1, this.totalServicesCount);
      return this.servicesArray.slice(start, end+1);
    },
  },
  mounted () {
    // this.fetchServices();
    this.fetchMockServices();
  },
  methods: {
    fetchServices () {
      console.log('fetchServices')
      axios.get('/api/service_packages').then((res) => {
        this.services = res.data
      })
    },
    fetchMockServices(){
      const faker = require('faker')
      let data = { service_packages: [] }

      // Create 1000 users
      for (let i = 0; i < (Math.random() * 100) + 50; i++) {
        data.service_packages.push({
          id: faker.random.uuid(),
          name: faker.commerce.productName(),
          description: faker.hacker.phrase() + faker.company.catchPhrase(),
          // versions: Array(3),
          versions: (() => {
            return [...Array(faker.random.number).keys()].map(() => ({
              id: faker.random.uuid(),
              name: faker.commerce.department(),
              description: faker.random.words()
            }))
          })()
        })
      }
      // console.log({data})
      this.services = data && data.service_packages
    },
    handlePaginate(action){
      if (action === 'back') this.currentPage = Math.max(1, this.currentPage-1);
      if (action === 'forward') this.currentPage = Math.min(this.maxPage, this.currentPage+1);
    },
    handleSearch(val){
      this.hasSearchResult = false;
      let res = this.services.filter(el => {
        const {name, description} = el;
        return this.checkMatch(name, val) || this.checkMatch(description, val)
      })
      this.searchResult = res;
      this.hasSearchResult = true;
      this.currentPage = 1;
    },
    checkMatch(str, target){
      if (!str) return false;
      if (!target) return true;
      return str.toLowerCase().indexOf(target.toLowerCase()) !== -1;
      // NOTE make search case-insensitive
    }
  }
})
</script>

<style lang="scss">
$medium-weight: 600;
$blue-300: #A6C6FF;

// NOTE make sure the last row align properly
.catalog {
  display: grid;
  grid-template-columns: repeat(auto-fill, 214px);
  justify-content: space-between;
}

.service-card {
  width: 181px;
  height: 147px;
  margin-bottom: 32px;
}

.service-card:hover {
  cursor: pointer;
  border: 1px solid $blue-300 !important;
}

.k-card-title {
  text-align: left;
  h4 {
    text-transform: capitalize; // NOTE make sure title always capitalize
    font-weight: $medium-weight !important;
    font-size: 16px !important;
    line-height: 18px;
    color: #1456CB !important;
    // ellipsis
    width: 186.76px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

.k-card-body {
  position: relative;
  text-align: left;
  height: 106px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    color: rgba(0, 0, 0, 0.45);
  }
}

.text-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-versions {
  position: absolute;
  bottom: 0px;
  display: flex;
  font-size: 14px;
  line-height: 16.41px;
  font-weight: $medium-weight;
  span {
    color: rgba(0, 0, 0, 0.7);
  }
}

.circle {
  border: 1px solid #D9E7FF;
  box-sizing: border-box;
  border-radius: 40px;
  padding: 0 10px;
  text-align: center;
  margin-right: 5px;
  color: #1456CB;
}

</style>
