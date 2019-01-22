<template>
  <form v-on:submit.prevent>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input v-model="form.name"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">State</label>
    <input v-model="form.state"  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">City</label>
    <input v-model="form.city" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Zip</label>
    <input v-model="form.zip" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip">
  </div>
  <button type="submit" class="btn btn-primary" @click="editSchool">Edit</button>
</form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        state: '',
        city: '',
        zip: '',
      },
    };
  },
  computed: {
    schoolToEdit() {
      return this.$store.getters.getSchoolToEdit;
    },
  },
  methods: {
    editSchool() {
      this.$store.dispatch('editSchool', this.form);
    },
  },
  created() {
    this.form = this.$store.getters.getSchoolToEdit;
  },
};
</script>
