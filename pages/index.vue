<template>
  <div class="principal-container container">
    <ModalCreateUpdateColor/>
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-brand href="#">
        <img width="40px" src="favicon.png" alt="ICON">
      </b-navbar-brand>
      Hello Dear, You're Welcome!
      <b-btn variant="danger" v-on:click="logout" size="sm">Logout</b-btn>
    </b-navbar>
    <br>
    <h2></h2>
    <h5>Manage your color patterns below:</h5>
    <b-btn @click="showModal" variant="primary">Add Color Pattern</b-btn>
    <b-table 
      class="colors-table"
      hover 
      :items="items.map((item) => {item.actions = {}; return item})"
    >
      <template #cell(text_color)="row">
        <div class="color-preview--table">
          <span class="mr-1">{{ row.item.text_color }}</span>
          <div class="color-circle" :style="`background-color: ${row.item.text_color}`"></div>
        </div>
      </template>
      <template #cell(bg_color)="row">
        <div class="color-preview--table">
          <span class="mr-1">{{ row.item.bg_color }}</span>
          <div class="color-circle" :style="`background-color: ${row.item.bg_color}`"></div>
        </div>
      </template>
      <template #cell(actions)="row">
        <b-button 
          size="sm" 
          variant="primary" 
          class="mr-1"
          @click="showModal(row.item)">
          Edit
        </b-button>
        <b-button size="sm" variant="danger">
          Delete
        </b-button>
      </template>
    </b-table>
    <div class="pagination-container">
      <b-pagination
        v-model="pagination.currentPage"
        :total-rows="pagination.rows"
        :per-page="pagination.perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Color from '~/models/Color'

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      pagination: {
        currentPage: 1,
        rows: 29,
        perPage: 5
      },
      items: [
          { id: 1, bg_color: '#FF0000', text_color: '#000000', active: true, actions: {} },
          { id: 2, bg_color: '#0000FF', text_color: '#FF0000', active: true, actions: {} },
          { id: 3, bg_color: '#000000', text_color: '#0000FF', active: true, actions: {} }
        ]
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout().then(() => {
        location.reload()
      })
    },
    showModal(color?: Color) {
      this.$nuxt.$emit('showModal', color)
    }
  }
})
</script>
<style lang="scss" scoped>
.principal-container {
  margin-top: 40px;
}

.colors-table {
  margin-top: 30px;
}

.color-circle {
  width: 20px; 
  height: 20px; 
  border-radius: 20px;
}

.pagination-container {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.color-preview--table {
  display: flex;
}
</style>
