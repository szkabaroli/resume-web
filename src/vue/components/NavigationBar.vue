<template lang="pug">
	mixin link(linkTo, text)
		li
			a(href=linkTo)=text

	mixin social-link(linkTo, src)
		li
			i(class=src)
	
	nav
		.container
			.row
				.brand Szarka-Kovács Roland
				ul.links
					+link("#", "About")
					+link("#", "Experience")
					+link("#", "Skills")
					+link("#", "Education")
					+link("#", "Works")
					+link("#", "Contact")
				ul.social-links 
					+social-link("#", "fab fa-github")
					+social-link("#", "fab fa-facebook-f")
					+social-link("#", "fab fa-linkedin-in")
</template>

<script>
	import Vue from 'vue'

	export default {
		data() {
			return {}
		},
	}
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		list-style: none;

		li {
			margin: 0 14px;
		}
	}

	nav {
		position: absolute;
		height: 80px;
		line-height: 60px;
		width: 100%;
		color: #fff;
		padding: 10px 0;

		.row {
			justify-content: space-between;

			.brand {
				font-weight: 700;
				font-size: 1.2rem;
			}

			.links {
				display: none;

				@media (min-width: 992px) {
					display: flex;
				}

				li {
					position: relative;

					a {
						cursor: pointer;
						color: #fff;
						text-decoration: none;
					}

					a:before {
						content: '';
						position: absolute;
						width: 100%;
						height: 3px;
						bottom: 12px;
						left: 0;
						background: rgba(255, 255, 255, 0.2);
						visibility: hidden;
						border-radius: 0px;
						transform: scaleX(0);
						transition: 0.2s ease-in-out;
					}

					a:hover:before,
					a:focus:before {
						visibility: visible;
						transform: scaleX(1);
					}
				}
			}

			.social-links {
				li {
					opacity: 0.5;
					transition: 0.2s ease-in-out;
					cursor: pointer;
				}

				i {
					font-size: 20px;
				}

				li:hover {
					opacity: 1;
				}
			}
		}
	}
</style>