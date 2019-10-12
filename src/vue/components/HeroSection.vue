<template lang="pug">
	div#hero
</template>

<script>
	import Vue from 'vue'

	export default {
		name: 'navigation-bar'
	}
</script>

<style lang="scss" scoped>
	div {
		background: linear-gradient(-45deg, rgba(134, 62, 210, .95), rgba(69, 46, 198, 95)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
		background-size: cover;

		height: 450px;
		display: block;
		width: 100%;
		padding: 60px 0;
	}
</style>