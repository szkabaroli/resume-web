<template lang="pug">
	div(v-scroll="onScroll")
		navigation-bar(:top="top")
		hero-section
		about-section
		experience-section
		skills-section
		education-section
		contact-section
		v-footer
</template>

<script>
	import Vue from 'vue'
	import NavigationBar from './components/NavigationBar.vue'
	import HeroSection from './components/HeroSection.vue'
	import AboutSection from './components/AboutSection.vue'
	import ExperienceSection from './components/ExperienceSection.vue'
	import SkillsSection from './components/SkillsSection.vue'
	import EducationSection from './components/EducationSection.vue'
	import ContactSection from './components/ContactSection.vue'
	import Footer from './components/Footer.vue'

	function getScrollTop() {
		if (typeof pageYOffset != 'undefined') {
			//most browsers except IE before #9
			return pageYOffset
		} else {
			const body = document.body
			let document = document.documentElement
			document = document.clientHeight ? document : body
			return document.scrollTop
		}
	}

	export default {
		components: {
			NavigationBar,
			HeroSection,
			AboutSection,
			ExperienceSection,
			SkillsSection,
			EducationSection,
			ContactSection,
			'v-footer': Footer,
		},
		data() {
			return {
				top: true,
			}
		},
		methods: {
			onScroll(e) {
				this.top = getScrollTop() == 0
			},
		},
	}
</script>