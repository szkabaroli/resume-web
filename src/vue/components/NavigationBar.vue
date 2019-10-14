<template lang="pug">
	mixin link(text)
		li
			button&attributes(attributes)=text

	mixin social-link(linkTo, src)
		li
			a(href=linkTo target="_blank")
				i(class=src)&attributes(attributes)
	
	header#navigation-bar(:class="{'invert': !top}")
		.container
			nav.row.navigation-inner
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
	import { scrollTo } from '../../shared/utils.js'

	export default {
		props: {
			top: {
				type: Boolean,
				required: true,
			},
		},
		methods: {
			scrollTo,
		},
	}
</script>