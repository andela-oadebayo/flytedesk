<template>
  <form v-on:submit.prevent="addSchool">
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input v-model="form.name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">State</label>
    <input v-model="form.state" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="State">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">City</label>
    <input v-model="form.city" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Zip</label>
    <input v-model="form.zip" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip">
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
      }
    }
  },
  methods: {
    addSchool() {

    }
  }
  
}
</script>

