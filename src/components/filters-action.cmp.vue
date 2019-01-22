<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-no-shrink flex-wrap mr-6">
      <span class="font-semibold text-xl text-grey-dark tracking-tight fl-school-filter">
        <i @click="showFilter" class="fa fa-filter"></i>
      </span>
      <span class="font-semibold text-xl text-grey-dark tracking-tight fl-school-filter">
        <input @input="filterSchoolList" type="text" v-if="filter === true" v-model="search">
      </span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
      </div>
      <div class="fl-school-filter">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
          {{selected}} selected
        </a>
        <i @click="deleteSelectedColleges()" href="#responsive-header" class="fa fa-trash block lg:inline-block mr-4"></i>
        <i href="#responsive-header" class="fa fa-share block lg:inline-block"></i>  
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FilterActions',
  data() {
    return {
      filter: false,
      search: ''
    }
  },
  methods: {
    showFilter() {
      this.filter = !this.filter
    },
    filterSchoolList() {
      console.log(this.search)
      if (this.search.length >= 3) {
        this.$store.dispatch('filterSchoolList', this.search)
      }
    },

    deleteSelectedColleges() {
      this.$store.dispatch('removeCollegeFromList', this.$store.getters['getSelectedSchools'])
    }
  },
  computed: {
    selected() {
      return this.$store.getters['getSelectedSchools'].length
    }
  },
}
</script>