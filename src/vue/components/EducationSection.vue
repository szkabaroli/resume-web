<template lang="pug">
	section#education-section
		.container
			.row.education
				h1.headline.line.white {{ title }}
				p.text {{ text }}
			.row
				.col-12(v-for="school in schools")
					.card
						p.date {{`${school.date}`}}
						div 
							i(class="lni-home") 
							h4 {{school.name}}
						div 
							i(class="lni-graduation") 
							h4 {{school.role}}
</template>

<script>
	import Vue from 'vue'
	
	export default {
		props: {
			title: String,
			text: String,
			schools: Object
		},
	}
</script>