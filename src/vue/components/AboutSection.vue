<template lang="pug">
	#about-section
		.container
			.row.about
				h1 About Me
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					| Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					| Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					| Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

		h1 {
			width: 160px;
			margin: 0 auto;
			position: relative;

			color: rgb(134, 62, 210);
			background: linear-gradient(15deg, rgb(134, 62, 210) 20%, rgb(69, 46, 198) 80%);
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
			padding: 40px 0 60px 0;
			color: #667;
		}
	}

	.download {
		margin: 0 auto;
	}
</style>

<style lang="scss">
	.btn {
		cursor: pointer;
		outline: none;
		border: none;
		border-radius: 5px;
		padding: 15px 20px;
		text-decoration: none;

		line-height: 20px;
		font-size: 15px;
		font-weight: 500;
		transition: all 0.15s ease;

		box-shadow: 0 8px 16px rgba(250, 149, 71, 0.25);
		background: rgba(250, 149, 71, 1);
		background: linear-gradient(109.6deg, rgba(250, 165, 147, 1) 11.2%, rgba(250, 149, 71, 1) 91.1%);
		color: #fff;

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 16px rgba(250, 149, 71, 0.4);
		}

		&:active {
			transform: translateY(1px);
			box-shadow: 0 8px 16px rgba(250, 149, 71, 0.1);
		}

		&:focus {
			transform: translateY(-3px);
			opacity: 0.8;
		}

		display: flex;

		i {
			font-size: 20px;
			padding: 0 10px 0 0;
		}

		&.github {
			background-image: linear-gradient(240deg, rgba(77, 88, 105, 1) 4.8%, rgba(39, 43, 57, 1) 86.7%);
			box-shadow: 0 8px 16px rgba(39, 43, 57, .25);
			color: #fff;

			&:hover {
				background-image: linear-gradient(240deg, rgba(77, 88, 105, 1) 4.8%, rgba(39, 43, 57, 1) 86.7%);
				box-shadow: 0 8px 16px rgba(39, 43, 57, .4);
			}

			&:active {
				background-image: linear-gradient(240deg, rgba(77, 88, 105, 1) 4.8%, rgba(39, 43, 57, 1) 86.7%);
				box-shadow: 0 8px 16px rgba(39, 43, 57, .1);
			}
		}

		&.facebook {
			background-image: linear-gradient( 240deg,  rgb(103, 148, 236) 3.6%, rgb(66, 103, 178) 80.9% );
			box-shadow: 0 8px 16px rgba(66, 103, 178, 0.25);
			color: #fff;

			&:hover {
				background-image: linear-gradient( 240deg,  rgb(103, 148, 236) 3.6%, rgb(66, 103, 178) 80.9% );
				box-shadow: 0 8px 16px rgba(66, 103, 178, 0.4);
			}

			&:active {
				background-image: linear-gradient( 240deg,  rgb(103, 148, 236) 3.6%, rgb(66, 103, 178) 80.9% );
				box-shadow: 0 8px 16px rgba(66, 103, 178, 0.1);
			}
		}

		&.linkedin {
			background-image: linear-gradient( 240deg,  rgb(0, 180, 240) 3.6%, rgb(0, 144, 194) 86.9% );
			box-shadow: 0 8px 16px rgba(0, 144, 194, 0.25);
			color: #fff;

			&:hover {
				background-image: linear-gradient( 240deg,  rgb(0, 180, 240) 3.6%, rgb(0, 144, 194) 86.9% );
				box-shadow: 0 8px 16px rgba(0, 144, 194, 0.4);
			}

			&:active {
				background-image: linear-gradient( 240deg,  rgb(0, 180, 240) 3.6%, rgb(0, 144, 194) 86.9% );
				box-shadow: 0 8px 16px rgba(0, 144, 194, 0.1);
			}
		}
	}
</style>