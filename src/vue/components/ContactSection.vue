<template lang="pug">
	section#contact-section
		.container
			.row.contact
				h1.headline.line {{title}}
			.row
				.social-links
					a.btn.github(href="https://github.com/szkabaroli" target="_blank")
						i(class="lni-github")
						p Github
					a.btn.facebook(href="https://www.facebook.com/rolandakos.szarkakovacs" target="_blank")
						i(class="lni-facebook")
						p Facebook
					a.btn.linkedin(href="https://www.linkedin.com/in/szarka-kovács-roland-4b7008196" target="_blank")
						i(class="lni-linkedin")
						p LinkedIn
</template>

<script>
	import Vue from 'vue'
	export default {
		props: {
			title: String
		}
	}
</script>