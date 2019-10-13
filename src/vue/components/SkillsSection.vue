<template lang="pug">
	#skills-section
		.container
			.row
				.skills
					h1 Skills!
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			.row
				h2 Languages 
			.row
				.col-12.col-sm-6.col-lg-4(v-for="item in languages")
					.aspect-wrapper
						.skill-card
							img(:src="item.image") 
							p {{item.name}}
			.row
				h2 Frameworks & Libraries
			.row
				.col-12.col-sm-6.col-lg-4(v-for="item in frameworks")
					.aspect-wrapper
						.skill-card
							img(:src="item.image") 
							p {{item.name}}
			.row
				h2 Technologies
			.row
				.col-12.col-sm-6.col-lg-4(v-for="item in technologies")
					.aspect-wrapper
						.skill-card
							img(:src="item.image") 
							p {{item.name}}
</template>

<script>
	import Vue from 'vue'

	export default {
		data() {
			return {
				languages: [
					{
						name: 'ES6',
						image: '/images/es6.png',
						desc: 'Veteran Level',
					},
					{
						name: 'TypeScript',
						image: '/images/typescript.png',
						desc: 'Amateur Level',
					},

					{
						name: 'SCSS',
						image: '/images/scss.png',
						desc: 'Skilled Level',
					},
					{
						name: 'C++',
						image: '/images/cpp.png',
						desc: 'Expert Level',
					},
					{
						name: 'Pug',
						image: '/images/pug.png',
						desc: 'Skilled Level',
					},
				],
				frameworks: [
					{
						name: 'Vue.js',
						image: '/images/vue.png',
						desc: 'Veteran Level',
					},
					{
						name: 'React.js',
						image: '/images/react.png',
						desc: 'Experienced Level',
					},
					{
						name: 'Express',
						image: '/images/express.png',
						desc: 'Expert Level',
					},
					{
						name: 'JQuery',
						image: '/images/jquery.png',
						desc: 'Skilled Level',
					},
					{
						name: 'Passport',
						image: '/images/passport.png',
						desc: 'Amateur Level',
					},
				],
				technologies: [
					{
						name: 'MongoDB',
						image: '/images/mongodb.png',
						desc: 'Skilled Level',
					},
					{
						name: 'Webpack',
						image: '/images/webpack.png',
						desc: 'Experienced Level',
					},
					{
						name: 'Node.js',
						image: '/images/nodejs.png',
						desc: 'Experienced Level',
					},
					{
						name: 'Electron',
						image: '/images/electron.png',
						desc: 'Amateur Level',
					},
					{
						name: 'AWS',
						image: '/images/aws.png',
						desc: 'Skilled Level',
					},
					{
						name: 'Google Cloud',
						image: '/images/googlec.png',
						desc: 'Amateur Level',
					},
					{
						name: 'Git',
						image: '/images/git.png',
						desc: 'Amateur Level',
					},
				],
			}
		},
	}
</script>

<style lang="scss" scoped>
	#skills-section {
		height: auto;
		width: 100%;
		padding: 90px 0 0 0;

		height: 14000px;
	}

	.skill-card {
		text-align: center;
		img {
			height: 40%;
			margin: 6%;
		}

		p {
			font-weight: 600;
		}

		padding: 10px;

		.desc {
			font-weight: 500;
			margin: 10px 0 0 0;
		}
	}

	.aspect-wrapper {
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-top: 55%;
		background: white;
		position: relative;
		margin: 15px 0px;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
		border-radius: 5px;

		div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	h1,
	h2 {
		width: 240px;
		margin: 0 auto;
		position: relative;
		text-align: center;

		color: rgb(134, 62, 210);
		background: linear-gradient(15deg, rgb(134, 62, 210) 20%, rgb(69, 46, 198) 80%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	h2 {
		padding: 60px 0 20px 0;
	}

	h1::before {
		content: '';
		position: absolute;
		background: linear-gradient(to right, #0cebeb, #20e3b2);
		border-radius: 5px;
		height: 5px;
		width: 60px;
		font-weight: 700;
		top: -20px;
		left: 90px;
	}

	.skills {
		width: 100%;
		padding: 120px 0 10px 0;
		text-align: center;

		p {
			width: 600px;
			margin: 0 auto;
			padding: 40px 0 70px 0;
			color: #667;
		}
	}
</style>