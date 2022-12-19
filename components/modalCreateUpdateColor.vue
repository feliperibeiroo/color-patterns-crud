<template>
  <photoshop-picker v-model="colors"/>
</template>

<script lang="ts">
//@ts-ignore
import { Photoshop } from 'vue-color'
import Vue from 'vue'

export default Vue.extend({
  components: {
    'photoshop-picker': Photoshop
  },
  data() {
    return {
      colors: '#000'
    }
  }
})
</script>
