<template lang="pug">
	section#experience-section
		.container
			.row
				.experience
					h1.headline.line.white {{ title }}
					p.text {{ text }}
					.timeline-container
						.time-section(v-for="item in timeline")
							.side
								span.date {{item.date}}
								span.line
							p.event {{item.event}}
</template>

<script>
	import Vue from 'vue'

	export default {
		name: 'experience-section',
		props: {
			title: String,
			text: String,
			timeline: Object,
		},
	}
</script>