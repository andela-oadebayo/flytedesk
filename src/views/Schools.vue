<template>
  <div class="container mx-auto">
    <NavBar />
    <Modal />
    <FilterActions />
    <SchoolTable />
  </div>
</template>

<script>
import SchoolTable from '@/components/school-table.cmp.vue';
import FilterActions from '@/components/filters-action.cmp.vue';
import Modal from '@/components/modal/modal.cmp.vue';
import NavBar from '@/components/nav-bar.cmp.vue';

export default {
  components: {
    SchoolTable,
    FilterActions,
    Modal,
    NavBar,
  },
};
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
  }

  i {
    cursor: pointer;
  }

.table {
  padding: 1.25rem
}
</style>
