import Vue from 'vue';
import App from './App.vue';

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