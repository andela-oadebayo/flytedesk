<template>
  <table class="table table-hover p-6">
      <thead class="thead-dark" >
        <tr>
          <th scope="col"><input @click="addToStore()" type="checkbox"/></th>
          <th scope="col">School Name</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">ZipCode</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="status">
        <tr v-for="(value, index) in colleges" :key="index">
          <th scope="row"><input @click="addToStore(value.zip)" :checked="selected.includes(value.zip)" type="checkbox"/></th>
          <td>{{value.name}}</td>
          <td>{{value.city}}</td>
          <td>{{value.state}}</td>
          <td>{{value.zip}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: 'SchoolTable',
  computed: {
    status() {
      return this.$store.getters['getApiStatus']
    },
    colleges() {
      return this.$store.getters['getAllColleges']
    },
    selected() {
      return this.$store.getters['getSelectedSchools']
    }
  },
  methods: {
    addToStore(zip) {
      if (zip !== undefined) {
        this.$store.dispatch('addSchoolToSelected', zip)
      } else {
        this.$store.dispatch('addAllSchoolToSelected')
      }
    }
  },
  created() {
    this.$store.dispatch('getAllColleges')
  }
}
</script>

