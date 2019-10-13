<template lang="pug">
	#contact-section
		.container
			.row.contact
				h1 Social Media
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
		padding: 110px 0 80px 0;
	}

	h1,
	h2 {
		width: 240px;
		margin: 0 auto;
		position: relative;
		text-align: center;

		color: rgb(134, 62, 210);
		background: linear-gradient(15deg, rgb(134, 62, 210) 20%, rgb(69, 46, 198) 80%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h2 {
		padding: 60px 0 20px 0;
	}

	h1::before {
		content: '';
		position: absolute;
		background: linear-gradient(to right, #0cebeb, #20e3b2);
		border-radius: 5px;
		height: 5px;
		width: 60px;
		font-weight: 700;
		top: -20px;
		left: 90px;
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