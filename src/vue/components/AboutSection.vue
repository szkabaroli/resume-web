<template lang="pug">
	#about-section
		.container
			.row
				.about
					h1 About Me
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						| Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						| Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						| Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</template>

<script>
	import Vue from 'vue'

	export default {}
</script>

<style lang="scss" scoped>
	#about-section {
		height: auto;
		width: 100%;
		padding: 110px 0 0 0;
	}

	.about {
		width: 100%;
		padding: 120px 0 30px 0;
		text-align: center;
		h1 {
			width: 160px;
			margin: 0 auto;
			position: relative;

			color: rgb(134, 62, 210);
			background: linear-gradient(
				15deg,
				rgb(134, 62, 210) 20%,
				rgb(69, 46, 198) 80%
			);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			&::before {
				content: '';
				position: absolute;
				background: linear-gradient(to right, #0cebeb, #20e3b2);
				border-radius: 5px;
				height: 5px;
				width: 60px;
				font-weight: 700;
				top: -20px;
				left: 50px;
			}
		}

		p {
			width: 600px;
			margin: 0 auto;
			padding: 40px 0 200px 0;
			color: #667;
		}
	}
</style>