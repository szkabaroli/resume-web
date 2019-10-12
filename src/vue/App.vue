<template lang="pug">
	div
		navigation-bar
		hero-section
</template>

<script>
	import Vue from 'vue'
	import NavigationBar from './components/NavigationBar.vue'
	import HeroSection from './components/HeroSection.vue'

	export default {
		components: {
			NavigationBar,
			HeroSection
		}
	}
</script>

<style lang="scss" scoped>
	p {
		color: green;
	}
</style>