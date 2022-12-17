<template>
  <div class="login-container">
    <div class="title-login-container">
        <h1>Color Patterns</h1>
    </div>
    <b-card
    style="max-width: 30rem; width: 100%"
    >

        <template #header>
            <h5 class="mb-0">Log in to your account</h5>
        </template>
        <b-form @submit="onSubmit">
            <b-form-group
                id="input-group-email"
                label="Email"
                label-for="email-input"
            >
                <b-form-input
                id="email-input"
                v-model="form.email"
                type="email"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-password"
                label="Password"
                label-for="password-input"
            >
                <b-form-input
                id="password-input"
                v-model="form.password"
                type="password"
                required
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  data () {
    return {
        form: {
            email: "",
            password: ""
        }
    }
  }
})
</script>
<style lang="scss" scoped>
.title-login-container {
    h1 {
        text-align: center;
        font-weight: 600;
    }
    padding: 30px 20px;
}

.login-container {
    display: flex;
    background-image: url("/login-background.jpg");
    background-size: cover;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
}
</style>