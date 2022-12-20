<template>
  <b-modal 
    id="modal-1"
    v-model="visible"
    :title="title"
    size="sm"
    >
    <b-form 
      @submit="save" 
      @reset="reset"
    >
    <div class="row">
      <b-form-group
        id="input-group-1"
        label="Background Color"
        label-for="bg-color"
        class="col-8"
      >
        <b-form-input
          id="bg-color"
          v-model="color.bg_color"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <div class="color-preview col-4">
        <div class="color-preview--inner" :style="`background-color: ${color.bg_color}`"></div>
      </div>

      <b-form-group 
        id="input-group-2" 
        label="Text Color" 
        label-for="text-color-input"
        class="col-8"
      >
        <b-form-input
          id="text-color-input"
          v-model="color.text_color"
          required
        ></b-form-input>
      </b-form-group>
      <div class="color-preview col-4">
        <div class="color-preview--inner" :style="`background-color: ${color.text_color}`"></div>
      </div>

      <b-form-group 
        id="input-group-3"
        v-slot="{ ariaDescribedby }"
        class="col-12"
      >
        <b-form-checkbox-group
          id="checkbox-group-1"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox v-model="color.active">Active</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
    </div>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import Color from '~/models/Color';

export default Vue.extend({
  data() {
    return {
      visible: false,
      title: '',
      color: {
        id: undefined,
        bg_color: '#937263',
        text_color: '#000000',
        active: true
      } as Color
    }
  },
  beforeMount() {
    this.$nuxt.$on('showModalCreateUpdate', (color?: Color) => {
      if (color) {
        this.title = 'Edit Pattern'
        this.color = color
      } else {
        this.title = 'Add Pattern'
        this.reset()
      }
      this.visible = true
    })
  },
  methods:  {
    save() {

    },
    reset() {
      this.color.id = undefined;
      this.color.bg_color = '#000000';
      this.color.text_color = '#000000';
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
