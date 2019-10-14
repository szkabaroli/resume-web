<template lang="pug">
	section#about-section
		.container
			.row.about
				h1.headline.line {{ title }}
				p.text {{ text }}
				button.btn.download
					i(class="lni-download")
					p Download CV
</template>

<script>
	import Vue from 'vue'

	export default {
		name: 'about-section',
		props: {
			title: String,
			text: String,
		},
	}
</script>