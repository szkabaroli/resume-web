<template lang="pug">
	mixin link(text)
		li
			button.link&attributes(attributes)=text

	mixin social-link(linkTo, src)
		li
			a(href=linkTo target="_blank")
				i(class=src)&attributes(attributes)
	
	nav(:class="{'invert': !top}")
		.container
			.row
				a.brand(@click="scrollTo('#hero-section')") Szarka-Kovács Roland
				ul.links
					+link("About")(@click="scrollTo('#about-section')")
					+link("Experience")(@click="scrollTo('#experience-section')")
					+link("Skills")(@click="scrollTo('#skills-section')")
					+link("Education")(@click="scrollTo('#education-section')")
					+link("Social")(@click="scrollTo('#contact-section')")
				ul.social-links 
					+social-link("https://github.com/szkabaroli")(:class="top ? 'lni-github' : 'lni-github-original'")
					+social-link("https://www.facebook.com/rolandakos.szarkakovacs")(:class="top ? 'lni-facebook' : 'lni-facebook-filled'")
					+social-link("https://www.linkedin.com/in/szarka-kovács-roland-4b7008196")(:class="top ? 'lni-linkedin' : 'lni-linkedin-filled'")
</template>

<script>
	import Vue from 'vue'

	export default {
		props: {
			top: {
				type: Boolean,
				required: true,
			},
		},
		methods: {
			scrollTo(el) {
				const element = document.querySelector(el)
				const top = element.getBoundingClientRect().top + window.pageYOffset
				window.scrollTo({
					top, // scroll so that the element is at the top of the view
					behavior: 'smooth', // smooth scroll
				})
			},
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

		&.invert {
			background: #fff;
			box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);

			.brand {
				color: rgb(134, 62, 210) !important;
			}

			.link {
				color: rgb(134, 62, 210) !important;

				&:before {
					background: rgb(134, 62, 210) !important;
				}
			}

			.social-links {
				a {
					color: rgb(134, 62, 210) !important;
				}
			}
		}
		transition: all 0.2s ease;
		position: fixed;
		z-index: 100;

		.row {
			justify-content: space-between;

			.brand {
				font-weight: 700;
				font-size: 19px;

				color: white;
			}

			.links {
				display: none;

				@media (min-width: 992px) {
					display: flex;
				}

				li {
					position: relative;

					.link {
						cursor: pointer;
						color: #fff;
						text-decoration: none;
						border: none;
						font-size: 16px;
						background: transparent;
						outline: none;

						&:before {
							content: '';
							position: absolute;
							width: 100%;
							height: 3px;
							bottom: 12px;
							left: 0;
							background: #fff;
							opacity: 0.3;
							visibility: hidden;
							border-radius: 0px;
							transform: scaleX(0);
							transition: 0.2s ease-in-out;
						}

						&:hover:before,
						&:focus:before {
							visibility: visible;
							transform: scaleX(1);
						}
					}
				}
			}

			.social-links {
				a {
					cursor: pointer;
					color: #fff;
					text-decoration: none;
					transition: all 0.2s ease;
					opacity: 0.7;
					font-weight: 600;
				}

				a:hover {
					opacity: 1;
				}

				i {
					font-size: 20px;
				}
			}
		}
	}
</style>