<template>
  <b-modal 
    id="modal-1" 
    title="BootstrapVue"
    :visible="visible"
    size="lg"
    >
    <b-form @submit="addColorPattern" @reset="resetFields">
      <b-form-group
        id="input-group-1"
        label="Background Color"
        label-for="bg-color"
      >
        <b-form-input
          id="bg-color"
          v-model="color.bg_color"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Text Color" label-for="text-color-input">
        <b-form-input
          id="text-color-input"
          v-model="color.text_color"
          required
        ></b-form-input>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      visible: true,
      color: {
        bg_color: '#937263',
        text_color: '#000000'
      }
    }
  }
})
</script>
