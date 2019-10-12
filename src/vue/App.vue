<template lang="pug">
	div
		navigation-bar
		hero-section
		about-section
</template>

<script>
	import Vue from 'vue'
	import NavigationBar from './components/NavigationBar.vue'
	import HeroSection from './components/HeroSection.vue'
	import AboutSection from './components/AboutSection.vue'

	export default {
		components: {
			NavigationBar,
			HeroSection,
			AboutSection
		}
	}
</script>

<style lang="scss" scoped>
	
</style>

// Global scss
<style lang="scss">
	html, body {
		padding: 0;
		margin: 0;
	}
</style>