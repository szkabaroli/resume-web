<template lang="pug">
	section#experience-section
		.container
			.row
				.experience
					h1.headline.line.white My Experience
					p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					.container
						.time-section(v-for="item in timeline")
							div.side
								span.date {{item.date}}
								span.line
							p.title {{item.event}}
</template>

<script>
	import Vue from 'vue'

	export default {
		name: 'experience-section',
		props: {
			title: String,
			text: String,
			timeline: Object
		},
	}
</script>

<style lang="scss" scoped>
	#experience-section {
		height: auto;
		width: 100%;
		padding: 10px 0 0 0;
		background: linear-gradient(-45deg, rgba(134, 62, 210, 0.93), rgba(69, 46, 198, 0.93)), url('https://images.unsplash.com/photo-1521055654799-26999bb3a60c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2614&q=80');
		background-size: cover;
		background-position: center;
	}

	.experience {
		width: 100%;
		padding: 140px 0 0px 0;

		.description {
			width: 600px;
			margin: 0 auto;
			padding: 40px 0 110px 0;
			color: rgba(255, 255, 255, 0.8);
		}

		.container {
			width: 450px;
			margin: 0 auto;

			.time-section {
				display: flex;
				flex-direction: row;
				justify-items: start;

				.side {
					display: flex;
					flex-direction: column;
					.date {
						background: rgba(255, 255, 255, 0.3);
						color: rgba(255, 255, 255, 0.9);
						padding: 10px 0px;
						width: 140px;
						text-align: center;
						border-radius: 5px;
					}

					.line {
						margin: 0 0 0 90px;
						justify-self: end;
						width: 4px;
						background: rgba(255, 255, 255, 0.3);
						height: 60px;
					}
				}
				.title {
					padding: 0 20px 0 20px;
					color: rgba(255, 255, 255, 0.8);
					align-self: baseline;
					height: auto;
				}
			}
		}
	}
</style>