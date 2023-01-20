<template>
  <div :class="containerClass">

		<div class="layout-main">
			<div class="layout-content">
				<div class="login-body">
					<div class="login-wrapper">
						<div class="login-panel">
							<div class="login-form">
								<h2>Login To PrimeVue</h2>
								<InputText type="email" autocomplete="off" placeholder="Email" v-model="email" />
								<InputText type="password" autocomplete="off" placeholder="Password"
									v-model="password" />
								<Button label="LOGIN" type="submit" @click="login"></Button>

								<p>You don't have an account? <router-link to="/signUp"> Sign up</router-link></p>
							</div>
						</div>
					</div>
				</div>
				
			</div>


		</div>
	</div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'Login',
        data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		async login() {

			await axios.post('login', { email: this.email, password: this.password });

			await this.$router.push('/about');
		}
	}

    }
</script>

<style>

</style>


