<template lang="pug">
	#education-section
		.container
			.row.education
				h1 Education
				p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			.row
				.col-12(v-for="school in schools")
					.card
						p.date {{`${school.from}-${school.to}`}}
						div 
							i(class="lni-home") 
							h4 {{school.name}}
						div 
							i(class="lni-graduation") 
							h4 {{school.region}}
</template>

<script>
	import Vue from 'vue'
	export default {
		data() {
			return {
				schools: [
					{ name: 'Szegedi SzC Gábor Dénes Szakgimnáziuma és Szakközépiskolája', from: '2014', to: '2019', region: 'Information Technology' },
					{ name: 'Szegedi Tudományegyetem - Természettudományi és Informatikai Kar', from: '2019', to: '*2022*', region: 'Computer Science Engineering' },
				],
			}
		},
	}
</script>

<style lang="scss" scoped>
	#education-section {
		height: auto;
		width: 100%;
		padding: 110px 0 80px 0;

		background: linear-gradient(-45deg, rgba(134, 62, 210, 0.93), rgba(69, 46, 198, 0.93)), url('https://images.unsplash.com/photo-1521055654799-26999bb3a60c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2614&q=80');
		background-size: cover;
		background-position: center;

		//background: #f1f2f6;
	}

	h1,
	h2 {
		width: 240px;
		margin: 0 auto;
		position: relative;
		text-align: center;

		color: #FFF;
	}

	h2 {
		padding: 60px 0 20px 0;
	}

	h1::before {
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

	.education {
		width: 100%;
		padding: 0px 0 10px 0;
		text-align: center;
		width: 600px;
		margin: 0 auto;

		p {
			padding: 40px 0 70px 0;
			color: rgba(255, 255, 255, 0.7);
		}
	}

	.card {
		margin: 0px auto 80px auto;
		max-width: 700px;
		position: relative;
		width: 100%;
		border-radius: 10px;
		background: #fff;

		padding: 50px 40px 40px 40px;

		transition: all 0.2s ease;
		&:hover {
			transform: scale(1.01);
		}

		.date {
			position: absolute;
			top: -30px;
			left: 45px;

			font-size: 15px;
			padding: 15px 20px;
			border-radius: 5px;

			font-weight: 600;
			color: #fff;

			background: #20e3b2;
			background: linear-gradient(60deg, #0cebeb, #20e3b2);

			box-shadow: 5px 5px 10px rgba(32, 227, 178, 0.2);
		}

		div {
			line-height: 27px;
			display: flex;
			margin: 10px 0;

			i {
				color: rgb(134, 62, 210);
				font-weight: 1000;
				font-size: 27px;
			}

			h4 {
				color: #99b;
				font-weight: 500;
				margin: 0 15px;
				font-size: 16px;
			}
		}
	}
</style>