<template>
    <div v-if="loading" class="loading-container">
        <b-spinner label="Spinning"></b-spinner>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            loading: false
        }
    },
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
})
</script>
<style lang="scss">
.loading-container {
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 999;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>