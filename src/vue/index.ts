import "babel-polyfill"
import Vue from "vue"
import App from "./App.vue"
import smoothscroll from "smoothscroll-polyfill"
smoothscroll.polyfill()

Vue.directive("scroll", {
  inserted(el, binding) {
    const onScroll = (e: Event) => {
      if (binding.value(e, el)) {
        window.removeEventListener("scroll", onScroll)
      }
    }
    window.addEventListener("scroll", onScroll)
  }
})

new Vue(App).$mount("#root")
