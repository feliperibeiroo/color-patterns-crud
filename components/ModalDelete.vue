<template>
  <b-modal 
    id="modal-2"
    v-model="visible"
    size="sm"
    centered
    hide-footer
    hide-header
    >
    <div class="container d-flex justify-content-center align-items-center flex-column">
      <div>
        <div class="my-3"><strong>Are You Sure?</strong></div>
      </div>
      <div>
        <b-button @click.prevent="deletePattern" class="mr-3" variant="primary">Yes</b-button>
        <b-button @click.prevent="hide" variant="danger">No</b-button>
      </div>
    </div>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      visible: false,
      idColor: undefined as number|undefined
    }
  },
  beforeMount() {
    this.$nuxt.$on('showDeleteConfirmation', (idColor?: number) => {
      this.idColor = idColor
      this.visible = true
    })
  },
  methods:  {
    deletePattern() {

    },
    hide() {
      this.visible = false
    },
    reset() {
      this.idColor = this.idColor
    }
  }
})
</script>
<style lang="scss" scoped>
.color-preview {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .color-preview--inner {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
}
</style>
