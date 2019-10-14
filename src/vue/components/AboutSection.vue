<template lang="pug">
	#about-section
		.container
			.row.about
				h1.headline.line About Me
				p My name is Roland Szarka-Kovács. As a young and motivated student I am extremely interested in submitting an application for the advertised JavaScript Developer position with EPAM Systems. 
					| I love designing websites that look cool and work everywhere. To develop these sites I usually like to use modern frameworks like Vue or React. Someties I go deaper and develop complex backends, using Express or Firebase (what this site using also).
					| If you think I maybe a right candicate for the job, feel free to contact me
			.row
				button.btn.download
					i(class="lni-download")
					p Download CV
</template>

<script>
	import Vue from 'vue'

	export default {}
</script>

<style lang="scss" scoped>
	#about-section {
		height: auto;
		width: 100%;
		padding: 110px 0 140px 0;
	}

	.about {
		padding: 120px 0 10px 0;

		text-align: center;
		width: 600px;
		margin: 0 auto;

		p {
			width: 700px;
			margin: 0 auto;
			padding: 40px 0 60px 0;
			color: #667;
			line-height: 28px;
		}
	}

	.download {
		margin: 0 auto;
	}
</style>