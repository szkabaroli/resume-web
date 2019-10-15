<template lang="pug">
	section#education-section
		.container
			.row.education
				h1.headline.line.white Education
				p While completing my IT studies I got to know different technologies.
					| This position has given me key employability skills while also allowing me to experience working in a professional and fast-paced work environment.
			.row
				.col-12(v-for="school in schools")
					.card
						p.date {{`${school.from}-${school.to}`}}
						div 
							i(class="lni-home") 
							h4 {{school.name}}
						div 
							i(class="lni-graduation") 
							h4 {{school.region}}
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				schools: [
					{ name: 'Szegedi SzC Gábor Dénes Szakgimnáziuma és Szakközépiskolája', from: '2014', to: '2019', region: 'Information Technology' },
					{ name: 'Szegedi Tudományegyetem - Természettudományi és Informatikai Kar', from: '2019', to: 'Present', region: 'Computer Science Engineering' },
				],
			}
		},
	}
</script>