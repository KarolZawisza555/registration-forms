<template>
	<q-card
		bordered
		class="my-card bg-grey-1">
		<q-card-section class="q-ma-md column content-center">
			<q-input
				style="max-width: 600px"
				class="q-ma-md"
				color="green-10"
				v-model="v$.name.$model"
				label="Login"
				:error="v$.name.$invalid">
				<template v-slot:prepend>
					<q-icon name="account_circle" />
				</template>
				<template v-slot:error>
					{{ v$.name.$silentErrors[0].$message }}
				</template>
			</q-input>
			<q-input
				style="max-width: 600px"
				class="q-ma-md"
				color="green-10"
				v-model="v$.email.$model"
				label="Email"
				:error="v$.email.$invalid">
				<template v-slot:prepend>
					<q-icon name="email" />
				</template>
				<template v-slot:error>
					{{ v$.email.$silentErrors[0].$message }}
				</template>
			</q-input>
			<q-input
				class="q-ma-md"
				v-model="v$.password.$model"
				:error="v$.password.$invalid"
				filled
				:type="isPwd ? 'password' : 'text'"
				hint="Password">
				<template v-slot:append>
					<q-icon
						:name="isPwd ? 'visibility_off' : 'visibility'"
						class="cursor-pointer"
						@click="isPwd = !isPwd" />
				</template>
				<template v-slot:error>
					{{ v$.password.$silentErrors[0].$message }}
				</template>
			</q-input>
			<q-input
				class="q-ma-md"
				v-model="v$.passwordConfirm.$model"
				filled
				:type="isPwdConfirm ? 'password' : 'text'"
				:error="v$.passwordConfirm.$invalid"
				hint="Password confirm">
				<template v-slot:append>
					<q-icon
						:name="isPwdConfirm ? 'visibility_off' : 'visibility'"
						class="cursor-pointer"
						@click="isPwdConfirm = !isPwdConfirm" />
				</template>
				<template v-slot:error>
					{{ v$.passwordConfirm.$silentErrors[0].$message }}
				</template>
			</q-input>
			<!-- <q-btn
				color="primary"
				@click="checkValidation"
				>Check</q-btn
			> -->
		</q-card-section>
		<q-separator></q-separator>
		<q-card-actions>
			<q-space />
			<q-space />
			<q-btn
				flat
				to="/agreement"
				>Back</q-btn
			>
			<q-btn
				:disable="!!v$.$error"
				flat
				@click="nextPage"
				>Next
			</q-btn>
			<q-space />
		</q-card-actions>
	</q-card>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import {
	minLength,
	maxLength,
	required,
	sameAs,
	email,
} from "@vuelidate/validators";

export default {
	setup: () => ({ v$: useVuelidate() }),
	data: () => ({
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
		isPwd: true,
		isPwdConfirm: true,
		showNextButton: false,
	}),
	methods: {
		async checkValidation() {
			this.showNextButton = await this.v$.$validate();
		},
		async nextPage() {
			const formIsValid = await this.v$.$validate();
			if (formIsValid) {
				this.$router.push("done");
			}
		},
	},
	validations() {
		return {
			name: {
				minLength: minLength(3),
				maxLength: maxLength(12),
				required,
				$lazy: true,
			},
			email: {
				required,
				email,
				$lazy: true,
			},
			password: {
				minLength: minLength(8),
				maxLength: maxLength(20),
				required,
				$lazy: true,
			},
			passwordConfirm: {
				sameAsPassword: sameAs(this.password),
				required,
				$lazy: true,
			},
		};
	},
};
</script>
