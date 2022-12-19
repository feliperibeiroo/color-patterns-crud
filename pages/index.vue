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
    <h5>Manage your colors below:</h5>
    <b-btn variant="primary">Add Color</b-btn>
    <b-table 
      class="colors-table"
      hover 
      :items="items"
    >
      <template #cell(color)="row">
        <div class="color-circle" :style="`background-color: ${row.item.hex_code}`"></div>
      </template>
      <template #cell(actions)="row">
        <b-button size="sm" variant="primary" class="mr-1">
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
          { id: 1, color_name: 'Black', hex_code: '#000000', color: null, actions: {} },
          { id: 2, color_name: 'Red', hex_code: '#FF0000', color: null, actions: {}},
          { id: 3, color_name: 'Green', hex_code: '#00FF00', color: null, actions: {}}
        ]
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout().then(() => {
        location.reload()
      })
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
</style>
