<template lang="pug">
	mixin link(linkTo, text)
		li
			a(href=linkTo)=text
	
	nav
		.container
			.row
				.brand Szarka-Kovács Roland
				ul.links
					+link("#", "About")
					+link("#", "Experience")
					+link("#", "Skills")
					+link("#", "Education")
					+link("#", "Works")
					+link("#", "Contact")
				ul.social-links 
					li Li
					li Fa 
					li Git
</template>

<script>
	import Vue from 'vue'

	export default {}
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		list-style: none;

		li {
			margin: 0 10px;
			position: relative;

			a {
				cursor: pointer;
				color: #fff;
				text-decoration: none;
			}

			a:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 3px;
				bottom: 12px;
				left: 0;
				background: rgba(255, 255, 255, 0.2);
				visibility: hidden;
				border-radius: 0px;
				transform: scaleX(0);
				transition: 0.2s ease-in-out;
			}

			a:hover:before,
			a:focus:before {
				visibility: visible;
				transform: scaleX(1);
			}
		}
	}

	nav {
		position: absolute;
		height: 80px;
		line-height: 60px;
		width: 100%;
		color: #fff;
		padding: 10px 0;

		.row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			.brand {
				font-weight: 700;
				font-size: 1.2rem;
			}
		}
	}
</style>