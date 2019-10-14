<template lang="pug">
	#hero-section
		.container-fluid
			.row
				.profile
					.me(:style="{ backgroundImage: `url('${meImage}')` }")
					.details 
						h1.headline Hello! I'm Roland
						h3 Student & Web Developer
						.hr-line
						ul
							li
								i(class="lni-phone-handset") 
								p Phone: 36 30 461 1540
							li
								i(class="lni-envelope")
								p  Email: <a href="mailto:szkabaroli@gmail.com">szkabaroli@gmail.com</a>
							li
								i(class="lni-apartment")
								p  Address: 32/A 11. Bihari Street, Szeged, HU 6723
							li
								i(class="lni-calendar")
								p  Date of Birth: June 8th, 1999
</template>

<script>
	import Vue from 'vue'

	export default {
		data() {
			return {
				// this needed becouse background-image: url('/images/me.png') in css not going to work
				meImage: '/images/me.png',
			}
		},
	}
</script>

<style lang="scss" scoped>
	#hero-section {
		height: 550px;
		width: 100%;
		padding: 60px 0;
		background: linear-gradient(-45deg, rgba(134, 62, 210, 0.88), rgba(69, 46, 198, 0.88)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
		background-size: cover;
	}

	.profile {
		width: 450px;
		height: 700px;
		margin: 100px auto;
		display: flex;

		@media (min-width: 992px) {
			width: 850px;
			height: 450px;
			margin: 100px auto;
		}

		border-radius: 10px;
		background: #fff;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);

		.me {
			width: 400px;
			height: 450px;
			border-radius: 9px 0 0 9px;

			background-size: 550px;
			background-position-x: -110px;
			background-position-y: 0px;
		}

		.details {
			width: 450px;
			padding: 30px 30px 10px 0px;
			display: flex;
			flex-direction: column;

			h1 {
				color: rgb(134, 62, 210);
				background: linear-gradient(15deg, rgb(134, 62, 210) 20%, rgb(69, 46, 198) 80%);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				font-weight: 700;

				/* fix for IE*/
				@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
					background: transparent;
				}

				margin: 15px 0 15px 0;
			}

			h3 {
				font-size: 15px;
				color: #aab;
				font-weight: 500;
				padding: 10px 0;
			}

			.hr-line {
				height: 1px;
				width: 100%;
				background: #eee;

				margin-bottom: 10px;
			}

			ul {
				list-style: none;
				color: #667;

				li {
					height: 25px;
					margin: 20px 0;
					display: flex;
					line-height: 25px;
				}

				i {
					color: rgba(134, 62, 210, 0.9);
					font-size: 25px;
					margin-right: 10px;
					font-weight: 600;
				}
			}

			.social-buttons {
				justify-items: end;
				button {
					border: none;
					background: transparent;
					padding: 0;
					width: 30px;
					i {
						font-size: 25px;
						color: rgba(134, 62, 210, 0.9);
					}
				}
			}
		}
	}
</style>