<template lang="pug">
	#experience-section
		.container
			.row
				.experience
					h1 My Experience
					p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					.container
						.time-section(v-for="item in timeline")
							div.side
								span.date {{item.date}}
								span.line
							p.title {{item.title}}
</template>

<script>
	import Vue from 'vue'

	export default {
		data() {
			return {
				timeline: [
					{
						date: '2010-2013',
						title: 'First Lego Leuge and Lego Sumo Robot Programing and Unity',
					},
					{
						date: '2014',
						title: 'Finished my web design course (Basic html and css)',
					},
					{
						date: '2014 September',
						title: 'Started learning C# language',
					},
					{
						date: '2014-2015',
						title: 'Started learning Javascript language',
					},
					{
						date: '2015-2016',
						title: 'Playing with Node.js and Express',
					},
					{
						date: '2016-2017',
						title: 'EPAM Sytste Smart City project',
					},
					{
						date: '2017',
						title: 'Started learning C++ and OpenGL',
					},
					{
						date: '2017 June-July',
						title: 'EPAM System 1 Month Summer Internship',
					},
					{
						date: '2017 May-June',
						title: 'Started experienting with Vue.js and React.js',
					},
					{
						date: '2018',
						title: 'Started working on bigger more complex websites ideas written in Vue and Express.js',
					},
					{
						date: '2019 October',
						title: 'EPAM IT Night Challange',
					},
				],
			}
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

		h1 {
			width: 240px;
			text-align: center;
			margin: 0 auto;
			position: relative;

			color: #fff;

			&::before {
				content: '';
				position: absolute;
				background: #fff;
				border-radius: 5px;
				height: 5px;
				width: 60px;
				font-weight: 700;
				top: -20px;
				left: 90px;
			}
		}

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