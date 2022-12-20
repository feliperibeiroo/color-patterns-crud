<template>
  <div class="principal-container container">
    <ModalCreateUpdate/>
    <ModalDelete/>
    <Alert/>
    <b-navbar toggleable type="light" variant="light">
      <b-navbar-brand href="#">
        <img width="40px" src="favicon.png" alt="icon">
      </b-navbar-brand>
      Hello Dear, You're Welcome!
      <b-btn variant="danger" v-on:click="logout" size="sm">
        Logout
      </b-btn>
    </b-navbar>
    <br>
    <h2></h2>
    <h5>Manage your color patterns below:</h5>
    <b-btn @click.prevent="showModalCreateUpdate()" variant="primary">
      Add Color Pattern
    </b-btn>
    <b-table 
      class="colors-table"
      hover 
      :items="items"
      :fields="fields"
      :busy="busy"
    >
      <template #cell(text_color)="row">
        <div class="color-preview--table">
          <span class="mr-1">{{ row.item.text_color }}</span>
          <div 
            class="color-circle" 
            :style="`background-color: ${row.item.text_color}`"
          ></div>
        </div>
      </template>
      <template #cell(active)="row">
        <b-icon v-if="row.item.active==1" icon="check"></b-icon>
        <b-icon v-else icon="x"></b-icon>
      </template>
      <template #cell(bg_color)="row">
        <div class="color-preview--table">
          <span class="mr-1">{{ row.item.bg_color }}</span>
          <div 
            class="color-circle" 
            :style="`background-color: ${row.item.bg_color}`"
          ></div>
        </div>
      </template>
      <template #cell(actions)="row">
        <b-button 
          size="sm" 
          variant="primary" 
          class="mr-1"
          @click.prevent="showModalCreateUpdate(row.item)">
          Edit
        </b-button>
        <b-button 
          size="sm" 
          variant="danger"
          @click.prevent="showModalDelete(row.item.id)"
        >
          Delete
        </b-button>
      </template>
    </b-table>
    <div class="pagination-container">
      <b-pagination
        @change="changePage"
        v-model="pagination.currentPage"
        :total-rows="pagination.rows"
        :per-page="pagination.perPage"
      ></b-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Color from '~/models/Color'
import { IconsPlugin } from 'bootstrap-vue'

Vue.use(IconsPlugin)

export default Vue.extend({
  name: 'IndexPage',
  data () {
    return {
      fields: ['id', 'bg_color', 'text_color', 'active', 'actions'],
      pagination: {
        currentPage: 1,
        rows: 1,
        perPage: 1,
      },
      busy: false,
      items: [] as Array<Color>
    }
  },
  beforeMount () {
    this.$nuxt.$on('fetchData', () => {
      this.fetchData()
    })
  },
  async fetch() {
    await this.fetchData()
  },
  methods: {
    async changePage(pageNumber:number) {
      this.pagination.currentPage = pageNumber
      
      this.fetchData()
    },
    async logout() {
      await this.$auth.logout().then(() => {
        location.reload()
      })
    },
    async fetchData() {
      this.busy = true
      let response = await this.$store.dispatch('listColorPatterns', this.pagination.currentPage)
      
      if (response) {
        this.pagination.currentPage = response.pagination.current_page
        this.pagination.perPage = response.pagination.per_page
        this.pagination.rows = response.pagination.total
        this.items = response.entities
      }
      this.busy = false
    },
    async showModalCreateUpdate(color?: Color) {
      this.$nuxt.$emit('showModalCreateUpdate', color)
    },
    async showModalDelete(idColor?: number) {
      this.$nuxt.$emit('showDeleteConfirmation', idColor)
    },
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
