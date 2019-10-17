<template lang="pug">
	div.main(v-scroll="onScroll")
		navigation-bar(:top="top")
		hero-section(:welcome="texts.hero.welcome" :role="texts.hero.role" :contacts="texts.hero.contacts")
		about-section(:title="texts.about.title" :text="texts.about.text")
		experience-section(:title="texts.experience.title" :text="texts.experience.text" :timeline="timeline")
		skills-section(:title="texts.skills.title" :text="texts.skills.text" :skills="skills")
		education-section(:title="texts.education.title" :text="texts.education.text" :schools="schools")
		contact-section(:title="texts.contact.title")
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

	import { getScrollTop, debounce } from '../shared/utils.js'
	import { getTexts, getExperienceTimeline, getSkills, getSchools } from '../shared/service.js'

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
				texts: {
					hero: {
						welcome: '',
						role: '',
						contacts: {
							phone: '',
							email: '',
							address: '',
							birthdate: '',
						},
					},
					about: {
						title: '',
						text: '',
					},
					experience: {
						title: '',
						text: '',
					},
					skills: {
						title: '',
						text: '',
					},
					education: {
						title: '',
						text: '',
					},
					contact: {
						title: '',
					},
				},
				timeline: {},
				skills: {},
				schools: {},
				top: true,
			}
		},
		async created() {
			this.texts = await getTexts()
			this.timeline = await getExperienceTimeline()
			this.skills = await getSkills()
			this.schools = await getSchools()
		},
		methods: {
			onScroll: debounce(function onScroll(e) {
				this.top = getScrollTop() == 0
			}, 15),
		},
	}
</script>