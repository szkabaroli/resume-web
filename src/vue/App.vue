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

	export default {
		components: {
			NavigationBar,
			HeroSection,
			AboutSection,
			ExperienceSection,
			SkillsSection,
			EducationSection,
			ContactSection,
			'v-footer': Footer
		},
		data() {
			return {
				top: true
			}
		},
		methods: {
			onScroll(e) {
				this.top = (e.target.scrollingElement.scrollTop == 0)
			}
		}
	}
</script>