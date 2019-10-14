export const getScrollTop = () => {
	if (typeof pageYOffset != 'undefined') {
		//most browsers except IE before #9
		return pageYOffset
	} else {
		const body = document.body
		let document = document.documentElement
		document = document.clientHeight ? document : body
		return document.scrollTop
	}
}

export const debounce = (func, wait, immediate) => {
	let timeout
	return function () {
		let context = this
		let args = arguments
		var later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow)
			func.apply(context, args)
	};
};

export const scrollTo = el => {
	const element = document.querySelector(el)
	if(element == null) return
	const top = element.getBoundingClientRect().top + window.pageYOffset
	window.scrollTo({
		top, // scroll so that the element is at the top of the view
		behavior: 'smooth', // smooth scroll
	})
}