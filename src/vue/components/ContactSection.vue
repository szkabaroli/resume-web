<template lang="pug">
	#contact-section
		.container
			.row.contact
				h1.headline.line Social Media
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
	export default {}
</script>

<style lang="scss" scoped>
	#contact-section {
		width: 100%;
		padding: 140px 0 80px 0;
	}
	

	.contact {
		width: 100%;
		padding: 0px 0 10px 0;
		text-align: center;
		width: 600px;
		margin: 0 auto;
	}

	.social-links {
		width: 100%;
		margin: 60px 0;
		display: flex;
		justify-content: center;

		.btn {
			margin: 0 20px;
		}
	}
</style>