<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{modalType.toUpperCase()}} College</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Create v-if="modalType === 'create'"/>
          <Edit v-if="modalType === 'edit'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Create from './common/create.cmp';
import Edit from './common/edit.cmp';

export default {
  components: {
    Create,
    Edit,
  },

  computed: {
    modalType() {
      return this.$store.getters.getModalType;
    },
  },
};
</script>
