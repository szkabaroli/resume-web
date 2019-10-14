import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

Vue.directive('scroll', {
	inserted(el, binding) {
		const f = e => {
			if (binding.value(e, el)) {
				window.removeEventListener('scroll', f)
			}
		}
		window.addEventListener('scroll', f)
	}
})

new Vue(App).$mount('#app')