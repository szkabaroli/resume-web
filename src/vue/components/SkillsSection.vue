<template lang="pug">
	#skills-section
		.container
			.row
				.skills
					h1 Skills!
					p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			.row
				.col-12.col-sm-6.col-lg-4(v-for="skill in skills")
					.aspect-wrapper
						.skill-card
							img(:src="skill.image") 
							
							p {{skill.name}}
</template>

<script>
	import Vue from 'vue'

	export default {
		data() {
			return {
				skills: [
					{
						name: 'Vue.js',
						image: require('../../../assets/images/vue.png'),
						knowledge: 1,
					},
					{
						name: 'React.js',
						image: 'vue.png',
						knowledge: 1,
					},
					{
						name: 'Node.js',
						image: 'vue.png',
						knowledge: 1,
					},
					{
						name: '',
						image: 'vue.png',
						knowledge: 1,
					},
					{
						name: '',
						image: 'vue.png',
						knowledge: 1,
					},
					{
						name: '',
						image: 'vue.png',
						knowledge: 1,
					},
					{
						name: '',
						image: 'vue.png',
						knowledge: 1,
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
			height: 70px ;
			margin: 20px;
		}
	}

	.aspect-wrapper {
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-top: 45%;
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

	.skills {
		width: 100%;
		padding: 120px 0 10px 0;
		text-align: center;

		h1 {
			width: 240px;
			margin: 0 auto;
			position: relative;

			color: rgb(134, 62, 210);
			background: linear-gradient(15deg, rgb(134, 62, 210) 20%, rgb(69, 46, 198) 80%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			&::before {
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
		}

		p {
			width: 600px;
			margin: 0 auto;
			padding: 40px 0 70px 0;
			color: #667;
		}
	}
</style>