<template lang="pug">
	footer#footer
		p © {{ currentYear }} Szarka-Kovács Roland.  All rights reserved
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				currentYear: new Date().getFullYear(),
			}
		},
	}
</script>