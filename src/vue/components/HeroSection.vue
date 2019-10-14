<template lang="pug">
	section#hero-section
		.container-fluid
			.row
				.profile
					.me(:style="{ backgroundImage: `url('${meImage}')` }")
					.details 
						h1 {{ welcome }}
						p {{ role }}
						.hr-line
						ul
							li
								i(class="lni-phone-handset") 
								p Phone: {{ contacts.phone }}
							li
								i(class="lni-envelope")
								p  Email:
									a(:href="`mailto:${contacts.email}`")  {{ contacts.email }}
							li
								i(class="lni-apartment")
								p  Address: {{ contacts.address }}
							li
								i(class="lni-calendar")
								p  Date of Birth: {{ contacts.birthdate }}
</template>

<script>
	import Vue from 'vue'

	export default {
		props: {
			welcome: String,
			role: String,
			contacts: Object,
		},
		data() {
			return {
				// this needed becouse background-image: url('/images/me.png') in css not going to work
				meImage: '/images/me.png',
			}
		},
	}
</script>