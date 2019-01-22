<template>
  <form v-on:submit.prevent="addSchool">
    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
      <strong>Please</strong> Fill all the forms!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input v-model="form.name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">State</label>
    <input v-model="form.state" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">City</label>
    <input v-model="form.city" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Zip</label>
    <input v-model="form.zip" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
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
        zip: ''
      },
      error: false,
    };
  },
  methods: {
    addSchool() {
      Object.values(this.form).includes('') ? this.error = !this.error : this.$store.dispatch('createNewSchool', this.form) ;
    }
  }
}
</script>

