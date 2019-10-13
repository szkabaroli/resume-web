<template lang="pug">
	footer#footer
		p © {{currentYear}} Szarka-Kovács Roland.  All rights reserved
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			var date = new Date();

			return {
				currentYear: date.getFullYear()
			}
		}
	}
</script>

<style lang="scss" scoped>
	#footer {
		width: 100%;
		padding: 60px 0 60px 0;
		background: #f1f2f6;

		text-align: center;
		color: rgb(141, 141, 156);

		font-weight: 400;
	}
</style>