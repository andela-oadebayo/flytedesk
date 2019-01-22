<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink flex-wrap mr-6">
        <span class="font-semibold text-xl text-grey-dark tracking-tight fl-school-list">School List</span><br/>
        <span class="font-semibold text-l text-grey-dark tracking-tight">Manage and export data for the school below</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
        </div>
        <div>
          <button @click="showModal('create')" data-toggle="modal" data-target="#exampleModal" class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
            Add new School 
          </button>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    showModal(name) {
      this.$store.dispatch('changeModalType', name);
    }
  }
}
</script>
