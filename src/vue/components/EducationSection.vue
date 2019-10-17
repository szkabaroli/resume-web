<template lang="pug">
	section#education-section
		.container
			.row.education
				h1.headline.line.white Education
				p.text While completing my IT studies I got to know different technologies.
					| This position has given me key employability skills while also allowing me to experience working in a professional and fast-paced work environment.
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
			schools: Object
		},
	}
</script>