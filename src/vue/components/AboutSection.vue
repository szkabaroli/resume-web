<template lang="pug">
	section#about-section
		.about
			h1.headline.line {{ title }}
			p.text {{ text }}
			button.btn.download(@click="download('/docs/resume.pdf', 'resume.pdf')")
				i(class="lni-download")
				p Download CV
</template>

<script>
	import Vue from 'vue'
	import { download } from '../../shared/utils.js';


	export default {
		name: 'about-section',
		props: {
			title: String,
			text: String,
		},
		methods: {
			download
		},
	}
</script>