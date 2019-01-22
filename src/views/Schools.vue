<template>
  <div class="container mx-auto">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-center flex-no-shrink flex-wrap mr-6">
        <span class="font-semibold text-xl text-grey-dark tracking-tight fl-school-list">School List</span><br/>
        <span class="font-semibold text-l text-grey-dark tracking-tight">Manage and export data for the school below</span>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
        </div>
        <div>
          <button class="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
            Add new School 
          </button>
        </div>
      </div>
    </nav>
    <FilterActions />
    <SchoolTable />
  </div>
</template>

<script>
import SchoolTable from '@/components/school-table.cmp.vue'
import FilterActions from '@/components/filters-action.cmp.vue'
export default {
  components: {
    SchoolTable,
    FilterActions
  }
}
</script>

<style>
  * {
    outline: none
  }
  html {
    background: #fafafa
  }
  html, body, #app, #app > div {
    height: 100%;
  }

  .fl-school-list {
    width: 100%
  }

  .fl-school-filter i {
    padding: 5px;
    border: 2px solid #8795a1;
    border-radius: 3px;
    font-size: 15px;
  }

  .fl-school-filter input {
    border: 2px solid #8795a1;
    height: 44px;
    padding: 15px;
    font-size: 13px;
    display: none;
  }

  i {
    cursor: pointer;
  }

.table {
  padding: 1.25rem
}
</style>
