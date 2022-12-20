<template>
    <div class="alert-container container d-flex justify-content-center">
        <b-alert 
            :show="dismissCountDown"
            :variant="variant"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
            {{ msg }}
        </b-alert>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            msg: '',
            variant: 'primary',
            dismissSecs: 5,
            dismissCountDown: 0,
            showDismissibleAlert: false
        }
    },
    beforeMount() {
        this.$nuxt.$on('errorAlert', (msg: string) => {
            this.msg = msg
            this.variant = 'danger'
            this.showAlert()
        })

        this.$nuxt.$on('successAlert', (msg: string) => {
            this.msg = msg
            this.variant = 'success'
            this.showAlert()
        })
    },
    methods: {
        countDownChanged(dismissCountDown:number) {
            this.dismissCountDown = dismissCountDown
        },
        showAlert() {
            this.dismissCountDown = this.dismissSecs
        }
    }
})
</script>
<style lang="scss" scoped>
.alert-container {
    position: absolute;
    bottom: 40px;
    display: flex;
    justify-content: center;
}

.alert {
    width: max-content;
}
</style>