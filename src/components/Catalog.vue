<template>
  <div>
    <div class="search-bar">
      <img src="@/assets/icon-search.svg" alt="konnect icon">
      <input
        v-model="searchTerm"
        placeholder="Search"
      >
    </div>
    <div class="catalog">
      <KCard
        v-for="service in services"
        :key="service.id"
        class="service-card"
        :hasHover="true"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import KCard from '@kongponents/kcard'
import axios from 'axios'
export default Vue.extend({
  name: 'Catalog',
  components: {
    KCard
  },
  data () {
    return {
      services: [],
      filteredServices: [],
      searchTerm: ''
    }
  },
  watch: {
    searchTerm (val) {
      console.log(val)
    }
  },
  mounted () {
    // this.fetchServices();
    this.fetchFakeServices();
  },
  methods: {
    fetchServices () {
      console.log('fetchServices')
      axios.get('/api/service_packages').then((res) => {
        this.services = res.data
      })
    },
    fetchFakeServices(){
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
      console.log({data})
      this.services = data && data.service_packages
    }
  }
})
</script>

<style lang="scss">
$medium-weight: 600;

.search-bar {
  position: relative;
  display: flex;
  justify-content: flex-start;
  img {
    position: absolute;
    left: 12px;
    top: 12px;
  }
  input {
    font-size: 16px;
    padding-left: 38px;
    height: 38px;
    width: 241px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    border-radius: 3px;
  }
}

.catalog {
  display: flex;
  flex-wrap: wrap;
}

.service-card {
  width: 214.68px;
  height: 181px;
  margin: 10px; // TODO check ratio
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
  height: 140px; //NOTE check card ratio
  // background-color: pink;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    color: rgba(0, 0, 0, 0.45);
  }
  // p::first-letter {
  //   text-transform: uppercase; // NOTE make sure the first letter of info always uppercase
  // }
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
  // border: 1px solid;
  display: flex;
  font-size: 14px;
  line-height: 16.41px; // TODO use variable
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
