<template lang="pug">
	#skills-section
		.container
			.row.skills
				h1.headline.line Skills
				p Since my first programing expereience in 2010 I self learnt a lot of thing that I m interseted in. Here are the languages, technologies that i am  used or contact with during my programing carrear. I only listed skills here, that I think im good at it. To see what level im in with each skill, here is a link to my Github.
			.row
				h2.s-headline Languages 
			.row
				.col-12.col-sm-6.col-lg-4(v-for="item in skills.languages")
					.aspect-wrapper
						.skill-card
							img(:src="item.image") 
							p {{item.name}}
			.row
				h2.s-headline Frameworks & Libraries
			.row
				.col-12.col-sm-6.col-lg-4(v-for="item in skills.frameworks")
					.aspect-wrapper
						.skill-card
							img(:src="item.image") 
							p {{item.name}}
			.row
				h2.s-headline Technologies
			.row
				.col-12.col-sm-6.col-lg-4(v-for="item in skills.technologies")
					.aspect-wrapper
						.skill-card
							img(:src="item.image") 
							p {{item.name}}
</template>

<script>
	import Vue from 'vue'

	export default {
		props: {
			title: String,
			text: String,
			skills: Object
		},
		data() {
			return {
				languages: [
					{
						name: 'ES6',
						image: '/images/es6.png',
					},
					{
						name: 'TypeScript',
						image: '/images/typescript.png',
					},

					{
						name: 'SCSS',
						image: '/images/scss.png',
					},
					{
						name: 'C++',
						image: '/images/cpp.png',
					},
					{
						name: 'Pug',
						image: '/images/pug.png',
					},
				],
				technologies: [
					{
						name: 'MongoDB',
						image: '/images/mongodb.png',
					},
					{
						name: 'Webpack',
						image: '/images/webpack.png',
					},
					{
						name: 'Node.js',
						image: '/images/nodejs.png',
					},
					{
						name: 'Electron',
						image: '/images/electron.png',
					},
					{
						name: 'AWS',
						image: '/images/aws.png',
					},
					{
						name: 'Google Cloud',
						image: '/images/googlec.png',
					},
					{
						name: 'Git',
						image: '/images/git.png',
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
		padding: 10px 0 120px 0;
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
		padding-top: 40%;
		background: white;
		position: relative;
		margin: 15px 0px;
		box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
		border-radius: 5px;

		transition: all .2s ease;
		&:hover {
			transform:scale(1.05);
		}

		div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	h2 {
		padding: 60px 0 20px 0;
	}

	.skills {
		width: 100%;
		padding: 140px 0 10px 0;
		text-align: center;
			width: 600px;
			margin: 0 auto;

		p {
			padding: 40px 0 70px 0;
			color: #667;
			
		}
	}
</style>