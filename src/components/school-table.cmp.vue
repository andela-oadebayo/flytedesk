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
          <th scope="row"><input @click="addToStore(value.name)" :checked="selected.includes(value.name)" type="checkbox"/></th>
          <td>{{value.name}}</td>
          <td>{{value.city}}</td>
          <td>{{value.state}}</td>
          <td>{{value.zip}}</td>
          <td><a href="#" @click="showModal('edit', value)" data-toggle="modal" data-target="#exampleModal">Edit</a> | <a href="#" @click="deleteCollege(value.name)">Delete</a></td>
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
    },
  },
  methods: {
    addToStore(name) {
      if (name !== undefined) {
        this.$store.dispatch('addSchoolToSelected', name)
      } else {
        this.$store.dispatch('addAllSchoolToSelected')
      }
    },
    deleteCollege(name) {
      return this.$store.dispatch('removeCollegeFromList', name)
    },
    showModal(name, value) {
      this.$store.dispatch('changeModalType', name);
      this.$store.dispatch('addSchoolToEdit', value);
    },
  },
  created() {
    this.$store.dispatch('getAllColleges')
  }
}
</script>

